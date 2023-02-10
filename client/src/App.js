import './styles.css';
import {useEffect, useState} from "react";
import * as CarService from './services/CarService';

import {Header} from "./components/common/Header";
import {Footer} from "./components/common/Footer";
import {Search} from "./components/search/Search";
import {CarsSection} from "./components/carsSection/CarsSection";

function App() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        CarService.getAll().then(result => setCars(result));
    }, []);

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
