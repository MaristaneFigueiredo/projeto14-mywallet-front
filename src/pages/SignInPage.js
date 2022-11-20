import styled from "styled-components";
import { Container } from "../assets/styles/GlobalStyle";
import { labelColor } from "../constants/colors";
import { Input, Botao, TextoSecundario } from "../assets/styles/GlobalStyle";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { Context } from "../contexts/context";
import React from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, setEmailLogado } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  }, []);

  async function login(e) {
    e.preventDefault();
    const body = { email, password };

    try {
      await axios
        .post(`${BASE_URL}/sign-in`, body)
        .then(async (resposta) => {
          const { data } = resposta;
          setToken(data);
          setEmailLogado(email);
          localStorage.setItem("token", data);
          localStorage.setItem("email", email);
          navigate("/home");
        })
        .catch((erro) => {
          if (erro.response.data.message === "Usuário já logado!")
            navigate("/home");
          else alert(erro.response.data.message);
        });
    } catch (erro) {
      alert(erro);
    }
  }

  return (
    <Container>
      <Formulario onSubmit={(e) => login(e)}>
        <Titulo>My Wallet</Titulo>
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
        <Botao
          type="submit"
          tamanhoTextoLabel="20px"
          larguraBotao="100%"
          alturaBotao="46px"
        >
          Entrar
        </Botao>
        <Rodape>
          <Link to="/cadastro">
            <TextoSecundario>Primeira vez? Cadastre-se!</TextoSecundario>
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
