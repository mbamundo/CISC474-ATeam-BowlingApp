var app = angular.module("seafordBowlingApp", ['ui.router', 'ngRoute']);

app.config([
'$stateProvider',
'$urlRouterProvider',
'$routeProvider',
function($stateProvider, $urlRouterProvider, $routeProvider) {

  $routeProvider
    .when('search', {
      url: '/search',
      templateUrl: '/search.ejs',
      controller: 'SearchCtrl'
    })
	
  $routeProvider
    .when('input', {
      url: '/input',
      templateUrl: '/input.ejs',
      controller: 'MainCtrl'
    })
    
  $routeProvider
    .when('home', {
      url: '/home',
      templateUrl: '/index.ejs',
      controller: 'HomeCtrl',
      resolve: {
        customersPromise: ['customers', function(customers){
          return customers.getAll();
        }]
      }
    })
    
  $urlRouterProvider.otherwise('home');
}]);

app.factory('customers', ['$http', function($http){
	var o = {
		customers: []
	};
  
	o.getAll = function() {
		return $http.get('/customers').success(function(data){
			angular.copy(data, o.customers);
		});
	};
  
	o.create = function(customer) {
		return $http.post('/customers', customer).success(function(data){
			o.customers.push(data);
		});
	};
	
	o.goSearch = function() {
		return $http.get('/search').then(function(res) {
			return res.data;
		});
	};
	
	o.searchByID = function(id) {
		return $http.get('/customers/' + id).then(function(res){
			angular.copy(res.data, o.customers);
		});
	};
	
	o.searchByName = function(name) {
		return $http.get('/customersByName/' + name).then(function(res){
			angular.copy(res.data, o.customers);
		});
	};
	
	o.edit = function() {
		return $http.get('/input').then(function(res) {
			console.log('input gotten');
		});
	};
  
  return o;
}]);

app.controller('SearchCtrl', ['$scope', 'customers', function($scope, customers){
	$scope.customers = customers.customers;
	
	$scope.searchFor = function(){
		if($scope.boxer == '' || $scope.boxer == null){
			customers.getAll();
		} else {
			customers.searchByName($scope.boxer);
		}
	};
	
	$scope.editCustomer = function() {
		console.log('edit');
	};
}]);

app.controller('HomeCtrl', ['$scope', 'customers', function($scope, customers){
	$scope.customers = customers.customers;
	
	
}]);

