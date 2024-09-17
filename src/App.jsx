import './App.css';
import { useState } from 'react';
import JSConfetti from 'js-confetti';

function App() {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [bienvenido, setBienvenido] = useState(false)
  const [error, setError] = useState("");   

  const actualizarNombre = (e) => {
    setNombre(e.target.value);
  };

  const correctPassword = "123456";
  const jsConfetti = new JSConfetti();

  const checkPassword = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setError("");
      setBienvenido(true);
      jsConfetti.addConfetti({
        emojis: '⚛️',
        emojiSize: 50
      });
    } else {
      setError("Contraseña incorrecta");
      setBienvenido(false);
    }
  };

  return (
    
    <div className='content'>

      <h1 className='title'>Hola {nombre}</h1>
      <form  className= 'formulario' onSubmit={(e) => checkPassword(e)}>
        
        {/* Usuario */}
        <div className='centered'>
          <label htmlFor="usuario">Usuario:</label>
          <input
            id='usuario'
            type="text"
            required={true}
            onChange={(e) => actualizarNombre(e)}
          />
        </div>
        {/* Contraseña */}
        <div className='centered'>
          <label htmlFor="pass">Contraseña:</label>
          <input
            id='pass'
            type="password"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className='btn'>Entrar</button>

      </form>
      {bienvenido && (
        <div style={{ marginTop: '20px' }}>
          <h1>Bienvenide {nombre}!</h1>
        </div>
      )}
    </div>
  );
}

export default App;

