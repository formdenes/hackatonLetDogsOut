function postRecipes(body) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(
      {
        'title': body.title,
        'href': 'www.exampleRecipe.com',
        'ingredients': `${body.ingredient1} ${body.ingredient2} ${body.ingredient3}`,
        'thumbnail': body.image,
      }
    ),
  };

  return fetch('54.93.64.90:8080/addFav-POST', requestOptions).then.catch(e => console.log(e));
  ;
}

export default postRecipes