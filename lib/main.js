
requirejs.config({

	baseUrl: "lib/",

    paths: {
        'jquery' : "//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min"
    }

});



require([ "jquery", "app/index" ], function($){

	console.log("main.js executing");

});