'use strict';
module.exports = function(app) {
  var data = require('../controller/appController.js');

  app.route('/data')
    .get(data.list_all_data)
    .get(data.report_data)
    .post(data.create_a_data);
    
  app.route('/report')
    .get(data.report_data);
};
