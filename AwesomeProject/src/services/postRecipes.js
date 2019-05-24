function postRecipes(body) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(
      {
        'title': body.title,
        'href': 'www.exampleRecipe.com',
        'ingredients': `${body.ingredients}`,
        'thumbnail': body.image,
      }
    ),
  };

  return fetch('http://54.93.64.90:8080/addFav', requestOptions).catch(e => console.log(e));
  ;
}

export default postRecipes