import './styles.css';

import {Header} from "./components/common/Header";
import {Footer} from "./components/common/Footer";
import {Search} from "./components/search/Search";
import {CarsSection} from "./components/carsSection/CarsSection";

function App() {
  return (
    <div className="App">
        <Header/>
        <main className="main">
            <section className="card cars-container">
                <Search/>
                <CarsSection/>
            </section>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
