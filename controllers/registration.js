var express = require('express');
var path = require('path');

function getRegistration(req, res) {
    // res.sendFile(path.join(__dirname, '../public/registration.html'));
    //res.sendFile(path.join(__dirname, '/test/', '../public/registration.html'));
    console.log('rendering registration.html');
    res.render('registration');
}

module.exports = {
    getRegistration
}