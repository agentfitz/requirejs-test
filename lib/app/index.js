
define([ "lib/app/index-a.js", "lib/app/index-b.js" ], function(){

	console.log("index.js executing");
	console.log("a msg: " + window.a);
	console.log("b msg: " + window.b);

});