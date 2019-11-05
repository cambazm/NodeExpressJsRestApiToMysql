'user strict';
var sql = require('../db.js');

//data object constructor
var Data = function(data){
    console.log(JSON.stringify(data));
    this.sourcepartner = data.sourcepartner;
    this.targetpartner = data.targetpartner;
    this.sourceformat = data.sourceformat;
    this.targetformat = data.targetformat;
    this.transactioncount = data.transactioncount;
};
Data.createData = function (newData, result) { 
    console.log(newData);
        sql.query("INSERT INTO data set ?", newData, function (err, res) {              
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else {
                    result(null, res.insertId);
                }
            });           
};
Data.getAllData = function (result) {
        sql.query("Select * from data", function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else { 
                    result(null, res);
                }
            });   
};
Data.getReport = function (result) {
        sql.query("Select * from Report", function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else {
                    result(null, res);
                }
            });   
};
module.exports= Data;