// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'number') {
  	return '' + obj;
  }

  if (obj === null) {
  	return 'null';
  }

  if (obj === true) {
  	return 'true';
  }

  if (obj === false) {
  	return 'false';
  }

  if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }

  if (Array.isArray(obj) && obj.length === 0) {
  	return '[]';
  }

  if (Array.isArray(obj) && obj.length > 0) {
  	var output = '['
  	for (var i = 0; i <= obj.length ; i++) {
  		if (i < obj.length - 1) {
  			output += stringifyJSON(obj[i]) + ',';
  		}
  		else if (i === obj.length-1) {
  			output += stringifyJSON(obj[i]);
  		}
  		else {
  			output += ']'
  		}
  	}
  	return output;
  }

  if (typeof obj === 'object' && !Array.isArray(obj)) {
  	var objectCount = 0;

  	for (var key in obj) {
  		objectCount++;
  	}

  	if (objectCount === 0) {
  		return '{}';
  	}

  	if (objectCount > 0) {
  		var output = '{'
  		for (var key in obj) {
  			if (objectCount > 1) {
  				output += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
  				objectCount--;
  			}
  			else {
  				output += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
  			}
  		}
  		output += '}';
  		return output;
  	}

  }


};
