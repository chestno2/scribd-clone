
import './App.css';
import Afterheader from './Components/Afterheader';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Nav from './Components/Nav';


function App() {
  return (
    <div className="App">
       <Nav />
       <Header />
       <Afterheader />
       <Cards />
       <Footer />
     
    </div>
  );
}

export default App;
