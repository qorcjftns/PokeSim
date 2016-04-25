/*
 * 	Load Modules
 */
var express		= require('express'),
	app			= express(),
	server 		= require('http').createServer(app),
	io 			= require('socket.io')(server),
	mysql 		= require('mysql'),
	tools 		= require('./src/tools.js');

/*
 * 	Webserver Setting
 */
app.get('/', function(req, res, next) {
	res.sendFile(__dirname + '/frontend/index.html');
});
app.get('/modules/*', function(req, res, next) {
	var fileName = req.originalUrl.split("?")[0];
	fileName = '/node_modules' + fileName.split('/modules')[1];
	console.log(fileName);
	res.sendFile(__dirname + fileName);
});
app.get('*', function(req, res, next) {
	res.send('404 Not Found');
});

/*
 * 	Init Socket
 */
tools.init_socket(io);

/*
 * 	Server Start
 */
server.listen(80);