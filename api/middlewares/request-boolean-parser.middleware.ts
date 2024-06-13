'use strict';
/**
 * Convert string to boolean.
 * @param  {String}  string  - String to convert
 * @return {?}  Returns the results of the conversion.
*/
function parseBoolFromString(string: string): any {
  if (string === 'true') {
    return true;
  }
  else if (string === 'false') {
    return false;
  }
  else {
    return string;
  }
}

/**
 * Recursively test values for conversion.
 * @param  {?}  value  - String to convert
 * @return {?}  Returns the results of the conversion.
*/
function parseValue(value: any): any {
  console.log(value);
  if (typeof value === 'string') {
    return parseBoolFromString(value);
  }
  else if (value.constructor === Object) {
    return parseObject(value);
  }
  else if (Array.isArray(value)) {
    var array: any[] = [];
    value.forEach(function(item, itemKey) {
      array[itemKey] = parseValue(item);
    });
    return array;
  }
  else {
    return value;
  }
}

/**
 * Recursively convert object strings to boolean.
 * @param  {Object}  obj  - Object to iterate over
 * @return {Object}  Returns new object (shallow copy).
*/
function parseObject(obj: object): object {
  var result = {},
      key: string | number,
      value: any;

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      value = obj[key];
      result[key] = parseValue(value);
    }
  }

  return result;
}

export { parseObject }