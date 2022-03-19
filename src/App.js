import './app.css';
import ColorResult from "./ColorResult.tsx";
import InputField from "./InputField.tsx";
import {useState} from "react";

function App() {
  const [colorName, setColorName] = useState('blue');

  return (
    <div className="app">
      <section className="picker">
        <InputField colorName={colorName} setColorName={setColorName} />
      </section>

      <section className="result">
        <ColorResult colorName={colorName} />
      </section>
    </div>
  );
}

export default App;
