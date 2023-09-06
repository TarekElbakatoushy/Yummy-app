//Get Data From API
async function getData() {
    let http = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s`
    );
  let Data = await http.json()
   let allMeals = Data.meals
  let Container = ""
    for (let i = 0; i < allMeals.length; i++){
     Container =
       Container +
       `<div id="card" class="col-sm-12 col-md-6 col-lg-3">
        <div class="layer">
        <div class="img">
            <img src="${allMeals[i].strMealThumb}" class="w-100" alt="">
        </div>
        <div id="text" class="text d-flex justify-content-center align-items-center" onclick = "getDetails(event)">${allMeals[i].strMeal}</div>
        </div>
        </div>`;   
  }
  document.getElementById("all").innerHTML = Container
}
getData();
  

//loading screen
$("document").ready(function () {
  $("#loader").fadeOut(1000)
  $("body").css({"overflow":"auto"})
})
//side Navbar
$("#bars").click(function () {
  if ($("#side").css("left") == "-183px") {
    $("#side").css({ "left": "0" });
    $("#bars").fadeOut(500, function () {
      $("#close").fadeIn(500); 
    })
  }
})
  
$("#close").click(function () {
      $("#side").css({ "left": "-183px" });
      $("#close").fadeOut(500, function () {
        $("#bars").fadeIn(500);
      });
    }
)
function navClose() {
        $("#side").css({ "left": "-183px" });
      $("#close").fadeOut(500, function () {
        $("#bars").fadeIn(500);
      });
    }
//Search function
function search() {
  navClose()
  document.getElementById("all").innerHTML = ""
  document.getElementById("Contact").innerHTML = "";
  document.getElementById("Search").innerHTML = `<div class="container">
            <div class=" header d-flex justify-content-center align-content-center" id="header">
                <h1>Search</h1>
                <div class="img">
                    <img src="./Imgs/search.png" alt="w-100">
                </div>
            </div>
            <div class="form d-flex flex-column my-4" id ="form">
            <input type="text" id="byName" class="form-control my-3" placeholder="Search By Meal Name">
            <input type="text" id="byletter" class="form-control my-3"placeholder="Search By First Letter" maxlength="1">
            </div>
            <div class="data row" id="all">
            </div>
        </div>`;
  //search by Name
  let searchByName = document.getElementById("byName");

  searchByName.addEventListener("input", async function () {
    let http = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s`
    );
    let Data = await http.json();
    let allMeals = Data.meals;
    let Container = "";
    for (let i = 0; i < allMeals.length; i++) {
      if (
        `${allMeals[i].strMeal}`
          .toLocaleLowerCase()
          .includes(searchByName.value.toLocaleLowerCase())
      ) {
        Container =
          Container +
          `<div id="card" class="col-sm-12 col-md-6 col-lg-3">
        <div class="layer">
        <div class="img">
            <img src="${allMeals[i].strMealThumb}" class="w-100" alt="">
        </div>
        <div id="text" class=" d-flex justify-content-center align-items-center " onclick= "getDetails(event)">${allMeals[i].strMeal}</div>
        </div>
        </div>`;
      }
      console.log(Container);
      document.getElementById("all").innerHTML = Container;
    }
  });

  // search by first letter
  let searchByFirstLetter = document.getElementById("byletter");

  searchByFirstLetter.addEventListener("input", async function () {
    let http = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s`
    );
    let Data = await http.json();
    let allMeals = Data.meals;
    let Container = "";
    for (let i = 0; i < allMeals.length; i++) {
      if (
        `${allMeals[i].strMeal}`
          .charAt(0)
          .toLocaleLowerCase()
          .includes(searchByFirstLetter.value.toLocaleLowerCase())
      ) {
        Container =
          Container +
          `<div id="card" class="col-sm-12 col-md-6 col-lg-3">
        <div class="layer">
        <div class="img">
            <img src="${allMeals[i].strMealThumb}" class="w-100" alt="">
        </div>
        <div id="text" class=" d-flex justify-content-center align-items-center">${allMeals[i].strMeal}</div>
        </div>
        </div>`;
      }
      console.log(Container);
      document.getElementById("all").innerHTML = Container;
    }
  });
}
// Categories Function
async function getCategories() {
  navClose()
  document.getElementById("Search").innerHTML = "";
  document.getElementById("Contact").innerHTML = "";
    let http = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  let Data = await http.json();
  let Categories = Data.categories;
  let Container = "";
  for (let i = 0; i < Categories.length; i++) {
    Container =
      Container +
      `<div id="card" class="col-sm-12 col-md-6 col-lg-3"
       style="display: flex;
       flex-direction: column;
       align-items: flex-start;
       font-size :16px ;
       overflow :hidden;">
        <div class="layer">
        <div class="img">
            <img src="${
              Categories[i].strCategoryThumb
            }" class="w-100" alt="" style = "border: none;">
        </div>
        <div id="text" class=" d-flex flex-column justify-content-center align-items-center">
        <h3 onclick= "showCategories(event)">${Categories[i].strCategory}<h3>
        <p 
        style = "font-size: 12px;
        text-align: center;">${Categories[i].strCategoryDescription.substring(
          0,
          200
        )} </p>
        </div>
        </div>
        </div>`;
  }
  document.getElementById("all").innerHTML = Container;
}
// Area Function
async function getArea() {
  document.getElementById("Search").innerHTML = "";
  document.getElementById("Contact").innerHTML = "";
navClose()
  let http = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  let Data = await http.json();
  let allMeals = Data.meals;
  let Container = "";
  for (let i = 0; i < allMeals.length; i++) {
    Container =
      Container +
      `<div id="card" class="col-sm-12 col-md-6 col-lg-3">
        <div class="layer">
        <div class="img">
            <img src="./Imgs/earth.png" class="w-100" alt="" style = "border: none ;">
        </div>
        <h3 id ="Area" class=" d-flex justify-content-center align-items-center text-white" onclick = "showAreas(event)">${allMeals[i].strArea}</h3>
        </div>
        </div>`;
  }
  document.getElementById("all").innerHTML = Container;
}
// ingredients function
async function getIngredients() {
  document.getElementById("Search").innerHTML = "";
  document.getElementById("Contact").innerHTML= "";
    navClose();
    let http = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
    let Data = await http.json();
  let allMeals = Data.meals;
  console.log(allMeals)
    let Container = "";
    for (let i = 0; i < 20; i++) {
      Container =
        Container +
        `<div id="card" class="col-sm-12 col-md-6 col-lg-3">
        <div class="layer">
        <div class="img">
            <img src="./Imgs/ingredients.png" class="w-100" alt="" style = "border: none ;">
        </div>
        <h3 id ="Area" class=" d-flex justify-content-center align-items-center text-white" onclick = "showIngredient(event)">${
          allMeals[i].strIngredient
        }</h3>
        </div>
        <p style = "font-size: 12px;text-align: center; color:white">${allMeals[
          i
        ].strDescription.substring(0, 200)} </p>
        </div>`;
    }
    document.getElementById("all").innerHTML = Container;
}
// show Contact function 
function showContact() {
  navClose()
  document.getElementById("all").innerHTML = "";
  document.getElementById("Search").innerHTML = "";
  document.getElementById("Contact").innerHTML = `
      <div class="container">
        <h1 class="Contact-header">Contact Us</h1>
        <div class="Contact-form row">
            <input type="text" id="name" placeholder="Enter Your Name" class="form-control col-sm-12 col-lg-6">
            <input type="email" id="Email" placeholder="Enter Your E-mail" class="form-control col-sm-12 col-lg-6">
            <input type="text" id="Phone" placeholder="Enter Your Phone" class="form-control col-sm-12 col-lg-6">
            <input type="number" id="Age" placeholder="Enter Your Age" class="form-control col-sm-12 col-lg-6">
            <input type="password" id="Pass" placeholder="Enter Your Password" class="form-control col-sm-12 col-lg-6">
            <input type="password" id="Re-Pass" placeholder="Re-Type Your Password" class="form-control col-sm-12 col-lg-6">
            <button type="submit" id="btn" class=" disabled btn btn-primary">Submit</button>
        </div>
    </div>
  `;
  let Nameinput = document.getElementById("name");
  let Emailinput = document.getElementById("Email");
  let Passinput = document.getElementById("Pass");
  let Ageinput = document.getElementById("Age");
  let Phoneinput = document.getElementById("Phone");
  let rePassinput = document.getElementById("Re-Pass");
  let regBtn = document.getElementById("btn");


  Emailinput.addEventListener("input", function () {
    validateEmail() 
  })

  function validateEmail() {
    let EmailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let EmailValue = Emailinput.value;
    if (EmailPattern.test(EmailValue) == true) {
      Emailinput.classList.remove("is-invalid");
      Emailinput.classList.add("is-valid");
      return true;
    } else {
      Emailinput.classList.remove("is-valid");
      Emailinput.classList.add("is-invalid");
      return false;
    }
  }

  Passinput.addEventListener("input", function () {
    ValidatePass()
  })

  function ValidatePass() {
    if (Passinput.value != "") {
            Passinput.classList.remove("is-invalid");
            Passinput.classList.add("is-valid");
      return true;
    } else {
            Passinput.classList.remove("is-valid");
            Passinput.classList.add("is-invalid");
      return false;
    }
  }

  Nameinput.addEventListener("input", function () {
    ValidateName()
  })

  function notEmpty() {
        if (Phoneinput.value != "" && rePassinput.value != "" && Ageinput.value != "") {
          return true
        }
        else {
          return false
        }
    }

  function ValidateName() {
    let NamePattern = /^[A-Za-z][A-Za-z]{2,20}$/;
    if (NamePattern.test(Nameinput.value)) {
            Nameinput.classList.remove("is-invalid");
            Nameinput.classList.add("is-valid");
      return true;
    } else {
            Nameinput.classList.remove("is-valid");
            Nameinput.classList.add("is-invalid");
      return false;
    }
  }


  document.oninput =  function check() {

    if (
      validateEmail() == true &&
      ValidatePass() == true &&
      ValidateName() == true &&
       notEmpty() == true
    ) {
      regBtn.classList.remove("disabled");
    } else {
      console.log("test");
    }
  }

}


//show meal details
async function getDetails(event) {
  document.getElementById("all").innerHTML = "";
    document.getElementById("Search").innerHTML = "";
    document.getElementById("Contact").innerHTML = "";
    var clickedElement = event.target;
    var innerHTML = clickedElement.innerHTML;
    var https = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${innerHTML}`)
    let data = await https.json()
    var mealDetails = data.meals
      let Container = "";
      for (let i = 0; i < mealDetails.length; i++) {
        Container =
          Container +
          `<div id="card" class=" d-flex flex-column col-sm-12  col-lg-4">
            <img src="${mealDetails[i].strMealThumb}" class="w-100" alt="">
            <h3>${mealDetails[i].strMeal}</h3>
        </div>
        <div class="col-sm-12  col-lg-8">
        <h1 class = "headline"> Instructions </h1>
        <p class= "details">${mealDetails[i].strInstructions}</p>
        <h2>Area : ${mealDetails[i].strArea} </h2>
        <h2>Category : ${mealDetails[i].strCategory} </h2>
        <span>${mealDetails[i].strIngredient1}</span>
        <span>${mealDetails[i].strIngredient2}</span>
        <span>${mealDetails[i].strIngredient3}</span>
        <span>${mealDetails[i].strIngredient4}</span>
        <span>${mealDetails[i].strIngredient5}</span>
        <span>${mealDetails[i].strIngredient6}</span>
        <span>${mealDetails[i].strIngredient7}</span>
        <span>${mealDetails[i].strIngredient8}</span>
        <span>${mealDetails[i].strIngredient9}</span>
        <span>${mealDetails[i].strIngredient10}</span>
        <span>${mealDetails[i].strIngredient11}</span>
        <span>${mealDetails[i].strIngredient12}</span>
        <span>${mealDetails[i].strIngredient13}</span>
        <br>
  <button class="btn btn-success"><a href="${mealDetails[i].strSource}">Source</a></button>
  <button class="btn btn-danger"><a href="${mealDetails[i].strYoutube}">Youtube</a></button>
        </div>`;
    }
    document.getElementById("all").innerHTML = Container;
        let spans = document.getElementsByTagName("span");
        for (let i = 0; i < spans.length; i++) {
          if (spans[i].innerHTML == "") {
            spans[i].classList.add("d-none");
          }
        }
  
  }
