import './App.css';
import ColorPallete from './components/ColorPallete';
import GenerateBtn from './components/GenerateBtn';
import Description from './components/Description';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <ColorPallete />
      <GenerateBtn />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
