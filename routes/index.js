var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/input', function(req, res, next) {
	res.render('input', { title: 'Express' });
});

router.get('/search', function(req, res, next) {
	res.render('search', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/customers', function(req, res, next) {
	Customer.find(function(err, customers){
		if(err){ return next(err); }

		res.json(customers);
	});
});

router.post('/customers', function(req, res, next) {
	var customer = new Customer(req.body);
	
	customer.save(function(err, post){
		if(err){ return next(err); }
		
		res.json(customer);
	});
}); 

router.param('customer', function(req, res, next, id) {
	var query = Customer.findById(id);

	query.exec(function (err, customer){
		if (err) { return next(err); }
		if (!customer) { return next(new Error('can\'t find customer')); }

		req.customer = customer;
		return next();
	});
});

router.get('/customers/:customer', function(req, res) {
	console.log(req.customer.name);
	Customer.find({name: req.customer.name}, function(err, customers){
		if(err){ return next(err); }
		
		res.json(customers);
	});
});

router.get('/customersByName/:name', function(req, res) {
	Customer.find({name: new RegExp(req.params.name, 'i')}, function(err, customers){
		if(err){ return next(err); }
		
		res.json(customers);
	});
});

router.get('/input/:customer', function(req, res) {
	res.render('input', { title: 'Express' });
});

module.exports = router;
