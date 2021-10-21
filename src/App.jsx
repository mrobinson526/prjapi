import React, { useState, useEffect} from 'react';
    
    const App = () => {
        const [films, setFilms] = useState([]);
        const [loadFilms, setLoadFilms] = useState(false);
        const [people, setPeople] = useState([]);
        const [loadPeople, setLoadPeople] = useState(false);    
    
    useEffect(() => {
        if (loadFilms) {
            fetch("https://ghibliapi.herokuapp.com/films/ ")
                .then(res => res.json())
                .then(films => setFilms(films))
                .catch(err => console.log(err))
        }
    }, [loadFilms]);

    useEffect(() => {
        if (loadPeople) {
            fetch("https://ghibliapi.herokuapp.com/people/ ")
                .then(res => res.json())
                .then(people => setPeople(people))
                .catch(err => console.log(err))
        }
    }, [loadPeople]);

    const handleLoadFilms = () => {
        setLoadFilms(true);
        setLoadPeople(false);
    }

    const handleLoadPeople = () => {
        setLoadPeople(true);
        setLoadFilms(false);
    }

    if (loadFilms) {
        return (
            <div className="container">
                <button class="btn btn-primary" onClick={handleLoadFilms}> Load Films</button>
                <button class="btn btn-primary" onClick={handleLoadPeople}>Load People</button>
                <div className="row justify-content-center mt-5">
           {films.map(film => (
                        <div className="card">
                       <div className="card-body">
                           <h5 className = "card-title">{film.title}</h5>
                           <p className="card-text">{film.release_date}</p>
                           <p className="card-text">{film.description}</p>
           
                       </div>
                   </div>
                ))}
           </div>
        </div>     
        )
    
    } else if (loadPeople) {
        return (
            <div className="container">
                <button class="btn btn-primary" onClick={handleLoadFilms}> Load Films</button>
                <button class="btn btn-primary" onClick={handleLoadPeople}>Load People</button>
                <div className="row justify-content-center mt-5">
           {people.map(person => (
                   <div className="card">
                       <div className="card-body">
                           <h5 className = "card-title">{person.name}</h5>
                           <p className="card-text">{person.age}</p>
                           <p className="card-text">{person.gender}</p>
                       </div>
                   </div>
                ))}
           </div>
        </div>     
        )
    } else {
        return (
            <div className="container">
                <button class="btn btn-primary" onClick={handleLoadFilms}> Load Films</button>
                <button class="btn btn-primary" onClick={handleLoadPeople}>Load People</button>
            </div>
        )
    }
         
}

    
      

    export default App;
