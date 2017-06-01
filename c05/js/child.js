//Select the starting point and find its children
var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

//Change the values of the childrens class attributes
firstItem.setAttribute('class', 'complete');
lastItem.setAttribute('class', 'cool');


