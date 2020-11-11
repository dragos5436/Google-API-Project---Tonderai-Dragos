
// SETUP
const btn = document.querySelector('button');
const form = document.querySelector('#google-form');
const resultsList = document.querySelector('ul');

// Bind event listeners
btn.addEventListener('click', getSearch);
form.addEventListener('submit', submitSearch);

// Fetch searches
getAllSearches();



// index
function getAllSearches(){
    fetch('http://localhost:3000/searches')
        .then(r => r.json())
        .catch(console.warn)
};

// create
function submitSearch(e){
    e.preventDefault();


    const searchData = {
        search: e.target.search.value,
        url: e.target.url.value
    };

    console.log(searchData.value)

    const options = { 
        method: 'POST',
        body: JSON.stringify(searchData),
    };

    fetch('http://localhost:3000/searches', options)
        .then(r => r.json())
        .catch(console.warn)
};




// MESSAGE FLOW
function getSearch(){
    fetch('http://localhost:3000/searches/random')
        .then(r => r.text())
        .then(renderMessage)
        .catch(console.warn)
};

function renderMessage(msgText){
    const msg = document.createElement('p');
    msg.textContent = msgText;
    msg.style.color = 'red';
    document.body.append(msg);
};

