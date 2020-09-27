import React , {useEffect , useState} from 'react';
import './App.css';
import Recepie from "./Recepie";

function App() {
  const App_ID = "1d9c7d3b" ;
  const App_Key = "9d35786a007e1b6babc10233c68a90f7";
  const [recepie , setRecepie] = useState([]);
  const [search , setSearch] = useState("");
  const [query , setQuery] = useState("chicken");
 
  useEffect (()=>{
    getRecepie()
  }
    ,[query]
  )

  const getRecepie = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_Key}`);
    const data = await response.json() ;
    setRecepie(data.hits);
    console.log(data.hits);
  }
  const updateSearch = e => {
    setSearch(e.target.value);

  }
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("")

  }


  return (
    <div className="App">
      <h1 className="header"><i>Welcome to our Food Recipes</i></h1>
      <form className="search-form" onSubmit={getSearch}>
        
        <input type="text" className="search-bar"
         value={search}
         onChange={updateSearch} />
        <button type="submit" className="search-button" >Search</button>
      </form>
      <div className="recepies">
      {recepie.map(recepie => (

   <Recepie
      key={recepie.recipe.label}
      title ={recepie.recipe.label}
       calories ={recepie.recipe.calories}
       image ={recepie.recipe.image}
      ingredients={recepie.recipe.ingredients}
 />
))}
        </div>
      
    </div>
  );
}

export default App;
