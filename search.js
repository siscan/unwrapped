
var allCards = [];





function clearSearchAndReinsertCards() {
  document.getElementById('menubar-search-input').value = "";
  doSearchUpdate();
}


function cardMatchesSearchQuery(card, searchQuery) {

  if (!searchQuery) {
    return true;
  }


  searchQuery = searchQuery.trim().toLowerCase();
  return (card.ingredients).toLowerCase().indexOf(searchQuery) >= 0;
}

function insertNewCard(card)
{
  var templateContext = {
      title: card.title,
      duration: card.duration,
      serving: card.serving,
      ingredients: card.ingredients,
      instructions: card.instructions,
      author: card.author,
      url: card.url
  }

  var newCard = Handlebars.templates.recipeCard(templateContext)
  var recipeContainer = document.querySelector('.card-container')
  recipeContainer.insertAdjacentHTML('beforeend', newCard)
}

function homeSearch() {
  var searchBar = document.getElementById('menubar-search-input').value
  var searchBarHome = document.getElementById('homepage-searchbar-input').value
  if (searchBar) {
    sessionStorage.setItem("lastSearch", searchBar);
  }
  else if (searchBarHome) {
    sessionStorage.setItem("lastSearch", searchBarHome);
  }
  window.location.href = '/recipe';
}

function doSearchUpdate() {
  var previousSearch = sessionStorage.getItem("lastSearch")
  var searchQuery = ''

  if (previousSearch != '') {
    searchQuery = previousSearch
  }
  else {
    searchQuery = document.getElementById('menubar-search-input').value;
  }
  sessionStorage.setItem("lastSearch", '');
  console.log(searchQuery)

  var cardContainer = document.querySelector('.card-container');
  if (cardContainer) {
    while (cardContainer.lastChild) {
      cardContainer.removeChild(cardContainer.lastChild);
    }
  }


  allCards.forEach(function (card) {
    if (cardMatchesSearchQuery(card, searchQuery)) {
      insertNewCard(card);
    }
  });
}



function parseCardElem(cardElem) {
  var card = {};

  var cardImgElem = cardElem.querySelector('.recipe-img');
  card.url = cardImgElem.src;

  var cardTitleElem = cardElem.querySelector('.recipe-title');
  card.title = cardTitleElem.textContent.trim();

  var cardDurationElem = cardElem.querySelector('.recipe-time');
  card.duration = cardDurationElem.textContent.trim();

  var cardServingElem = cardElem.querySelector('.recipe-servings');
  card.serving = cardServingElem.textContent.trim();

  var cardIngredientsElem = cardElem.querySelector('.recipe-ingredients');
  card.ingredients = cardIngredientsElem.textContent.trim();

  var cardInstructionsElem = cardElem.querySelector('.recipe-instructions');
  card.instructions = cardInstructionsElem.textContent.trim();

  var cardAuthorElem = cardElem.querySelector('.recipe-author');
  card.author = cardAuthorElem.textContent.trim();

  return card;
}



window.addEventListener('DOMContentLoaded', function () {

  var cardElemsCollection = document.getElementsByClassName('recipe-card');
  for (var i = 0; i < cardElemsCollection.length; i++) {
    allCards.push(parseCardElem(cardElemsCollection[i]));
  }

  var searchInput = document.getElementById('menubar-search-input');
  if (searchInput) {
    if (window.location.href.indexOf('/recipe') == -1) {
      searchInput.addEventListener('input', homeSearch);
    }
    searchInput.addEventListener('input', doSearchUpdate);
  }

  var homeSearchInput = document.getElementById('homepage-searchbar-input')
  if (homeSearchInput) {
    homeSearchInput.addEventListener('input', homeSearch)
  }
});
