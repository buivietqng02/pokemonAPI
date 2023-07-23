export async function getPokemonList() {
    const data= awaitfetch(
        'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150'
    ).then(res=> res.json())
    return data.results;
}
export async function getPokemonDescription(index) {
const pokemon= await fetch(`https://pokeapi.co/api/v2/pokemon-species/${index}`)
.then(res=> res.json())
return pokemon.flavor_text_entries[0].flavor_text.replace()
}