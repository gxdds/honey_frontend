import React, { useState } from "react";
import { Container, Form, SubContainerSign } from "./styles";

// Função para validar o email com regex
const isEmailValid = (email: string) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
};

const Cadastro: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    // Simula uma requisição ao servidor
    setTimeout(() => {
      alert(`Login realizado com sucesso! Email: ${form.email}`);
      setLoading(false);
    }, 1000);
  };

  const isFormValid = () => {
    return form.email.trim() !== "" && form.password.trim() !== "" && isEmailValid(form.email);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Faça o Login 👋</h1>
        <input
          name="email"
          placeholder="Digite o seu e-mail"
          onChange={handleChange}
          type="email"
          aria-label="Email"
        />
        <input
          name="password"
          placeholder="Digite a sua senha"
          onChange={handleChange}
          type="password"
          aria-label="Senha"
        />
        <button type="submit" disabled={loading || !isFormValid()}>
          {loading ? "Carregando..." : "Entrar"}
        </button>
        <SubContainerSign>
          <p>Não possui conta?</p>
          <a href="/cadastro">Cadastre-se</a>
        </SubContainerSign>
      </Form>
    </Container>
  );
};

export default Cadastro;
