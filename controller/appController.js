'use strict';

var Data = require('../model/appModel.js');

exports.list_all_data = function(req, res) {
    Data.getAllData(function(err, data) {
        if (err)
            res.send(err);
        console.log('res', data);
        res.send(data);
    });
};  

exports.report_data = function(req, res) {
    Data.getReport(function(err, data) {
        if (err)
            res.send(err);
        console.log('res', data);
        res.send(data);
    });
};

exports.create_a_data = function(req, res) {
    var new_data = new Data(req.body);
    if(!new_data.sourcepartner || !new_data.targetpartner) {
        res.status(400).send({ error:true, message: 'Please provide data/sourcepartner and data/targetpartner' });
    }
    else {
        Data.createData(new_data, function(err, data) {
        if (err)
            res.send(err);
        res.json(data);
        });
    }
};