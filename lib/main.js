
requirejs.config({

	baseUrl: "lib/",

	paths: {

		jquery: "vendor/jquery-2.0.2.min"

	}

});



require(["jquery", "app/index"], function($){

	console.log("main.js executing");

});