import React from 'react';

// Componente de Input Reutilizável
const Input = ({ placeholder, largura, tipo = 'text' }) => {
  const estilo = {
    width: largura,     // Define a largura do input
    padding: '10px',    // Define o espaçamento interno
    margin: '5px 0',    // Define a margem superior e inferior
    border: '1px solid #ccc', // Define uma borda simples
    borderRadius: '4px' // Define bordas arredondadas
  };

  return (
    <input 
      type={tipo} 
      placeholder={placeholder} 
      style={estilo} 
    />
  );
};

export default Input;''