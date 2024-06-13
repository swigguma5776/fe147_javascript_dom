

// Create a Bender Class
class Bender {
    // we won't take anything when we instaantiate our object
    // instead we are going to assign THIS object with attributes dynamically
    constructor(){
        // want to make EVERY bender unique
        this.id = this.setId(); //method to creaate an id
        this.dateCreated = new Date(); //as soon as object is instantiated it will make a current timestamp
    }
    
    setId = () => {
        return Math.floor(Math.random() * 100); //returns a random # from 0-100
    }
    
    // method to set attributes dynamically
    setAttributes = (attributes) => {
        // the Object.assign() method assigns attributes to a specified object
        //taakes in 2 arguments, the first is the object, second is dictionary/object of attributes
        Object.assign(this, attributes) //this means THIS object
    }
    
    
    // method to return attributes
    getAttributes = () => {
        // console.log({...this})
        return this //take EVERY attribute from THIS object and return in a dictionary/object
    }
}


// OUR EVENT HANDLERS

//creating handleSubmit to graab our daata from our form
function handleSubmit(event){
    event.preventDefault();
    
    // grab AALL elements and save it to a variable
    const formElements = event.target.elements; //all our form inputs
    
    // loop through our abiliites array and see which ones are checked and add to a new list
    const abilities = [];
    // console.log(formElements)
    for (let element of formElements.abilities){
        if (element.checked){
            abilities.push(element.value)
        }
    }
    
    // create a dictionary/object of ALL our data
    const data = {
        name: formElements.name.value,
        age: formElements.age.value,
        image: formElements.image.value,
        nation: formElements.nation.value,
        abilities: abilities, 
        skill: formElements['skill-level'].value
    }
    
    // console.log(data);
    
    // create a new Bender from this data!
    const bender = new Bender();
    bender.setAttributes(data);
    console.log(bender.getAttributes());
    
    displayBenders(bender);
    
    event.target.reset(); //aka reset my form
}


// need a way to create HTML cards & add them to the DOM
function displayBenders(bender){
    
    // get attributes
    const benderData = bender.getAttributes(); //calling upon the getAttributes method in our class
    
    // create our HTML
    const html = `
        <div class="card col border rounded shadow p-3" id=card${benderData.id}>
            <div class="border rounded image">
                <img src=${benderData.image} class="img-fluid" alt="bender image">
            </div>
            <div class="card-body">
                <h5 class="card-title">${benderData.name}</h5>
                <p class="card-text">Nation: ${benderData.nation}</p>
                <p class="card-text">Age: ${benderData.age}</p>
                <p class="card-text">Abilities: ${benderData.abilities.join(", ")}</p>
                <p class="card-text">Skill Level: ${benderData.skill}</p>
            </div>
            <div class="card-body">
                <a onclick="deleteBender(${benderData.id})"class="btn btn-danger">Delete</a>
            </div>
            </div>
    `
    // target in our HTML where we want to add the above card
    const display = document.getElementById('character-display'); //grab this node/branch on our DOM tree
    
    // we need to create an HTML node/branch aka a HTML object
    const card = document.createElement('div');
    
    // want to make this card unique for deleting purposes & adding our html to it
    card.setAttribute('id', benderData.id);
    card.innerHTML = html;
    
    // append to our DOM
    display.appendChild(card);

    // change the background color of our cards
    
    // grab the card we just created & appended to the DOM
    const benderCard = document.getElementById(`card${benderData.id}`);
    benderCard.style.backgroundColor = getBackgroundColor(benderData.nation);
}


// do some CSS manipulation
function getBackgroundColor(nation) {
    const nationColors = {
        air: "goldenrod",
        water: "turquoise",
        earth: "greenyellow",
        fire: "tomato"
    }
    
    return nationColors[nation]
}

// a way for us to delete our benders based on their id
function deleteBender(id) {
    
    // grab our parent container/node/object
    const display = document.getElementById("character-display");
    
    // grab the card with the right id value
    const bender = document.getElementById(id);
    display.removeChild(bender);
}