;

//filter meals by category
async function showCategories(event) {
   document.getElementById("all").innerHTML = "";
    document.getElementById("Search").innerHTML = "";
    document.getElementById("Contact").innerHTML = "";
    var clickedElement = event.target;
    var innerHTML = clickedElement.innerHTML;
    var https = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${innerHTML}`)
    let data = await https.json()
  var mealDetails = data.meals
      let Container = "";
      for (let i = 0; i < mealDetails.length; i++) {
        Container =
          Container +
          `<div id="card" class="col-sm-12 col-md-6 col-lg-3">
        <div class="layer">
        <div class="img">
            <img src="${mealDetails[i].strMealThumb}" class="w-100" alt="">
        </div>
        <div id="text" class="text d-flex justify-content-center align-items-center" onclick = "getDetails(event)">${mealDetails[i].strMeal}</div>
        </div>
        </div>`;
    }
    document.getElementById("all").innerHTML = Container;
  
}

//filter meals by Area

async function showAreas(event) {
    document.getElementById("all").innerHTML = "";
    document.getElementById("Search").innerHTML = "";
    document.getElementById("Contact").innerHTML = "";
    var clickedElement = event.target;
    var innerHTML = clickedElement.innerHTML;
    var https = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${innerHTML}`
    );
    let data = await https.json();
    var mealDetails = data.meals;
    let Container = "";
    for (let i = 0; i < mealDetails.length; i++) {
      Container =
        Container +
        `<div id="card" class="col-sm-12 col-md-6 col-lg-3">
        <div class="layer">
        <div class="img">
            <img src="${mealDetails[i].strMealThumb}" class="w-100" alt="">
        </div>
        <div id="text" class="text d-flex justify-content-center align-items-center" onclick = "getDetails(event)">${mealDetails[i].strMeal}</div>
        </div>
        </div>`;
    }
    document.getElementById("all").innerHTML = Container; 
}

//filter by main ingredient

async function showIngredient(event) {
      document.getElementById("all").innerHTML = "";
      document.getElementById("Search").innerHTML = "";
      document.getElementById("Contact").innerHTML = "";
      var clickedElement = event.target;
      var innerHTML = clickedElement.innerHTML;
      var https = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${innerHTML}`
      );
      let data = await https.json();
      var mealDetails = data.meals;
      let Container = "";
      for (let i = 0; i < mealDetails.length; i++) {
        Container =
          Container +
          `<div id="card" class="col-sm-12 col-md-6 col-lg-3">
        <div class="layer">
        <div class="img">
            <img src="${mealDetails[i].strMealThumb}" class="w-100" alt="">
        </div>
        <div id="text" class="text d-flex justify-content-center align-items-center" onclick = "getDetails(event)">${mealDetails[i].strMeal}</div>
        </div>
        </div>`;
      }
      document.getElementById("all").innerHTML = Container; 
}