export const PokemonList = ({ pokemons }) => {
  return (
    <>
      <h1>PokemonList</h1>
      <hr />

      {pokemons.map(p => (
        <div key={p.data.id}>
          <li>{p.data.name}</li>
          <img src={p.data.sprites.front_default} alt='' />
        </div>
      ))}
    </>
  );
};
