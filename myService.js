var http = require('http'); 
var express = require('express');
var app = express();
var GPIOCtrl = require('./GPIOcontroller.js');


app.get('/unlock/', function(req, res){ 
	GPIOCtrl.unlockRelay();
 });

//  NSURL *restURL = [NSURL URLWithString:@"http://raspberrypi-address:port/unlock/"];
// NSURLRequest *restRequest = [NSURLRequest requestWithURL:restURL];
// currentConnection = [[NSURLConnection alloc] initWithRequest:restRequest delegate:self];


app.listen(3000); 
console.log('App Server running at port 3000');

