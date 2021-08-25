
// TASK 1
// 1. Add a <p> with red text that says “Hey I’m red!”
//https://www.w3schools.com/js/js_htmldom_nodes.asp


// // creates a new <p> element
// let para = document.createElement('p');

// // To add text to the <p> element, you must create a text node first. This code creates a text node:
// let node = document.createTextNode('Hey Im red!');

// // Then you must append the text node to the <p> element:
// para.appendChild(node); 

// // Append the new element to an existing element in HTML. Finds an existing element by ID:
// let element = document.getElementById('container');

// // This code appends the new element to the existing element:
// element.appendChild(para);


// // HTML DOM change font color 
// // https://www.w3schools.com/jsref/prop_style_color.asp
// document.getElementById("container").style.color = "red";


const paragraph = document.createElement('p')
paragraph.textContent = 'Hey I\'m red!'
paragraph.style.cssText = 'color: red'

document.querySelector('.content').appendChild(paragraph)


// TASK 3
// Add a <div> with a black border and pink background color with the following elements inside of it: 
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// https://www.w3schools.com/jsref/prop_style_border.asp
//https://www.w3schools.com/jsref/met_node_insertbefore.asp
// https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp

const heading = document.createElement('h3')
heading.textContent = 'I\'m a blue h3!'
heading.style.cssText = 'color: blue'

document.querySelector('.content').appendChild(heading)

// 
const divEl = document.createElement('div')
divEl.setAttribute('style', 'border: 1px solid black; background: pink')
const headingLarge = document.createElement('h1')
    headingLarge.textContent = "I'm in a div"
const paragraphSec = document.createElement('p')
    paragraphSec.textContent = "ME TOO!"

divEl.appendChild(headingLarge)
divEl.appendChild(paragraphSec)

document.querySelector('.content').appendChild(divEl)