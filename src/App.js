import React, { useState } from 'react';
import Botao from './components/botao';
import Input from './components/input';
import RegistrationForm from './components/registrationForm';

// Componente para os Botões
export function BotaoExemplo() {
  return (
    <div>
      <h2>Exemplo de Botões Reutilizáveis</h2>
      <Botao texto="Salvar" cor="green" />
      <Botao texto="Cancelar" cor="red" />
      <Botao texto="Enviar" cor="blue" />
    </div>
  );
}

// Componente para os Inputs
export function InputExemplo() {
  return (
    <div>
      <h2>Exemplo de Inputs Reutilizáveis</h2>
      <Input placeholder="Digite seu nome" largura="200px" />
      <Input placeholder="Digite seu e-mail" largura="300px" />
      <Input placeholder="Digite sua senha" largura="250px" tipo="password" />
    </div>
  );
}

// Componente principal do App com controle de exibição
function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Função para voltar aos componentes
  const handleVoltar = () => {
    setMostrarFormulario(false);
  };

  return (
    <div className="App">
      <h1>Exemplo de Componentes Reutilizáveis</h1>
      <button onClick={() => setMostrarFormulario(false)}>Mostrar Componentes</button>
      <button onClick={() => setMostrarFormulario(true)}>Mostrar Formulário</button>

      {mostrarFormulario ? (
        <RegistrationForm onVoltar={handleVoltar} titulo="Cadastro de Usuário" />
      ) : (
        <>
          <BotaoExemplo />
          <InputExemplo />
        </>
      )}
    </div>
  );
}

export default App;
