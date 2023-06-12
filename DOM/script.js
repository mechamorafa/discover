//getElementByID() - Element
const elementByID = document.getElementById('blog-title')
console.log(elementByID)

//getElementByClassName() - HTMLCollection
const elementByClass = document.getElementsByClassName('one')
console.log(elementByClass)

//getElementByTagName() - HTMLCollection
const elementByTag = document.getElementsByTagName('head')
console.log(elementByTag)

//querySelector() - Element
const element = document.querySelector('.one')
console.log(element)

//querySelectorAll() - Nodelist
const elementAll = document.querySelectorAll('[src]')
console.log(elementAll)