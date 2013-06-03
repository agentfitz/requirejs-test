
requirejs.config({

	baseUrl: "lib/",

    paths: {
        'jquery' : "http://fitzgeraldmedia.net/requirejs/lib/vendor/jquery-2.0.2.min"
    }

});



require([ "jquery", "app/index" ], function($){

	console.log("main.js executing");

});