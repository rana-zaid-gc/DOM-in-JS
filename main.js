// 1 - How we can access HTML Elements using DOM in Javascript ?

// The mostly used ways to access HTML elements using DOM are given below:
// a - document.getElementById("")-- -> used to get element with a "id" attribute.
// b - document.querySelector("")-- -> return the frist element for the given CSS selector, Efficeint Version.
// c - document.querySelectorAll("")-- -> return the all elements inside an element matching the given CSS selector.
// d - document.getElementsByClassName("")-- -> used to get element with a "class" attribute.
// e - document.getElementsByName("")-- -> searches element by name attribute.
// f - document.getElementsByTagName("")-- -> return element with given tagName.
// g - document.getElementsByTagNameNS(namespace, name)-- -> return a list of elements with the given tagName belonging to the given nameSpace.


// 2 - What are the activities we can perform using DOM ?

// a - JavaScript can change all the HTML elements in the page.
// b - JavaScript can change all the HTML attributes in the page.
// c - JavaScript can change all the CSS styles in the page.
// d - JavaScript can remove existing HTML elements and attributes.
// e - JavaScript can add new HTML elements and attributes.
// f - JavaScript can react to all existing HTML events in the page.
// g - JavaScript can create new HTML events in the page.



// 3 - What are event - listeners in DOM ?

// In the Document Object Model(DOM), event listeners are a mechanism used to detect and respond to specific events that occur in an HTML document.An event listener is a function that gets executed when a particular event is triggered on an element in the DOM.
// Select the element using JavaScript DOm Method to which you want to attach the event listener to then Call the addEventListener method on the selected element(s), passing in two arguments: the type of event to listen for and the function to be executed when the event occur