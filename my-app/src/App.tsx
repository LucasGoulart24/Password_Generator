import { useState } from 'react';
import './App.css';

function App() {
  const[gerarSenha, setGerarSenha] = useState('');
  const[usarNumero, setUsarNumero] = useState(false);
  const[usarLetras, setUsarLetras] = useState(false);
  const[usarSimbolo, setUsarSimbolo] = useState(false);

  // Função para gerar senha
  const criarSenha = () => {
    const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+{}[]|:;<>,.?/~`';

    let caracteres = '';
    if(usarNumero) caracteres += numeros;
    if(usarLetras) caracteres += letras;
    if(usarSimbolo) caracteres += simbolos;

    if(caracteres === '') {
      alert('Selecione uma opção!');
      return;
    }

    const tamanhoSenha = 12;
    let senha = '';
    for(let i = 0; i < tamanhoSenha; i++) {
      const index = Math.floor(Math.random() * caracteres.length);
      senha += caracteres[index];
    }
    setGerarSenha(senha);
  }
  return (
    <div>
      <div className='Principal'>
        <h1>Password Generator</h1>
        <div className='Card'>
          <div className='Barra'>
            <p>{gerarSenha || 'Password'}</p>
          </div>
          <div style={{marginTop: 10, marginBottom: 10, color: '#FFF'}}>
            <label>
              <input 
                type="checkbox" 
                checked={usarNumero} 
                onChange={()=> setUsarNumero(!usarNumero)}
              />Números
            </label>
          </div>
           <div style={{marginTop: 10, marginBottom: 10, color: '#FFF'}}>
            <label>
              <input 
                type="checkbox"
                checked={usarLetras}
                onChange={()=> setUsarLetras(!usarLetras)}
              />Letras Maiusculas e Minusculos
            </label>
          </div>
           <div style={{marginTop: 10, marginBottom: 10, color: '#FFF'}}>
            <label>
              <input 
                type="checkbox"
                checked={usarSimbolo}
                onChange={()=> setUsarSimbolo(!usarSimbolo)}
              />Simbolos
            </label>
          </div>
          <button onClick={criarSenha}>Gerar senha</button>
        </div>
      </div>
    </div>
  );
}

export default App;
