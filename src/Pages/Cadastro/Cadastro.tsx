import React, { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    idade: "",
    sexo: "Masculino",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://honey-backend.vercel.app/api/auth/register",
        formData
      );
      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro no cadastro, tente novamente!");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Honey</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="idade">Idade</label>
          <input
            type="number"
            name="idade"
            id="idade"
            value={formData.idade}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="sexo">Sexo</label>
          <select
            name="sexo"
            id="sexo"
            value={formData.sexo}
            onChange={handleChange}
          >
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterPage;
