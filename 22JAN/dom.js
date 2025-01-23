window.console.log("hello");
window.console.log(window);
window.console.log(document);

// document.body.children[0].innerText;
console.log(document.body.children[0].innerText);
// DOM Manipulation 
document.body.children[0].innerText = "Done for the first half!";
console.log(document.body.children[0].innerText);

//Dom Methods
const titles= window.document.getElementsByTagName("h3");
console.log(titles)

titles[0].style.backgroundColor="yellow";
titles[1].style.backgroundColor="red";