import './App.css';
import Header from './Header';
import Footer from './Footer';
import Animal from './Animal';


const App = () => {
  return (
    <div>
    <Header />

    <Animal name="Panda" className="panda" images=""/>
    
    <Animal name="Tiger" className="tiger" images=""/>

    <Footer />
    </div>
    

  );
}

export default App;