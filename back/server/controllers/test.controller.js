var express = require('express');
const { request } = require('http');
var db = require('../database');

const testCtrl = {};

testCtrl.testFunction = (req, res) => {
    console.log("Test its works")
}



module.exports = testCtrl;
