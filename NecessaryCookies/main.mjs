import { url, options } from './fetchInfo.mjs'
import { createCookieCombos, randomizeCookieOrder } from './cookieTransforms.mjs'
import { fetchLoop } from './fetchTests.mjs'


async function main(nodeFetch) {

    //Verify base is working
    let res = await fetch(nodeFetch.url, nodeFetch.options)
    if (res.status < 200 || res.status > 299) {
        console.log('Initial fetch is broken')
        console.log(res.statusText)
        return;
    }

    //Check if Cookie Order Matters
    let randomizedCookieOrder = await JSON.parse(JSON.stringify(nodeFetch))
    randomizedCookieOrder.options.headers.cookie = randomizeCookieOrder(randomizedCookieOrder.options.headers.cookie)
    let rres = await fetch(randomizedCookieOrder.url, randomizedCookieOrder.options)
    if (rres.status < 200 || rres.status > 299) {
        console.log('Order matters')
        console.log(res.statusText)
        return;
    }

    //Check with removal of each keyvalue pair (one at a time)
    let fullcookie = nodeFetch.options.headers.cookie
    let fetchWithoutCookie = await JSON.parse(JSON.stringify(nodeFetch))
    fetchWithoutCookie.options.headers.cookie = ""
    let cookiesObjs = createCookieCombos(fullcookie)

    let responses = await fetchLoop(fetchWithoutCookie, cookiesObjs)
    let minimalCookieStr = ''
    for (let [k, obj] of Object.entries(responses)) {
        if (obj.ifRemoved === 'fail') {
            minimalCookieStr += obj.missingKV + ';'
        }
    }

    let strippedFetch = await JSON.parse(JSON.stringify(nodeFetch))
    strippedFetch.options.headers.cookie = minimalCookieStr
    let bareRes = await fetch(strippedFetch.url, strippedFetch.options)
    if (bareRes.status < 200 || bareRes.status > 299) {
        console.log('Barebones Res fail')
        console.log(bareRes.status)
        console.log(bareRes.statusText)
        console.log(`Attempted with Cookie: ${minimalCookieStr}`)
        //If this happens we know the set of key value pairs we can successfully delete.
        //But the inverse set (kvPairs needed) results in an unsuccesful request... this is odd. 
        //*****Could be due to throttling or soemthing else -- change the loglevel on fetchloop for more info 

        //ToDo: Figure out what could be tried next. Generate all combos and find shortest successful?
        //******* This is just not going to work with 10 items we get 1k, with 20 it's 1M... would need a distributed architecture
        //Now maybe just delete one by one???
    } else {
        console.log('Barebones Res success')
        console.log(bareRes.status)
        console.log(`Necessary cookie string is: ${minimalCookieStr}`)
    }
}

console.log("Running")
let nFetch = {}
nFetch.url = url
nFetch.options = options;
main(nFetch)


