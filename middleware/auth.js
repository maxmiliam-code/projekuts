var connection = require('../koneksi');
var mysql = require('mysql');
var md5 = require('MD5');
var response =require('../res');
var jwt = require('jsonwebtoken');
var config = require('../config/secret');
var ip = require('ip');

//controller untuk registrasi
exports.registrasi = function(req, res) {
    var post = {
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password),
        exports.registrasi = function(req, res) {
            console.log(error);
        }else{
            if(rows.length == 0){
                var query = "INSERT INTO ?? SET ?";
                var table = ["user"];
                query = mysql.format(query,table);
                connection.query(query, post, function(error, rows){
                    if(error){
                        console.log(error);
                    }else{
            exports.registrasi = function(req, res) {
                response.ok("Email sudah terdaftar!");
            }
        }
    });
};