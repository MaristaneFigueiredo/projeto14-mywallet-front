import styled from "styled-components";
import { Container } from "../assets/styles/GlobalStyle";
import {
  BotaoQuadrado,
  TituloPagina,
  Conteudo,
} from "../assets/styles/GlobalStyle";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from "../constants/urls.js";
import axios from "axios";
import getheader from "../constants/headerAPI";
// import header from '../constants/headerAPI.js'

export default function RecordsPage() {
  const [records, setRecords] = useState([]);
  const [usuario, setUsuario] = useState({});
  const [saldo, setSaldo] = useState(0);
  const navigate = useNavigate();

  useEffect(async () => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
      return;
    }
    const header = getheader();

    const { data } = await axios
      .get(`${BASE_URL}/records`, { headers: header })
      .catch((error) => console.error(error.response.data));
    setRecords(data.records);
    setUsuario(data.user);
    setSaldo(data.saldo);
  }, []);

  async function logout() {
    const header = getheader();

    try {
      await axios
        .delete(`${BASE_URL}/logout`, { headers: header }, { user: usuario })
        .then(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("email");
          navigate("/login");
        })
        .catch((erro) => alert(erro.response.data.message));
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Container>
      <Formulario>
        <Topo>
          <TituloPagina>{`Olá, ${usuario.name}`}</TituloPagina>
          <ion-icon
            name="exit-outline"
            size="large"
            onClick={() => logout()}
          ></ion-icon>
        </Topo>
        <Conteudo>
          <TextoContainer exibirTexto={records.length}>
            Não há registros de entrada ou saída
          </TextoContainer>
          <div>
            {records.map((e) => {
              let valor = new Intl.NumberFormat("pt-BR", {
                minimumFractionDigits: 2,
              }).format(e.value);

              return (
                <Record key={e._id}>
                  <CampoData>{e.data}</CampoData>
                  <CampoDescricao>{e.description}</CampoDescricao>
                  <CampoValor
                    corDoTexto={e.typeRecord === "E" ? "#03AC00" : "#C70000"}
                  >
                    {/* {`R$ ${valor}`}</CampoValor> */}
                    {valor}
                  </CampoValor>
                </Record>
              );
            })}
          </div>
          <Saldo>
            <CampoSaldo exibirTexto={records.length}>SALDO</CampoSaldo>
            <CampoValue
              corDoTexto={parseFloat(saldo) >= 0 ? "#03AC00" : "#C70000"}
              exibirTexto={records.length}
            >
              {/* {`R$ ${new Intl.NumberFormat("pt-BR", {
                minimumFractionDigits: 2,
              }).format(saldo)}`} */}
              {`${new Intl.NumberFormat("pt-BR", {
                minimumFractionDigits: 2,
              }).format(saldo)}`}
            </CampoValue>
          </Saldo>
        </Conteudo>
        <Rodape>
          <Link to="/nova-entrada">
            <BotaoQuadrado
              larguraBotao="100%"
              alturaBotao="114px"
              tamanhoTextoLabel="17px"
            >
              <ion-icon name="add-circle-outline" size="large"></ion-icon>
              <h6>Nova entrada</h6>
            </BotaoQuadrado>
          </Link>
          <Link
            to="/nova-saida"
            style={{ textDecoration: "none", width: "100%" }}
          >
            <BotaoQuadrado
              larguraBotao="100%"
              alturaBotao="114px"
              tamanhoTextoLabel="17px"
            >
              <ion-icon name="remove-circle-outline" size="large"></ion-icon>
              <h6>Nova saída</h6>
            </BotaoQuadrado>
          </Link>
        </Rodape>
      </Formulario>
    </Container>
  );
}

const Saldo = styled.div`
  justify-content: space-between;
  bottom: 1;
  display: flex;

  /* align-items: stretch; */
`;

const TextoContainer = styled.div`
  //color: red;

  margin-top: 350px;
  margin-bottom: 200px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #868686;
  display: ${(props) => (props.exibirTexto > 0 ? "none" : "display")};
`;
const CampoSaldo = styled.h6`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;

  display: ${(props) =>
    props.exibirTexto > 0 || props.exibirTexto > 0 ? "display" : "none"};
`;
const CampoValue = styled.h6`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  color: ${(props) => props.corDoTexto};
  display: ${(props) => (props.exibirTexto > 0 ? "display" : "none")};
`;

const Record = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  gap: 10px;
`;
const CampoData = styled.li`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #c6c6c6;
  flex-grow: 0;
`;
const CampoDescricao = styled.li`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  flex-grow: 1;
`;

const CampoValor = styled.li`
  color: ${(props) => props.corDoTexto};
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;

const Topo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  ion-icon {
    color: #fff;
    cursor: pointer;
  }
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
const Rodape = styled.div`
  display: flex;
  /* flex-grow: 1; */

  justify-content: space-between;
  gap: 15px;
  position: relative;
  bottom: 0;

  a {
    width: 100%;
  }
`;
