const title = document.querySelector('h1');

console.log(title);

title.textContent = "Web Page Components";


//allows you to change the color of text, background color without using variables under div id: topics
//document.querySelector('#topics').style.color = 'red';

document.getElementById('topics').style.color = 'purple';

//this allows you to select the first class and apply changes to it - here we are adding a boarder
let list = document.querySelector('.list');


//adding a border with border size, type and color
list.style.border = '3px solid black';

//this is targeting the paragraph (p)
let para = document.querySelector('p');

//changing background color in paragraph to light blue
//para.style.backgroundColor = 'lightblue';


//adding background class that was created in .css file to follow the rule in meta-css.css
para.classList.add('background');

//changing the entire background by pulling in background as a class
//document.querySelector('body').classList.add('background');


//changing the image from the web based image to the one we downloaded
const image = document.querySelector('img');
image.setAttribute('src', 'images/web.png');



let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = 'red';
})
               


