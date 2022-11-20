import styled from "styled-components";
import { Container } from "../assets/styles/GlobalStyle";
import { labelColor } from "../constants/colors";
import { Input, Botao, TextoSecundario } from "../assets/styles/GlobalStyle";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import React from "react";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmacao, setPasswordConfirmacao] = useState("");
  const navigate = useNavigate();

  function validarFormulario() {
    if (password !== passwordConfirmacao) {
      alert("A senha não está igual a confirmação da senha");
      return false;
    }

    return true;
  }

  async function cadastrar() {
    if (!validarFormulario()) {
      return;
    }
    const body = {
      name,
      email,
      password,
    };

    try {
      await axios
        .post(`${BASE_URL}/sign-up`, body)
        .then(() => {
          alert("Cadastro realizado com sucesso");
          navigate("/login");
        })
        .catch((erro) => alert(erro.response.data.message));
    } catch (erro) {
      alert(erro);
    }
  }

  return (
    <Container>
      <Formulario
        onSubmit={(e) => {
          e.preventDefault();
          cadastrar();
        }}
      >
        <Titulo>My Wallet</Titulo>
        <Input
          required
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          required
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          required
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          required
          placeholder="Confirme a senha"
          type="password"
          onChange={(e) => setPasswordConfirmacao(e.target.value)}
        />
        <Botao
          type="submit"
          tamanhoTextoLabel="20px"
          larguraBotao="100%"
          alturaBotao="46px"
        >
          Cadastrar
        </Botao>
        <Rodape>
          <Link to="/login">
            <TextoSecundario>Já tem uma conta? Entre agora!</TextoSecundario>
          </Link>
        </Rodape>
      </Formulario>
    </Container>
  );
}

const Formulario = styled.form`
  display: flex;
  height: 100%;
  flex-wrap: nowrap;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: "100%";
  gap: 13px;
  flex-grow: 1;
`;

const Titulo = styled.a`
  font-family: "Saira Stencil One", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  color: ${labelColor};
  width: "100%";
`;
const Rodape = styled.div`
  margin-top: 36px;
`;