app.controller('MainCtrl', ['$scope', 'customers', function($scope, customers){
	$scope.customers = customers.customers;
	
	$scope.addCustomer = function(){
		if(!$scope.name || $scope.name === '') { return; }
		customers.create({
			name: $scope.name,
			date: $scope.date,
			address: $scope.address,
			city: $scope.city,
			state: $scope.state,
			zip: $scope.zip,
			phone: $scope.phone,
			cell: $scope.cell,
			email: $scope.email,
			rh: $scope.rh,
			lh: $scope.lh,
			conv: $scope.conv,
			ft: $scope.ft,
			ball: $scope.ball,
			wgt: $scope.wgt,
			pin: $scope.pin,
			layout: $scope.layout,
			surface: $scope.surface,
			bhPosition: $scope.bhPosition,
			size: $scope.size,
			depth: $scope.depth,
			paph: $scope.paph,
			papv: $scope.papv,
			clt: $scope.clt,
			thumb: $scope.thumb,
			fingers: $scope.fingers,
			price: $scope.price,
			completedBy: $scope.completedBy,
			frac1: $scope.frac1,
			frac2: $scope.frac2,
			frac3: $scope.frac3,
			frac4: $scope.frac4,
			frac5: $scope.frac5,
			frac6: $scope.frac6,
			frac7: $scope.frac7,
			frac8: $scope.frac8,
			frac9: $scope.frac9,
			deci1: $scope.deci1,
			deci2: $scope.deci2,
			text1: $scope.text1,
			text2: $scope.text2,
			text3: $scope.text3,
			cut1: $scope.cut1,
			cut2: $scope.cut2,
			fspan1: $scope.fspan1,
			fspan2: $scope.fspan2,
			radio1: $scope.radio1,
			radio2: $scope.radio2,
			radio3: $scope.radio3,
			radio4: $scope.radio4,
			radio5: $scope.radio5,
			radio6: $scope.radio6,
			ball1: $scope.ball1,
			ball2: $scope.ball2,
			ball3: $scope.ball3,
			ball4: $scope.ball4,
			ball5: $scope.ball5,
			ball6: $scope.ball6,
			ball7: $scope.ball7,
			ball8: $scope.ball8,
			ball9: $scope.ball9,
			ball10: $scope.ball10,
			weight1:  $scope.weight1,
			weight2:  $scope.weight2,
			weight3:  $scope.weight3,
			weight4:  $scope.weight4,
			weight5:  $scope.weight5,
			weight6:  $scope.weight6,
			weight7:  $scope.weight7,
			weight8:  $scope.weight8,
			weight9:  $scope.weight9,
			weight10:  $scope.weight10,
			pin1: $scope.pin1,
			pin2: $scope.pin2,
			pin3: $scope.pin3,
			pin4: $scope.pin4,
			pin5: $scope.pin5,
			pin6: $scope.pin6,
			pin7: $scope.pin7,
			pin8: $scope.pin8,
			pin9: $scope.pin9,
			pin10: $scope.pin10,
			layout1: $scope.layout1,
			layout2: $scope.layout2,
			layout3: $scope.layout3,
			layout4: $scope.layout4,
			layout5: $scope.layout5,
			layout6: $scope.layout6,
			layout7: $scope.layout7,
			layout8: $scope.layout8,
			layout9: $scope.layout9,
			layout10: $scope.layout10,
			bhpos1: $scope.bhpos1,
			bhpos2: $scope.bhpos2,
			bhpos3: $scope.bhpos3,
			bhpos4: $scope.bhpos4,
			bhpos5: $scope.bhpos5,
			bhpos6: $scope.bhpos6,
			bhpos7: $scope.bhpos7,
			bhpos8: $scope.bhpos8,
			bhpos9: $scope.bhpos9,
			bhpos10: $scope.bhpos10,
			bhsize1: $scope.bhsize1,
			bhsize2: $scope.bhsize2,
			bhsize3: $scope.bhsize3,
			bhsize4: $scope.bhsize4,
			bhsize5: $scope.bhsize5,
			bhsize6: $scope.bhsize6,
			bhsize7: $scope.bhsize7,
			bhsize8: $scope.bhsize8,
			bhsize9: $scope.bhsize9,
			bhsize10: $scope.bhsize10,
			bhdepth1: $scope.bhdepth1,
			bhdepth2: $scope.bhdepth2,
			bhdepth3: $scope.bhdepth3,
			bhdepth4: $scope.bhdepth4,
			bhdepth5: $scope.bhdepth5,
			bhdepth6: $scope.bhdepth6,
			bhdepth7: $scope.bhdepth7,
			bhdepth8: $scope.bhdepth8,
			bhdepth9: $scope.bhdepth9,
			bhdepth10: $scope.bhdepth10,
			surface1: $scope.surface1,
			surface2: $scope.surface2,
			surface3: $scope.surface3,
			surface4: $scope.surface4,
			surface5: $scope.surface5,
			surface6: $scope.surface6,
			surface7: $scope.surface7,
			surface8: $scope.surface8,
			surface9: $scope.surface9,
			surface10: $scope.surface10,
			notes: $scope.notes,
			
		});
		$scope.name = '';
		$scope.date = '';
		$scope.address = '';
		$scope.city = '';
		$scope.state = '';
		$scope.zip = '';
		$scope.phone = '';
		$scope.cell = '';
		$scope.email = '';
		$scope.rh = '';
		$scope.lh = '';
		$scope.conv = '';
		$scope.ft = '';
		$scope.ball = '';
		$scope.wgt = '';
		$scope.pin = '';
		$scope.layout = '';
		$scope.surface = '';
		$scope.bhPosition = '';
		$scope.size = '';
		$scope.depth = '';
		$scope.paph = '';
		$scope.papv = '';
		$scope.clt = '';
		$scope.thumb = '';
		$scope.fingers = '';
		$scope.price = '';
		$scope.completedBy = '';
		$scope.frac1 = "";
		$scope.frac2 = "";
		$scope.frac3 = "";
		$scope.frac4 = "";
		$scope.frac5 = "";
		$scope.frac6 = "";
		$scope.frac7 = "";
		$scope.frac8 = "";
		$scope.frac9 = "";
		$scope.deci1 = "";
		$scope.deci2 = "";
		$scope.text1 = "";
		$scope.text2 = "";
		$scope.text3 = "";
		$scope.cut1 = "";
		$scope.cut2 = "";
		$scope.fspan1 = "";
		$scope.fspan2 = "";
		$scope.radio1 = "";
		$scope.radio2 = "";
		$scope.radio3 = "";
		$scope.radio4 = "";
		$scope.radio5 = "";
		$scope.radio6 = "";
		$scope.ball1 = "";
		$scope.ball2 = "";
		$scope.ball3 = "";
		$scope.ball4 = "";
		$scope.ball5 = "";
		$scope.ball6 = "";
		$scope.ball7 = "";
		$scope.ball8 = "";
		$scope.ball9 = "";
		$scope.ball10 = "";
		$scope.weight1 = "";
		$scope.weight2 = "";
		$scope.weight3 = "";
		$scope.weight4 = "";
		$scope.weight5 = "";
		$scope.weight6 = "";
		$scope.weight7 = "";
		$scope.weight8 = "";
		$scope.weight9 = "";
		$scope.weight10 = "";
		$scope.pin1 = "";
		$scope.pin2 = "";
		$scope.pin3 = "";
		$scope.pin4 = "";
		$scope.pin5 = "";
		$scope.pin6 = "";
		$scope.pin7 = "";
		$scope.pin8 = "";
		$scope.pin9 = "";
		$scope.pin10 = "";
		$scope.layout1 = "";
		$scope.layout2 = "";
		$scope.layout3 = "";
		$scope.layout4 = "";
		$scope.layout5 = "";
		$scope.layout6 = "";
		$scope.layout7 = "";
		$scope.layout8 = "";
		$scope.layout9 = "";
		$scope.layout10 = "";
		$scope.bhpos1 = "";
		$scope.bhpos2 = "";
		$scope.bhpos3 = "";
		$scope.bhpos4 = "";
		$scope.bhpos5 = "";
		$scope.bhpos6 = "";
		$scope.bhpos7 = "";
		$scope.bhpos8 = "";
		$scope.bhpos9 = "";
		$scope.bhpos10 = "";
		$scope.bhsize1 = "";
		$scope.bhsize2 = "";
		$scope.bhsize3 = "";
		$scope.bhsize4 = "";
		$scope.bhsize5 = "";
		$scope.bhsize6 = "";
		$scope.bhsize7 = "";
		$scope.bhsize8 = "";
		$scope.bhsize9 = "";
		$scope.bhsize10 = "";
		$scope.bhdepth1 = "";
		$scope.bhdepth2 = "";
		$scope.bhdepth3 = "";
		$scope.bhdepth4 = "";
		$scope.bhdepth5 = "";
		$scope.bhdepth6 = "";
		$scope.bhdepth7 = "";
		$scope.bhdepth8 = "";
		$scope.bhdepth9 = "";
		$scope.bhdepth10 = "";
		$scope.surface1 = "";
		$scope.surface2 = "";
		$scope.surface3 = "";
		$scope.surface4 = "";
		$scope.surface5 = "";
		$scope.surface6 = "";
		$scope.surface7 = "";
		$scope.surface8 = "";
		$scope.surface9 = "";
		$scope.surface10 = "";
		$scope.notes = "";
	};
}]);