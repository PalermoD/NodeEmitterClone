var Emitter = require('./emitter');


var emtr = new Emitter();

emtr.on('greet', function(){
	console.log('someone, somewhere said hello');
});


emtr.on('greet', function(){
	console.log('a greeting happened');
});


console.log('Hello!');
emtr.emit('greet');