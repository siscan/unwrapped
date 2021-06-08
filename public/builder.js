var titleInput = document.getElementById('title-input')
var ingredInput = document.getElementById('ingredients-input')
var instructInput = document.getElementById('instructions-input')
var durationInput = document.getElementById('duration-input')
var servingInput = document.getElementById('serving-input')
var authorInput = document.getElementById('author-input')
var urlInput = document.getElementById('url-input')
var recipeContainer = document.getElementsByClassName('recipebuilder')

function recipeCreate() {



    var isgood = true

    if(titleInput.value == '' || ingredInput.value == '' || instructInput.value == '' || durationInput.value == '' || servingInput.value == '' || authorInput.value == '' || urlInput.value == ''){
        isgood = false
    }

    
    if(isgood){
        
        var templateContext = {
            title: titleInput.value,
            duration: durationInput.value,
            serving: servingInput.value,
            ingredients: ingredInput.value,
            instructions: instructInput.value,
            author: authorInput.value,
            url: urlInput.value
        }
    
        var newCard = Handlebars.templates.recipeCard(templateContext)
    
        var recipeContainer = document.querySelector('.card-container');
        recipeContainer.insertAdjacentHTML('beforeend', newCard)

        var menu = document.getElementById("create-recipe-modal")
        var button = document.getElementById("create-recipe-button")
        recipeContainer.classList.toggle('hidden')
        button.classList.toggle('hidden')
        menu.classList.toggle('hidden')
        titleInput.value = ''
        ingredInput.value = ''
        instructInput.value = ''
        durationInput.value = ''
        servingInput.value = ''
        authorInput.value = ''
        urlInput.value = ''
    }

    else{
        alert("Please fill out all text boxes")
    }
    
  }



  function openRecipeCreate(event) {
    var menu = document.getElementById("create-recipe-modal")
    var recipeContainer = document.querySelector('.card-container')
    var button = document.getElementById("create-recipe-button")
    recipeContainer.classList.toggle('hidden')
    menu.classList.toggle('hidden')
    
    button.classList.toggle('hidden')
    titleInput.value = ''
    ingredInput.value = ''
    instructInput.value = ''
    durationInput.value = ''
    servingInput.value = ''
    authorInput.value = ''
    urlInput.value = ''
  }

  function clearRecipeCreate(event){
    titleInput.value = ''
    ingredInput.value = ''
    instructInput.value = ''
    durationInput.value = ''
    servingInput.value = ''
    authorInput.value = ''
    urlInput.value = ''
  }
  






  var button = document.getElementById("create-recipe-button")
  button.addEventListener('click', openRecipeCreate)

  
  var buttons = document.getElementsByClassName('modal-clear-button')
  for (var i = 0; i < buttons.length; i++) {
    
    buttons[i].addEventListener('click', clearRecipeCreate)
  }
  
  var buttons = document.getElementsByClassName('modal-accept-button')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', recipeCreate)
  }
