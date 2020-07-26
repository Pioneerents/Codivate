const axios = require("axios");
const fs = require("fs");

let recipes = [];

for (let x = 0; x < 400; x++) {
  axios.get("https://www.themealdb.com/api/json/v1/1/random.php").then((i) => {
    if (
      !JSON.stringify(i.data.meals[0]).toLowerCase().includes("pork") ||
      JSON.stringify(i.data.meals[0]).toLowerCase().includes("ham") ||
      JSON.stringify(i.data.meals[0]).toLowerCase().includes("bacon")
    ) {
      let meal = i.data.meals[0];
      let a =
        "Meal: " +
        meal.strMeal +
        "\n" +
        "\n" +
        "Category: " +
        meal.strCategory +
        "\n" +
        "\n" +
        "Cuisine: " +
        meal.strArea +
        "\n" +
        "\n" +
        "Instructions: " +
        meal.strInstructions;
      let b =
        "\n\nIngredients : " +
        meal.strMeasure1 +
        " " +
        meal.strIngredient1 +
        ", " +
        meal.strMeasure2 +
        " " +
        meal.strIngredient2 +
        ", " +
        meal.strMeasure3 +
        " " +
        meal.strIngredient3 +
        ", " +
        meal.strMeasure4 +
        " " +
        meal.strIngredient4 +
        ", " +
        meal.strMeasure5 +
        " " +
        meal.strIngredient5 +
        ", " +
        meal.strMeasure6 +
        " " +
        meal.strIngredient6 +
        ", " +
        meal.strMeasure7 +
        " " +
        meal.strIngredient7 +
        ", " +
        meal.strMeasure8 +
        " " +
        meal.strIngredient8 +
        ", " +
        meal.strMeasure9 +
        " " +
        meal.strIngredient9 +
        ", " +
        meal.strMeasure10 +
        " " +
        meal.strIngredient10 +
        ", " +
        meal.strMeasure11 +
        " " +
        meal.strIngredient11 +
        ", " +
        meal.strMeasure12 +
        " " +
        meal.strIngredient12 +
        ", " +
        meal.strMeasure13 +
        " " +
        meal.strIngredient13 +
        ", " +
        meal.strMeasure14 +
        " " +
        meal.strIngredient14 +
        ", " +
        meal.strMeasure15 +
        " " +
        meal.strIngredient15 +
        ", " +
        meal.strMeasure16 +
        " " +
        meal.strIngredient16 +
        ", " +
        meal.strMeasure17 +
        " " +
        meal.strIngredient17 +
        ", " +
        meal.strMeasure18 +
        " " +
        meal.strIngredient18 +
        ", " +
        meal.strMeasure19 +
        " " +
        meal.strIngredient19 +
        ", " +
        meal.strMeasure20 +
        " " +
        meal.strIngredient20;
      let c = "\nYoutube:" + " " + meal.strYoutube;
      let join = a + b + c;
      recipes.push(join);
      // console.log(meal);
    }

    fs.writeFileSync("recipes.json", JSON.stringify(recipes), "utf8");
  });
}
