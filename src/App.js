import logo from './logo.svg';
import './App.css';
import { getPokemonList, getPokemonDescription, getPokemonSpriteUrl } from './helper';
import { useEffect, useState, useRef } from 'react';
function App() {
  const [pokemonList, setPokemonList]= useState([])
  const [selectedIndex, setSelectedIndex]= useState(0)
  const [des, setDes]= useState('')
  const ref= useRef(null)
  useEffect( ()=> {
     getPokemonList().then(list=>{ setPokemonList(list); console.log(list)})
    
  }, [])
  //fetch the selected pokemon
  useEffect(()=> {
    getPokemonDescription(selectedIndex+1).then((des)=> setDes(des))


  }, [selectedIndex])
  const handleChange= (e)=> {
    console.log(e.target.value)
    console.log(e.target.selectedIndex)
    setSelectedIndex(e.target.selectedIndex)
  }
  const prevBtnClick= (e)=> {
    let index= selectedIndex
    if (index==0) {
      index=pokemonList.length-1
      
    } else {
     index-= 1
    }
    ref.current.selectedIndex = index
    setSelectedIndex(index)
    console.log(selectedIndex)
  }
  const nextBtnClick= (e)=> {
    let index= selectedIndex
    if (index==pokemonList.length-1) {
      index=0
      
    } else {
     index+= 1
    }
    ref.current.selectedIndex = index
    setSelectedIndex(index)
    console.log(selectedIndex)
  }
  return (
    <div className="App">
     <div classname="select">
      <select onChange={handleChange} ref={ref}>
        {pokemonList.map((pokemon, id)=> <option key={id} >{pokemon.name}</option> )}
      </select>
     </div>
     <div className='description'>
      <p>{des}</p>
      <img
       src={getPokemonSpriteUrl(selectedIndex+1)}
       width="200"
       height="200"
       style={{borderRadius: '50%',backgroundColor: 'red'}}
       
       />
     </div>
     <div className='btn-group'>
      <button
      onClick={prevBtnClick}
      >Previous</button>
      <button
      onClick={nextBtnClick}>Next</button>
     </div>
    </div>
  );
}

export default App;
