/* 
Returns {} where key is missing kvPair. Each Cookie is the original - onedistinctVal 
The ultimate goal is to test if if a request can succeed without a cookie val
*/
function createCookieCombos(fullcookie) {
    let kvPairs = fullcookie.split(';').filter(i => i.length > 0)
    let cookieObjs = {};

    //Could optimize this later (also this logic cannot test when same kvPair is sent more than once)
    for (let i = 0; i < kvPairs.length - 1; i++) {
        let cookie = {}
        let cookieStr = fullcookie
        cookie.fullString = cookieStr.replace(kvPairs[i] + ';', '')
        cookie.missingKV = kvPairs[i]
        cookieObjs[kvPairs[i]] = cookie
    }
    return cookieObjs
}


function randomizeCookieOrder(fullcookie) {
    let kvPairs = fullcookie.split(';').filter(i => i.length > 0)
    return kvPairs.sort(() => Math.random() - 0.5).reduce((out, i) => { return out + i + ';' }, '')

}

export { createCookieCombos, randomizeCookieOrder }