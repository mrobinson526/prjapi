import React, { useState, useEffect} from 'react';


const App = () => {
    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);
    
    useEffect(() => {
    
        fetch("https://ghibliapi.herokuapp.com/films/ ")
        .then(res => res.json())
        .then(allFilms => setFilms(allFilms))
     }, []);
       return (
           <main className = "container">
               <section className="row justify-content-center mt-5">
               {films.map(films => (
                   <div className="col-md-6" key={'films-card ${films-id}'}>
                       <div className="card shadow my-2">
                           <div className="card-body">
                               <h4 className = "card-title">{films.title}</h4>
                               <p className="card-subtitle text-muted">{films.release_date}</p>
                               <p className="card-text">{films.description.substring(0, 150)}</p>
               
                           </div>
                       </div>
                   </div>
               ))}
               </section>
           </main>
       )
}
   

    export default App;
