/**
 * Notes:
 * 1. If you want to use 'this' in the function, do not use arrow functions.
 * Use the default function(params) {}
 * 2. Using prototype adds the function to every instance of objects, including itself.
 * That's why 'grabKeys' and 'grabValues' and ['Function'] were added to every object.
 * The solution is to just not add the function to the prototype.
 * 3. let deepCopyOfArr = JSON.parse(JSON.stringify(arr));
 * console.log(deepCopyOfArr);
 */
