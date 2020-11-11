const searchResults = [
    {search: "cats", url:"https://bit.ly/3eOEoCW"},
    {search: "dogs", url:"https://bit.ly/3n9mMo7"}, 
    {search: "cars", url:"https://bit.ly/3piKCzx"},
    {search: "planes", url: "https://bit.ly/3pgubnC"},
    {search: "oranges", url: "https://bit.ly/3eJnDc0"},
    {search: "apples", url: "https://bit.ly/32vOiUW"},
    {search: "movies", url: "https://bit.ly/2Ir3H1Q"},
    {search: "radios", url: "https://bit.ly/3kqx5Tb"},
    {search: "shoes", url: "https://bit.ly/36trYwy"},
    {search: "hats", url: "https://bit.ly/2UcrWn1"}
]


// SETUP
const btn = document.querySelector('#lucky');
const form = document.querySelector('#google-form');
const resultsList = document.querySelector('#test');

// Bind event listeners
// btn.addEventListener('click', getSearch)

btn.addEventListener('click', function(){
    document.getElementById("test").innerHTML = "Are you? Then try your luck here: " + searchResults[Math.floor(Math.random() * searchResults.length)].url;
  }); 

form.addEventListener('submit', submitSearch);

// Fetch searches
getAllSearches();

// indexcd
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

    const options = { 
        method: 'POST',
        body: JSON.stringify(searchData),
    };

    fetch('http://localhost:3000/searches', options)
        .then(r => r.json())
        .then(appendSearch)
        .catch(console.warn)
};

function appendSearches(data){
    data.searches.forEach(appendSearch);
};

function appendSearch(searchData){
    const newP = document.createElement('p');
    newP.textContent = `search: ${searchData.search} || url: ${searchData.url}`
    resultsList.append(newP);
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

