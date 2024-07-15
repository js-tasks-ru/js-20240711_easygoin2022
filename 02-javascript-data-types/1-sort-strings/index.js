/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    let sorted = arr.map(item => item);

    if(param === 'asc') {

        sorted.sort((a, b) => a.localeCompare(b, ['ru-RU', 'en-EN'], {caseFirst: 'upper'}));

    } else if(param === 'desc'){

        sorted
        .sort((a, b) => a.localeCompare(b, ['ru-RU', 'en-EN'], {caseFirst: 'lower'}))
        .reverse()

    } 

    return sorted;
}
