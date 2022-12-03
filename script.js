let url = 'https://www.themealdb.com/api/json/v1/1/random.php';

let mainImage;

function loadRandomImage(){
fetch(url)
.then(res => res.json())
.then((out) => {
  console.log('Checkout this JSON! ', out.meals[0]); 
  mainImage = document.getElementById('main_image')
  mainImage.setAttribute('src', out.meals[0].strMealThumb)
})
.catch(err => { throw err });
}

function loadRandomRecipe(n){
  fetch(url)
  .then(res => res.json())
  .then((out) => {
    let randomRecipe = document.getElementById('random_Recipe_'+n);
    let randomrecipename = document.getElementById('random_recipe_name_'+n)
    let randomdescription = document.getElementById('random_recipe_description_'+n);
    randomRecipe.setAttribute('src', out.meals[0].strMealThumb);
    randomrecipename.innerHTML = out.meals[0].strMeal;
    randomdescription.innerHTML = out.meals[0].strInstructions.slice(0,70) + " . . .";
  })
  .catch(err => { throw err });
  }

function loadRandomChef(){
  
  return 0;
}

window.onload(mainFunction());

function mainFunction() {
  loadRandomImage();

  for (let i = 1; i <= 12; i++){
    loadRandomRecipe(i);
  }
  
}