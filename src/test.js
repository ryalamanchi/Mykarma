console.log("inside test.js");
var webdriver = require('selenium-webdriver');
//console.log("Hello I am before selenium object");
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();