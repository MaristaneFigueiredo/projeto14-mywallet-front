import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { Container } from "../assets/styles/GlobalStyle";
import { Input, TituloPagina, Botao } from "../assets/styles/GlobalStyle";
import { BASE_URL } from "../constants/urls";
import header from "../constants/headerAPI";
import React from "react";
import { useNavigate } from "react-router-dom";
import getheader from "../constants/headerAPI";

export default function EntryExitPage({ ehEntrada }) {
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  async function salvarEntrada() {
    const body = {
      value: parseFloat(value),
      description,
    };
    const url = ehEntrada
      ? `${BASE_URL}/records-entry`
      : `${BASE_URL}/records-exit`;
    const header = getheader();
    try {
      await axios
        .post(url, body, { headers: header })
        .then(() => {
          alert("Salvo com sucesso");
          navigate("/home");
        })
        .catch((erro) => alert(erro.response.data.message));
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <Container>
      <Formulario
        onSubmit={(e) => {
          e.preventDefault();
          salvarEntrada();
        }}
      >
        <Topo>
          <TituloPagina>
            {ehEntrada ? "Nova entrada" : "Nova saída"}
          </TituloPagina>
        </Topo>
        <Input
          required
          placeholder="Valor"
          onChange={(e) => setValue(e.target.value)}
        />
        <Input
          required
          placeholder="Descricao"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Botao
          type="submit"
          tamanhoTextoLabel="20px"
          larguraBotao="100%"
          alturaBotao="46px"
        >
          {ehEntrada ? "Salvar entrada" : "Salvar saída"}
        </Botao>
      </Formulario>
    </Container>
  );
}

const Topo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Formulario = styled.form`
  display: flex;
  height: 100%;
  flex-wrap: nowrap;
  flex-direction: column;
  width: "100%";
  gap: 13px;
  flex-grow: 1;
`;
