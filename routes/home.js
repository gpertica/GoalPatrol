var data = require('../data.json');
//var data = JSON.parse(obj);

//Render Home HTML Page
exports.html = function(req, res){
  res.render('home', data);
//  res.render('home');
};