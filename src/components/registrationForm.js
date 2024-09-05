import React from 'react';
import Input from './input';  // Verifique o caminho e o case
import Botao from './botao';  // Verifique o caminho e o case
import '../styles/stylesForm.css'; // Verifique o caminho para o CSS

function RegistrationForm({ onVoltar }) {
  return (
    <div className="form-container">
      <Header title="Formulário de Registro" subtitle="Preencha o formulário com atenção para se registrar" />
      
      <FormSection label="Nome do Aluno">
        <div className="inline-inputs">
          <Input placeholder="Primeiro Nome" largura="48%" />
          <Input placeholder="Último Nome" largura="48%" />
        </div>
      </FormSection>

      <FormSection label="Gênero">
        <Select options={["Masculino", "Feminino"]} placeholder="Selecione" />
      </FormSection>

      <FormSection label="E-mail do Aluno">
        <Input placeholder="ex: meuemail@exemplo.com" largura="100%" tipo="email" />
      </FormSection>

      <FormSection label="ID do Aluno">
        <Input placeholder="ID" largura="100%" />
      </FormSection>

      <FormSection label="Lista de Disciplinas">
        <Select options={["Matemática", "Ciências", "História"]} placeholder="Selecione" />
      </FormSection>

      <div className="submit-button">
        <Botao texto="Enviar" cor="green" />
        <Botao texto="Voltar" cor="red" onClick={onVoltar} />
      </div>
    </div>
  );
}

const Header = ({ title, subtitle }) => (
  <header className="form-header">
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </header>
);

const FormSection = ({ label, children }) => (
  <div className="form-group">
    <label>{label}</label>
    {children}
  </div>
);

const Select = ({ options, placeholder }) => (
  <select className="select">
    <option value="">{placeholder}</option>
    {options.map((option, index) => (
      <option key={index} value={option.toLowerCase()}>{option}</option>
    ))}
  </select>
);

export default RegistrationForm;