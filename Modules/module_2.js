"use strict";
exports.__esModule = true;
var module_1_1 = require("./module_1");
var module_1_2 = require("./module_1");
(0, module_1_1.compDetails)('1001');
(0, module_1_1.compDetails)(1001);
var compObj = new module_1_2.Company("1002");
console.log(compObj.getCompDetails());
