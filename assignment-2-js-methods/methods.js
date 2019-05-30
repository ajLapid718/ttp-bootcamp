/**
 * Notes:
 * 1. If you want to use 'this' in the function, do not use arrow functions.
 * Use the default function(params) {}
 * 2. Using prototype adds the function to every instance of objects, including itself.
 * That's why 'grabKeys' and 'grabValues' and ['Function'] were added to every object.
 * The solution is to just not add the function to the prototype.
 */

let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let obj = { apple: "red", sky: "blue", grass: "green" };
let obj2 = { apple: "red", sky: "blue", grass: "green" };
let double = a => {
  return 2 * a;
};
let gt3 = num => {
  return num > 3;
};
let sum = (accumulator, currentValue) => accumulator + currentValue;

console.log("-----------arr below------------");
console.log(arr);

Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

console.log("------------myEach(console.log) below------------");
arr.myEach(console.log);

Array.prototype.myMap = function(callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i]));
  }
  return newArr;
};

console.log("------------myMap(console.log) below------------");
arr.myMap(console.log);

Array.prototype.myFilter = function(callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

console.log(
  "------------myFilter9) of only numbers greater than 3 below------------"
);
console.log(arr.myFilter(gt3));

Array.prototype.mySome = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return true;
    }
  }
  return false;
};

console.log(
  "------------mySome() of any number greater than 3 below------------"
);
console.log(arr.mySome(gt3));

Array.prototype.myEvery = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i])) {
      return false;
    }
  }
  return true;
};

console.log("------------myEvery() number greater than 3 below------------");
console.log(arr.myEvery(gt3));

Array.prototype.myReduce = function(callback) {
  let total = 0;
  for (let i = 0; i < this.length; i++) {
    total = callback(total, this[i]);
  }
  return total;
};

console.log("------------myReduce() sum of all numbers below------------");
console.log(arr.myReduce(sum));

Array.prototype.myIncludes = function(target) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === target) {
      return true;
    }
  }
  return false;
};

console.log("------------myIncludes(5) below------------");
console.log(arr.myIncludes(5));

Array.prototype.myIndexOf = function(target) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log("------------myIndexOf(5) below------------");
console.log(arr.myIndexOf(5));

Array.prototype.myPush = function(target) {
  this[this.length] = target;
};

console.log("------------myPush(7) below------------");
arr.myPush(7);
console.log(arr);

Array.prototype.myUnshift = function(target) {
  let index;
  for (let i = 0; i < this.length; i++) {
    if (this[i] === target) {
      index = i;
    }
  }
  return index;
};

console.log("------------myUnshift(5) below------------");
console.log(arr.myUnshift(5));

Object.grabKeys = object => {
  let keys = [];
  for (let key in object) {
    keys.push(key);
  }
  return keys;
};

console.log("------------obj and obj2 below------------");
console.log(obj);
console.log(obj2);

console.log("------------grabKeys() below------------");
console.log(Object.grabKeys(obj));

Object.grabValues = object => {
  let values = [];
  for (let key in object) {
    values.push(object[key]);
  }
  return values;
};

console.log("------------grabValues() below------------");
console.log(Object.grabValues(obj));

// ******************************
// ******************************
// *********EXTRA_STUFF**********
// ******************************
// ******************************

let range = num => {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  console.log(total);
  return total;
};

// range(100);

let reverseArray = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[arr.length - 1 - i];
  }
  console.log(newArr);
  return newArr;
};

// reverseArray(arr);

let reverseArrayInPlace = arr => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  console.log(arr);
  return arr;
};

// reverseArrayInPlace(arr);

// Work in progress
let arrayToList = arr => {
  let newObj = {};
  for (let i = 0; i < arr.length; i++) {
    // newObj[i].value = arr[i];
    // Having issues here.
  }
  // console.log(newObj);
};

// arrayToList(arr);

// Work in progress
let listToArray = arr => {};

let deepEqual = (a, b) => {
  if (a === null || b === null) {
    return a === b;
  } else if (typeof a === "object" && typeof b === "object") {
    for (key in a) {
      if (!(a[key] === b[key])) {
        return false;
      }
    }
    return true;
  } else {
    return a === b;
  }
};

// console.log(deepEqual(5, 5));
// console.log(deepEqual(obj, obj2));
// console.log(deepEqual(null, 1));
// console.log(deepEqual(null, null));
// console.log(deepEqual(null, obj2));
