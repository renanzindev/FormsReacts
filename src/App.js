import React from 'react';
import Botao from './components/botao';
import Input from './components/input';

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

// Exportação padrão se precisar de um componente principal
function App() {
  return (
    <div className="App">
      <h1>Exemplo de Componentes Reutilizáveis</h1>
      <BotaoExemplo />
      <InputExemplo />
    </div>
  );
}

// Componente principal com o Formulário Exemplo
function Forms() {
  return (
    <div className="Forms">
      
      {/* Uso do novo componente de formulário com título customizável */}
      <formularioExemplo titulo="Cadastro de Usuário" />
      <formularioExemplo titulo="Formulário de Contato" />
    </div>
  );
}
export default App;
