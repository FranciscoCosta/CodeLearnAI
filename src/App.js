
import './App.css';
import Footer from './components/Footer/Footer';
import Hero  from './components/Hero/Hero';
import Tutorial from './components/Tutorial/Tutorial';
import UseAi from './components/UseAi/UseAi';


function App() {
  return (
    <div className="App">
      <Hero/>
      <Tutorial/>
      <UseAi/>
      <Footer/>
    </div>
  );
}

export default App;
