import { UseForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { useQuery } from "../../hooks";


export const SearchPage = () => {

  //Custom hook construido por mi
  const {q, navigate, heroes } = useQuery();

  

  const {searchText, onInputChange,onResetForm} = UseForm({
    searchText: q
  });

  
  const onSearchSubmit = (event) => {
    event.preventDefault();
    
    
    navigate(`?q=${searchText}`)
    
   
  }
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input 
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value = {searchText}
              onChange={onInputChange}
              
              
              />
            <button 
              className="btn btn-outline-primary mt-1"
              
            >
              Searh
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            (q === '')
            ? <div className="alert alert-primary animate__animated animate__fadeIn">Search a Hero</div> 
            : (heroes.length === 0) && <div className="alert alert-danger animate__animated animate__fadeIn">No hero with <b>{q}</b></div> 
          }

          
          

          {heroes.map(hero => (
            <HeroCard key={hero.id} {...hero} />
          ))}

        </div>
      </div>
      

    </>
  )
}
