import { useState, useEffect } from 'react';
import ColorPallete from './components/ColorPallete';
import GenerateBtn from './components/GenerateBtn';
import Description from './components/Description';
import Footer from './components/Footer';
import Header from './components/Header';
import axios from 'axios'

function App() {
  // default colors
  const [pallete, setPallete] = useState([
    [54, 38, 39],
    [191, 78, 75],
    [245, 166, 159],
    [223, 184, 147],
    [96, 89, 85]
  ])
  // generate color
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

  useEffect(() => {
    const handleSpacebar = (event) => {
       if (event.keyCode === 32) {
        onClick()
      }
    }
    window.addEventListener('keypress', handleSpacebar)

    // return () => {
    //   window.removeEventListener('keydown', handleSpacebar)
    // }
  }, [])

  return (
    <div className="App" class="app">
      <Header />
      <ColorPallete pallete={ pallete }/>
      <GenerateBtn onClick={onClick}/>
      <Description />
      <Footer />
    </div>
  );
}

export default App;
