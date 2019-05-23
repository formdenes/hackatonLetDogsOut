SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

CREATE TABLE IF NOT EXISTS Favorites (
 fav_id INT NOT NULL AUTO_INCREMENT,
 title varchar(30) COLLATE latin1_general_ci NOT NULL,
 href VARCHAR(200) COLLATE latin1_general_ci NOT NULL,
 ingredients VARCHAR(200) COLLATE latin1_general_ci NOT NULL,
 thumbnail VARCHAR(200) COLLATE latin1_general_ci NOT NULL,
 PRIMARY KEY (fav_id)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO Favorites
(title,href,ingredients,thumbnail)
VALUES
( "Amy's Barbecue Chicken Salad","http:\/\/allrecipes.com\/Recipe\/Amys-Barbecue-Chicken-Salad\/Detail.aspx", "barbecue sauce, chicken, cilantro, lettuce, ranch dressing, lettuce, tomato", "http:\/\/img.recipepuppy.com\/10.jpg");
