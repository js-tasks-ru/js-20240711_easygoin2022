/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    let arr = Object.entries(obj);
    for(let i = 0; i < arr.length; i++){
        arr = arr.filter(item => item[0] != fields[i]);
    }

    return Object.fromEntries(arr);
};
