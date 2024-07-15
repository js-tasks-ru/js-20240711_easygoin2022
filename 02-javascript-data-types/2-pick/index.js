/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    let arr = Object.entries(obj);
    let newArr = [];
    
    for(let field of fields){
        for(let item of arr){
            if(item[0] === field){
                newArr.push(item);
            }
        }
    }

    return Object.fromEntries(newArr);
};
