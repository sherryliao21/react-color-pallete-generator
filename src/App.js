import { useState } from 'react';
import './App.css';
import ColorPallete from './components/ColorPallete';
import GenerateBtn from './components/GenerateBtn';
import Description from './components/Description';
import Footer from './components/Footer';
import Header from './components/Header';
import axios from 'axios'

function App() {
  const [pallete, setPallete] = useState('rgb(0, 0, 0)')

  const onClick = async() => {
    const url = 'http://colormind.io/api/'
    const data = {
      model : "default",
    }
    const headers = {
      'Content-Type': 'text/plain'
    };
    const colorPallete = await axios.post(url, data, { headers }).then(res => res.data.result) // array of 5
    console.log(colorPallete)
    setPallete(colorPallete)
  }
  return (
    <div className="App" class="app">
      <Header />
      <ColorPallete pallete={ pallete }/>
      <GenerateBtn onClick={ onClick }/>
      <Description />
      <Footer />
    </div>
  );
}

export default App;
