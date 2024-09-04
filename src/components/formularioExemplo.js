import React from 'react';
import BotaoExemplo from './App';  // Importe o componente BotaoExemplo
import InputExemplo from './App';  // Importe o componente InputExemplo

// Componente de Formulário com Título Personalizável
function formularioExemplo({ titulo }) {
  return (
    <div className="formulario">
      <h1>{titulo}</h1> {/* Renderiza o título passado como prop */}

      {/* Renderiza os exemplos de botões e inputs */}
      <BotaoExemplo />
      <InputExemplo />
    </div>
  );
}

export default formularioExemplo;