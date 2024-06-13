
// ------------ JS EVENTS ----------------------

//Example 1: onclick
function handleClick(){
    alert('You clicked me through an onclick event')
}

//Example 2: mouse events
function handleMouseOver(){
    console.log('This is a mouseover event')
}

function handleMouseOut(){
    console.log('This is a mouse out event')
}

//Example 3: onkeydown event
function handleKeyDown(event){
    event.preventDefault(); //prevents the default behavior of this event
    console.log("Key pressed:", event.key);
}


// Example 4: onsubmit event
// helpful for creating all new data
function handleSubmit(event){
    event.preventDefault();
    // because we are getting our event from a form
    // there COULD be multiple values so we need to grab elements, then the name attribute, then value
    console.log(event); //giant data object full of information about the event
    // event.target.elements allows us to be more specific on what value we are targettign based on its name attribute
    console.log('Form submitted with name:', event.target.elements.username.value);
    
    // API call here sending ALL the data from the form
    // resets the event (reset the values in the form)
    event.target.reset();
}


//Example 5: onchange event
//onchange helpful for updating data 
function handleOnChange(event){
    event.preventDefault(); //prevents the default behavior of your event. Sometimes not always necessary because there is no default behavior
    // console.log(event);
    console.log("Change Input:", event.target.value); //for onchange we grab the target and then the value
    
    // API call to send just this data
}


//Example 6: onfocus event
function handleFocus(){
    console.log('You focused on this input')
}



//---------------------DOM MANIPULATION------------------------

count = 1

function updateParagraph(){
    // want to retrieve my div from the DOM
    const div = document.getElementById('dom-manipulation');
    console.log(div);
    
    //creating a p tag element
    // creating a node 
    const paragraph = document.createElement('p');
    //when you are just adding text use innerText. When you are aadding more complex HTML use innerHTML
    paragraph.innerHTML = `ID: ${count}, I am just adding text so I will use the innerText attribute
                            <button onclick="removeParagraph()">Remove</button>`
   
    paragraph.setAttribute('id', ++count)
    div.appendChild(paragraph); //adding a child node/braanch to the div parent node/branch in the DOM tree
    
    console.log(document.getElementsByTagName('input'));
    
    
    //----------------- CSS STYLING MANIPULATION-------------------
    const header = document.getElementsByTagName('h1')[0];
    header.classList.add('highlight') //adding a class to target CSS styling
    
    // we can also just add CSS properties by targetting the style attribute
    header.style.color = "turquoise";
}


function removeParagraph(){
    const div = document.getElementById('dom-manipulation');
    
    const lastIndex = document.getElementsByTagName('p').length - 1
    console.log(lastIndex);
    const paragraph = document.getElementsByTagName('p')[lastIndex];
    // const paragraph = document.getElementById(count--);
    console.log(paragraph);
    
    div.removeChild(paragraph); //removing  a node/branch from the DOM tree
    
    
}


function updateImage(){
    // either grab element by tag name
    const image = document.getElementsByTagName('img')[0];
    console.log(image);
    
    // updatinng the src attribute on my image!
    image.setAttribute('src', "https://i.pinimg.com/originals/1d/a5/a0/1da5a0d16d1f7dd7e43b6da4b68cdf46.png");
    
    
}



// -----------------------EVENT LISTENERS----------------------
// advantage of event listenners is its handled MOSTLY or ENTIRELY in JavaScript
const button = document.getElementById('buttonListener')

button.addEventListener('click', () => {
    console.log("You have successfully added an event listener")
})

// popular event listeners for when you've entered a page is the DOMContentLoader
document.addEventListener("DOMContentLoaded", ()=>{
    alert('Welcome to Our Page!')
})