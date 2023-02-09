import './styles.css';

import {Header} from "./components/common/Header";
import {Footer} from "./components/common/Footer";
import {Search} from "./components/search/Search";
import {CarsSection} from "./components/carsSection/CarsSection";
import {useEffect, useState} from "react";

const baseUrl = "https://localhost:7251/Cars";

function App() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}`)
            .then(response => response.json())
            .then(result => {
                setCars(result);
            });
    }, []);

    console.log(cars);

  return (
    <div className="App">
        <Header/>
        <main className="main">
            <section className="card users-container">
                <Search/>
                <CarsSection cars={cars} />
            </section>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
