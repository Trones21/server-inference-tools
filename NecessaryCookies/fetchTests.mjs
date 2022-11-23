import fetch from 'node-fetch'

async function fetchLoop(fetchAlone, cookiesObjs, loglevel = false) {
    for (let [key, obj] of Object.entries(cookiesObjs)) {
        fetchAlone.options.headers.cookie = obj.fullString
        let res = await fetch(fetchAlone.url, fetchAlone.options)
        if (res.status > 299 || res.status < 200) {
            cookiesObjs[key].ifRemoved = 'fail'
        }
        else {
            cookiesObjs[key].ifRemoved = 'success'
        }

        //Simple logging to show the missing kvPair as well as the response status
        if (loglevel === 1) {
            console.log(cookiesObjs[key].ifRemoved + ":" + res.status + ":" + obj.missingKV)
        }
        //Logging - More Extensive
        if (loglevel === 2) {
            if (res.status > 299 || res.status < 200) {
                console.groupCollapsed(res.status)
                console.error(`Status: ${res.status}`)
                console.log(fetchAlone.url)
                console.log(fetchAlone.options)
                console.log(res)
                console.groupEnd()
            }
        }
    }
    return cookiesObjs;
}

export { fetchLoop };

