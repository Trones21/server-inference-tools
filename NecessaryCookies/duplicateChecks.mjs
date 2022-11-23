function checkForDuplicateKVPairs(fullcookie) {
    let cookies = {}
    let kvPairs = fullcookie.split(';')
    for (let i in kvPairs) {
        if (!cookies[i]) {
            cookies[i] = true;
        } else {
            return `Duplicates exist. ${cookies[i]}`
        }
    }
}

function checkForDuplicateKeys(fullcookie, checkall = false) {
    let cookies = {}
    let kvPairs = fullcookie.split(';')

    if (checkall === true) {
        let duplicateKeys = [];
        for (let i of kvPairs) {
            let key = i.split('=')[0];
            if (!cookies[key]) {
                cookies[key] = true
            } else {
                duplicateKeys.push(key)
            }
        }
        return `Dupicates exist. Duplicate Key List: ${duplicateKeys.reduce((total, curr) => { return total = total + ',' + curr })}`
    }

    if (checkall === false) {
        for (let i of kvPairs) {
            let key = i.split('=')[0];
            if (!cookies[key]) {
                cookies[key] = true
            } else {
                return `Dupicates exist. CheckAll is false, therefore only the first duplictae is returned: ${key}`
            }
        }
    }
}

export { checkForDuplicateKVPairs, checkForDuplicateKeys }