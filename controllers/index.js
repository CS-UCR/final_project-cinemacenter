var express = require('express');
var path = require('path');

function getHome(req, res) {
    // res.sendFile(path.join(__dirname, '../public/home.html'));
    console.log('rendering index.html');
    res.render('index');
}

module.exports = {
    getHome
}