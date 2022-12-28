import './App.css'; // Import the styles for the app
import logo from './imagenes/logo.png' // Import the logo image
import Boton from './componentes/Boton'// Import the Button component
import Pantalla from './componentes/Pantalla'; // Import the Screen component
import BotonClear from './componentes/BotonClear'; // Import the Clear Button component
import { useState} from 'react'; // Import the useState hook from react
import { evaluate } from 'mathjs'  // Import the evaluate function from mathjs


function App() {
  // Declare the input state variable and the setInput function using the useState hook
  const [input, setInput] = useState('');
  // Define a function that adds a value to the input state variable
  const agregarInput = val =>{
    setInput(input + val);
  };
  // Define a function that calculates the result of the input expression
  const calcularResultado = () => {
    // Check if there is an input value
    if (input) {
      // Use the evaluate function from mathjs to calculate the result of the input expression
      setInput(evaluate(input));
    } else {
      // If there is no input value, show an alert
      alert("Agrege algun valor");
    }  
  };


  // Render the JSX for the app
  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img
        src={logo}
        className='logo'
        alt='logo de Jpex' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}> 9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
