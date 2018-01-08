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
};
