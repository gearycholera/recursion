// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	var output = [];

	var recursiveSearch = function(item) {
		if (item.classList !== undefined && item.classList.contains(className)) {
			output.push(item);
		};
		for (var i = 0; i < item.childNodes.length; i++) {
			recursiveSearch(item.childNodes[i]);
		}
	}
	
	recursiveSearch(document.body);

	return output;
};
