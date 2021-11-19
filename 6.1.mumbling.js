"use strict";

let mumbling = (string) => {
  return [...string].map((element,index) => {
      return element.toUpperCase() + element.toLowerCase().repeat(index)
  }).join('-')
};

console.log(mumbling("abcd"));
