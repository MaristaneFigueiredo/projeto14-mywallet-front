import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { screenColor, btnColor, labelColor } from "../../constants/colors";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&family=Playball&family=Saira+Stencil+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&family=Playball&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Saira+Stencil+One&display=swap');
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

* {
	box-sizing: border-box;
  
	
  }

  body {
	
	/* font-family: 'Playball', serif; */
	font-family: 'Lexend Deca', sans-serif;
  }

  a {
    text-decoration: none;
  }
 
  
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 25px 25px 16px 25px;
  background-color: ${screenColor};
`;
const Input = styled.input`
  height: 58px;
  border-radius: 5px;
  padding-left: 15px;
  outline: none;
  border: 0;
  font-size: 20px;
  font-family: "Raleway";
  font-weight: 400;
`;

const Botao = styled.button`
  border: 0;
  border-radius: 5px;
  background-color: ${btnColor};
  color: ${labelColor};
  width: ${(props) => props.larguraBotao};
  height: ${(props) => props.alturaBotao};
  font-family: "Raleway";
  font-weight: 700;
  font-size: ${(props) => props.tamanhoTextoLabel};
  cursor: pointer;
`;

const BotaoQuadrado = styled.button`
  border: 0;
  border-radius: 5px;
  background-color: ${btnColor};
  color: ${labelColor};
  width: ${(props) => props.larguraBotao};
  height: ${(props) => props.alturaBotao};
  font-family: "Raleway";
  font-weight: 700;
  font-size: ${(props) => props.tamanhoTextoLabel};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;

  h6 {
    width: 64px;
    text-align: left;
  }

  ion-icon {
    color: #fff;
  }
`;

const TextoSecundario = styled.h6`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  color: ${labelColor};
`;

const TituloPagina = styled.h1`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  color: ${labelColor};
`;
const Conteudo = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  height: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export {
  GlobalStyle,
  Container,
  Input,
  Botao,
  BotaoQuadrado,
  TextoSecundario,
  TituloPagina,
  Conteudo,
};
