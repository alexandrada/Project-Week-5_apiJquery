var app = {};
//1. The user has the option of selecting a Meal
//2. On click, we will GET the recipes depending on the user's choice.
app.getMeals = function(whatTheUserChose) {
	$.ajax({
		url: 'http://api.yummly.com/v1/api/recipes',
		type: 'GET',
		dataType: 'jsonp',
		data: {
			q: whatTheUserChose, 
			_app_id:'cb3fd9f2',
			_app_key:'c9f198689fa48b101022902472bb5056',
			format: 'jsonp',
		},
		success: function(meals) { 
		app.meals = meals;
		app.currentMeal = 0;
		app.displayMeal();
	}
});
	}
//3. Upon click, the Modal will appear (with the class of 'show') and will be 
//automatically cleared.

//4. We will display the Meal Option available, displaying the Recipe Name and Photo,
//into the Modal.

	app.displayMeal = function(){
		console.log(app.currentMeal);
	$('.meal-container').empty()
	
	var meal = app.meals.matches[app.currentMeal];

	var mealName = $('<h4>');
	mealName.text(meal.recipeName);

	 if (meal.recipeName.match(/Breakfast/gi)) {
        meal.recipeName = meal.recipeName.replace(/Breakfast/gi, "Burly Boys Breakfast")
    };
    if (meal.recipeName.match(/bacon/gi)) {
        meal.recipeName = meal.recipeName.replace(/bacon/gi, "Bentley Bacon")
    };
    if (meal.recipeName.match(/Lunch/gi)) {
        meal.recipeName = meal.recipeName.replace(/Lunch/gi, "Livin Large Lunch")
    };
    if (meal.recipeName.match(/lamb/gi)) {
        meal.recipeName = meal.recipeName.replace(/lamb/gi, "lamborghini lamb")
    };
    if (meal.recipeName.match(/burger/gi)) {
        meal.recipeName = meal.recipeName.replace(/burger/gi, "bentley burger")
    };
    if (meal.recipeName.match(/egg[eggs, egg]/gi)) {
        meal.recipeName = meal.recipeName.replace(/egg[eggs, egg ]/gi, "neon eggies")
    };
    if (meal.recipeName.match(/protein/gi)) {
        meal.recipeName = meal.recipeName.replace(/protein/gi, "brotein")
    };
    if (meal.recipeName.match(/tacos/gi)) {
        meal.recipeName = meal.recipeName.replace(/tacos/gi, "twerkin tacos")
    };
    if (meal.recipeName.match(/dessert/gi)) {
        meal.recipeName = meal.recipeName.replace(/chocolate/gi, "judo chopped chocolate")
    };
    if (meal.recipeName.match(/rice/gi)) {
        meal.recipeName = meal.recipeName.replace(/rice/gi, "White Silk PanFried Rices")
    };
    if (meal.recipeName.match(/icing/gi)) {
        meal.recipeName = meal.recipeName.replace(/icing/gi, "iced out icing")
    };
    if (meal.recipeName.match(/hot dogs/gi)) {
        meal.recipeName = meal.recipeName.replace(/hot dogs/gi, "hot jody husky dogs")
    };
    if (meal.recipeName.match(/mexican chorizo/gi)) {
        meal.recipeName = meal.recipeName.replace(/chorizo/gi, "neato chorizo")
    };
    if (meal.recipeName.match(/hot dogs/gi)) {
        meal.recipeName = meal.recipeName.replace(/hot dogs/gi, "hot jody husky dogs")
    };
    if (meal.recipeName.match(/pizza/gi)) {
        meal.recipeName = meal.recipeName.replace(/pizza/gi, "pizza thangs")
    };
     if (meal.recipeName.match(/paleo/gi)) {
        meal.recipeName = meal.recipeName.replace(/paleo/gi, "probably healthy crap")
    };
     if (meal.recipeName.match(/cheesecake/gi)) {
        meal.recipeName = meal.recipeName.replace(/cheesecake/gi, "versace caviar cheesecake")
    };
    if (meal.recipeName.match(/burritos/gi)) {
        meal.recipeName = meal.recipeName.replace(/burritos/gi, "neato burritos")
    };
    if (meal.recipeName.match(/lobster/gi)) {
        meal.recipeName = meal.recipeName.replace(/lobster/gi, "luxury lobstah")
    };
     if (meal.recipeName.match(/sandwiches/gi)) {
        meal.recipeName = meal.recipeName.replace(/sandwiches/gi, "how to be the man-wiches")
    };
    if (meal.recipeName.match(/cauliflower/gi)) {
        meal.recipeName = meal.recipeName.replace(/cauliflower/gi, "codeine cauliflower")
    };
   
   

    mealName.text(meal.recipeName);

    var mealImg = $('<img>');
    mealImg.attr('src', meal.imageUrlsBySize['90'].replace(/=s90/,'=s500'));

    $('.meal-container').append(mealName, mealImg);
	console.log(meal);

    app.buttonLink(meal);


	
}

//5. Link to the recipe via yummly
	app.buttonLink = function(meal){
            console.log("This is working!");
            var recipeLink = "http://www.yummly.com/recipe/";
            var recipeID = app.currentMeal.id;
            console.log(meal.id);
        $('#recipeBtn').on('click', function(){
            console.log("RIFF RAFF");
            $(".recipeLink").attr("href", recipeLink + meal.id + "?columns=2&position=2%2F55");
           
		});
	}

//6. Display mutliple recipes. 
	app.buttonClick = function(){
		$('#nextBtn').on('click', function(ev){
		app.currentMeal += 1;
		if(app.currentMeal >= app.meals.matches.length){
			app.currentMeal = 0;
		}
		
		app.displayMeal();
		});
	}

	// app.buttonClick = function(){
	// 	$('#recipeBtn').on('click', function(ev){
		//take them to the recipe}


app.boxClick = function() {
//6. YouTube video will automatically play upon display the Meal option. 
	
	var riffVids = ['JxLS-cpgbe0', 'yI0cmlIUtyU','4EdViQm0J74','yRaDcvvTkHM', 'Gpd7sHHGSsE', 'niHSDx4Y_zs', 'u1p_W_7Q3QA', 'wRVbjwjdD_U', 'DFWHNuLhwSY', 'H-emaeu2B0U', '2NNbeS-_EEA'  ];
	$('.box').on('click', function(e){
		var userSelection = $(this).data('meal');
		app.getMeals(userSelection);
		$('.modal').addClass('show');
		var randomRiffVids = Math.floor(Math.random()*riffVids.length + 1);
		console.log(randomRiffVids);
		$('.youtube iframe').attr('src', 'https://www.youtube.com/embed/' + riffVids[randomRiffVids] + '?autoplay=true' );

	});
};
app.init = function() {
	app.boxClick();
	app.buttonClick();
	// app.buttonLink();
};

$(function() {
	app.init();
});

 
//8. User is able to click outside of the modal to exit at anytime, and begin their search again.
  $('.modal').on('click', function(ev){
    $('.modal').removeClass('show');
//7. If the user decides to click on another Meal, the YouTube video will change as well.
//YouTube video may be randomly applied.
    $('.youtube iframe').attr('src', '' );
  });

  $('.modal-container').on('click', function(evn){
    evn.stopPropagation();
  });

