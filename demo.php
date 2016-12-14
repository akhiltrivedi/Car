<html>
<head>
    <title>Simple Angular Auth</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0-beta.5/angular.min.js"></script>
    <script src="app.js"></script>
</head>
<body ng-app="app" ng-controller="Main as main">
<h1>Simple Angular Auth - Thinkster</h1>

<input type="text" ng-model="main.username" placeholder="username"><br>
<input type="password" ng-model="main.password" placeholder="password"><br>
<br>

<button ng-click="main.register()">Register</button>
<button ng-click="main.login()">Login</button>
<button ng-click="main.logout()" ng-show="main.isAuthed()">Logout</button>

<button ng-click="main.getQuote()">get quote</button>
<br><br>
{{main.message}}

<br><br><br>
<a href="https://twitter.com/IAmMattGreen">shameless plug</a>
</body>
</html>


<script type="text/javascript">

    var aa = angular.module('app', ['ngStorage']);
    aa.controller('main as main'
function(){
function authInterceptor(API, auth) {
return {
// automatically attach Authorization header
request: function(config) {
return config;
},

// If a token was sent back, save it
response: function(res) {
return res;
},
}
}

function authService($window) {
var self = this;

// Add JWT methods here
}

function userService($http, API, auth) {
var self = this;
self.getQuote = function() {
return $http.get(API + '/auth/quote')
}

// add authentication methods here

}

// We won't touch anything in here
function MainCtrl(user, auth) {
var self = this;

function handleRequest(res) {
var token = res.data ? res.data.token : null;
if(token) { console.log('JWT:', token); }
self.message = res.data.message;
}

self.login = function() {
user.login(self.username, self.password)
.then(handleRequest, handleRequest)
}
self.register = function() {
user.register(self.username, self.password)
.then(handleRequest, handleRequest)
}
self.getQuote = function() {
user.getQuote()
.then(handleRequest, handleRequest)
}
self.logout = function() {
auth.logout && auth.logout()
}
self.isAuthed = function() {
return auth.isAuthed ? auth.isAuthed() : false
}
}

angular.module('app', [])
.factory('authInterceptor', authInterceptor)
.service('user', userService)
.service('auth', authService)
.constant('API', 'http://test-routes.herokuapp.com')
.config(function($httpProvider) {
$httpProvider.interceptors.push('authInterceptor');
})
.controller('Main', MainCtrl)
})();


    </script>