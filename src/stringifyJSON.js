// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (typeof obj === 'number' || typeof obj === 'boolean') {
  	return '' + obj;
  }

  if (obj === null) {
  	return 'null';
  }

  if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
  	var output = [];
  	obj.forEach(function(item) {
  		output.push(stringifyJSON(item));
  	})
  	return '[' + output + ']';
  }

  if (typeof obj === 'object' && !Array.isArray(obj)) {
  	var output = [];
  	for (var key in obj) {
  		if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
  			output.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
  		}
  	}
  	return '{' + output + '}';
  }

};
