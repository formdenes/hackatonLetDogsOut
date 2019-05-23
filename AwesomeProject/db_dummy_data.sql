SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

CREATE TABLE IF NOT EXISTS Foods (
 Food_ID INT NOT NULL AUTO_INCREMENT,
 FoodName varchar(30) COLLATE latin1_general_ci NOT NULL,
 Picture VARCHAR(100) COLLATE latin1_general_ci NOT NULL,
 PRIMARY KEY (Food_ID)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

CREATE TABLE IF NOT EXISTS Ingredients (
 Ingredient_id INT NOT NULL AUTO_INCREMENT,
 Food_ID INT COLLATE latin1_general_ci NOT NULL,
 Ingredient_Name VARCHAR(100) COLLATE latin1_general_ci NOT NULL,
 Quantity VARCHAR(30) COLLATE latin1_general_ci NOT NULL,
 Ingredient_Type VARCHAR(100) COLLATE latin1_general_ci NOT NULL,
 PRIMARY KEY (Ingredient_id)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

CREATE TABLE IF NOT EXISTS Steps (
 Steps_ID INT NOT NULL AUTO_INCREMENT,
 Food_ID INT COLLATE latin1_general_ci NOT NULL,
 Step1 VARCHAR(200) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 Step2 VARCHAR(200) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 Step3 VARCHAR(200) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 Step4 VARCHAR(200) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 Step5 VARCHAR(200) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 Step6 VARCHAR(200) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 Step7 VARCHAR(200) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 Step8 VARCHAR(200) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 Step9 VARCHAR(200) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 Step10 VARCHAR(200) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 Step11 VARCHAR(200) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 Step12 VARCHAR(200) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 Step13 VARCHAR(200) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 Step14 VARCHAR(200) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 Step15 VARCHAR(200) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 PRIMARY KEY (Steps_ID)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO Foods
(FoodName, Picture)
VALUES
( "Crock Pot Roast", "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg"),
( "Roasted Asparagus", "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/50/84/7/picMcSyVd.jpg"),
( "Curried Lentils and Rice", "http://dagzhsfg97k4.cloudfront.net/wp-content/uploads/2012/05/lentils3.jpg"),
( "Big Night Pizza", "http://upload.wikimedia.org/wikipedia/commons/c/c7/Spinach_pizza.jpg"),
( "Cranberry and Apple Stuffed Acorn Squash Recipe", "http://elanaspantry.com/wp-content/uploads/2008/10/acorn_squash_with_cranberry.jpg"),
( "Mic's Yorkshire Puds", "http://upload.wikimedia.org/wikipedia/commons/f/f9/Yorkshire_Pudding.jpg"),
( "Old-Fashioned Oatmeal Cookies", "http://s3.amazonaws.com/gmi-digital-library/65caecf7-a8f7-4a09-8513-2659cf92871e.jpg");

INSERT INTO Ingredients
(Food_ID, Ingredient_Name, Quantity, Ingredient_Type)
VALUES
(1,"beef roast", "1", "MEAT"),
(1,"brown gravy mix", "1 package", "Baking"),
(1,"dried Italian salad dressing mix", "1 package", "Condiments"),
(1,"dry ranch dressing mix", "1 package", "Condiments"),
(1,"water", "1/2 cup", "Drinks"),
(2,"asparagus", "1 lb", "Produce"),
(2,"olive oil", "1 1/2 tbsp", "Condiments"),
(2,"kosher salt", "1/2 tsp", "Baking"),
(3,"beef broth", "1 quart", "Misc"),
(3,"dried green lentils", "1 cup", "Misc"),
(3,"basmati rice", "1/2 cup", "Misc"),
(3,"curry powder", "1 tsp", "Condiments"),
(3,"salt", "1 tsp", "Condiments"),
(4,"yeast", "5 teaspoons", "Baking"),
(4,"flour", "5 cups", "Baking"),
(4,"vegetable oil", "4 tablespoons", "Baking"),
(4,"sugar", "2 tablespoons", "Baking"),
(4,"salt", "2 teaspoons", "Baking"),
(4,"hot water", "2 cups", "Misc"),
(4,"pizza sauce", "1/4 cup", "Misc"),
(4,"mozzarella cheese", "3/4 cup", "Dairy"),
(5,"acorn squash", "2", "Produce"),
(5,"boiling water", "1", "Drinks"),
(5,"apples chopped into 1.4 inch pieces", "2", "Produce"),
(5,"dried cranberries", "1/2 cup", "Produce"),
(5,"cinnamon", "1 teaspoon", "Baking"),
(5,"melted butter", "2 tablespoons", "Dairy"),
(6,"plain flour", "200g", "Baking"),
(6,"eggs", "3", "Dairy"),
(6,"milk", "300ml", "Dairy"),
(6,"vegetable oil", "3 tbsp", "Condiments"),
(7,"raisins", "1 cup", "Produce"),
(7,"water", "1 cup", "Drinks"),
(7,"shortening", "3/4 cup", "Baking"),
(7,"sugar", "1/2 cups", "Baking"),
(7,"flour", "1/2 cups", "Baking"),
(7,"soda", "1 tsp.", "Baking"),
(7,"salt", "1 tsp.", "Baking"),
(7,"cinnamon", "1 tsp.", "Baking"),
(7,"baking powder", "1/2 tsp.", "Baking"),
(7,"cloves", "1/2 tsp.", "Baking"),
(7,"oats", "2 cups", "Baking"),
(7,"chopped nuts", "1/2 cups", "Baking");

INSERT INTO Steps
(Food_ID, Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, Step9, Step10, Step11, Step12, Step13, Step14, Step15)
VALUES
(1, "Place beef roast in crock pot.","Mix the dried mixes together in a bowl and sprinkle over the roast.","Pour the water around the roast.","Cook on low for 7-9 hours.","","","","","","","","","","",""),
(2, "Preheat oven to 425°F.","Cut off the woody bottom part of the asparagus spears and discard.","With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears (this keeps the asparagus from being all, and if you eat asparagus you know what I mean by that).","Place asparagus on foil-lined baking sheet and drizzle with olive oil.","Sprinkle with salt.","With your hands, roll the asparagus around until they are evenly coated with oil and salt.","Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.","They should be tender when pierced with the tip of a knife.","The tips of the spears will get very brown but watch them to prevent burning.","They are great plain, but sometimes I serve them with a light vinaigrette if we need something acidic to balance out our meal.","","","","",""),
(3, "Bring broth to a low boil.","Add curry powder and salt.","Cook lentils for 20 minutes.","Add rice and simmer for 20 minutes.","Enjoy","","","","","","","","","",""),
(4, "Add hot water to yeast in a large bowl and let sit for 15 minutes.","Mix in oil, sugar, salt, and flour and let sit for 1 hour.","Knead the dough and spread onto a pan.","Spread pizza sauce and sprinkle cheese.","Add any optional toppings as you wish.","Bake at 400 deg Fahrenheit for 15 minutes.","Enjoy","","","","","","","",""),
(5, "Cut squash in half, remove seeds.","Place squash in baking dish, cut-side down.","Pour 1/4-inch water into dish.","Bake for 30 minutes at 350 degrees F.","In large bowl, combine remaining ingredients.","Remove squash from oven, fill with mix.","Bake for 30-40 more minutes, until squash tender.","Enjoy","","","","","","",""),
(6, "Put the flour and some seasoning into a large bowl.","Stir in eggs, one at a time.","Whisk in milk until you have a smooth batter.","Chill in the fridge for at least 30 minutes.","Heat oven to 220C/gas mark 7.","Pour the oil into the holes of a 8-hole muffin tin.","Heat tin in the oven for 5 minutes.","Ladle the batter mix into the tin.","Bake for 30 minutes until well browned and risen.","Enjoy","","","","",""),
(7, "Simmer raisins and water over medium heat until raisins are plump, about 15 minutes.","Drain raisins, reserving the liquid." "Add enough water to reserved liquid to measure 1/2 cup.Add enough water to reserved liquid to measure 1/2 cup.","Heat oven to 400°.","Mix thoroughly shortening, sugar, eggs and vanilla.","Stir in reserved liquid.","Blend in remaining ingredients.","Drop dough by rounded teaspoonfuls about 2 inches apart onto ungreased baking sheet.","Bake 8 to 10 minutes or until light brown.","About 6 1/2 dozen cookies.","Enjoy","","","","","");