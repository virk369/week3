/* global usernames */
// main javascript document

"use strict";

var username = "Tom";
var age = 30;
var isHungry = true;
/*
var usernames = [];
// var usernames = new Array();

usernames[0] = "Mike";
console.log(usernames[0]);

usernames[1] = "Rich";
usernames[2] = "Andrew";
usernames[3] = "Margot";

usernames[0] = "Tom";
console.log(usernames[0]);
*/

var usernames = [];
usernames = ["Mike", "Rich", "Anju", "Margot"];
console.log("before the push:" + usernames);

usernames.push("Tom")
console.log("after the push" + usernames);

usernames.pop();
console.log("afterthe pop" + usernames);