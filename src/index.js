document.addEventListener('DOMContentLoaded', () => {
  // console.log(POKEMON)

  //wrap forEach in function with if logic to define array of pokemon
  // if (!!searchInput) {
  //   pokemonList = searchPokemon(searchText); //scope woe?
  // } else {
  //   pokemonList = POKEMON;
  // }
  // something like that ^^^
  function populate(searchList) {
    // debugger
    if (searchList.length = 0) {
      searchList = POKEMON;
    }

    searchList.forEach(function(poke){
      debugger
      let body = document.querySelector('#body');
      let pokeContainer = document.createElement('div');
      pokeContainer.setAttribute("id", "pokemon-container");
      body.appendChild(pokeContainer);

      // creates poke card and assigns pokemon-card class
      let card = document.createElement('div')
      card.classList.add('pokemon-card')
      pokeContainer.appendChild(card)

      // creates frame card and assignes pokemon-frame class
      let frame = document.createElement('div')
      frame.classList.add('pokemon-frame')
      card.appendChild(frame)

      //creates h1 and img div in frame class
      let pokehead = document.createElement('h1')
      pokehead.classList.add('center-text')
      pokehead.innerText = poke.name
      frame.appendChild(pokehead)

      let imgdiv = document.createElement('div')
      imgdiv.classList.add('pokemon-image')
      frame.appendChild(imgdiv)

      let img = document.createElement('img')
      img.src = poke['sprites']['front']
      imgdiv.appendChild(img)
    });
  };

  pokeSearch = document.querySelector('#pokemon-search-input');

  let searchInput = document.addEventListener('input', function(e)  {

    let pokemonContainer = document.querySelector("#pokemon-container");
    pokemonContainer.remove();

    let searchText = pokeSearch.value;
    let filteredPoke = searchPokemon(searchText);
    populate(filteredPoke);
  })

  function searchPokemon(searchStr) {
    return POKEMON.filter(poke => poke.name.includes(searchStr) );
  };
}) // inside document eventlistener
