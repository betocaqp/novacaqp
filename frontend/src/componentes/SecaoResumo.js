import React from 'react'
import styled from "styled-components";

const SecaoResumo = ()=>{
    return(
        <Inicio>
            <Descricao>
                <h1>Carlos A Q Pereira</h1>
                <h2>Técnico em Eletrônica</h2>
                <p>
                    Olá!!<br/>
                    Sou técnico em eletrônica desde 1978. Dentro deste período atuei em diversos segmento do setor, desde o industrial, atuando nos processos de 
                    manutenção, projeto para automação, reengenharia baseada em enegenharia reversa. Passei também por empresas que atuaram no segmento de processamento de dados<br/>
                    e pós processamento, fabricando e comercializando equipamentos para confecção de talões de cheques, envelopadoras, auto-envelopadores dentre outros. Atuei também<br/>
                    por algum tempo na indústria química na área de manutenção em equipamentos para instrumentação.<br/> 
                    Hoje me dedico a repassar o que me foi dado como aprendizado para os jovens determinados a mergulhar no segmento de tecnologia, temperado pelos
                    dispositivos eletrônicos.<br/>
                    É importante observa que a eletrônica nos dias atuais, depende e muito do software o que faz com que o candidato ao estudo e a atuação nas atividades 
                    estejam dispostos a adquirir um conjunto de conhecimentos que vão desde a habilidade em usar feramentas aé ao desenvolvimento de softwares, geralmente
                     em linguagem de baixo nível.<br/>
                    Aqui você poderá encontrar redirecionamento para treinamentos que estão disponíveis em algumas plataformas especializadas. Todos eles mergulham na 
                    eletrônica com seus circuitos e no software necessário para controlar e fazer funcionar estes mesmos circuitos.<br/>
                    No menu Cursos você poderá encontrar uma lista de links que levarão as páginas de matrícula para cada um deles.<br/>
                    O curso <b><font color='yellow'>ESP32, ESP8266, Backend, Frontend, juntando tudo.</font></b> descreve passo a passo a construção deste site e você pode usar este espaço para avaliar se
                    vale a sua matrícula.<br/> 
                    Para tanto, use o menu cadastrar e crie um usuário com email e senha. Depois faça o seu logim e na aba administração, crie um device.<br/> 
                    Até este momento, 27/02/2024, o trabalho contempla aprenas medidores de energia. Mais a frrente vou implementar outros atuadores e sensores.<br/>
                    Uma vez que tenha criado o seu device, poderá enviar as leituras do possível medidor utilizando o Postman, desde que tenhas os códigos necessários<br/>
                    rodando em seu PC. Isso evita que o aluno precise ter em mãos o medidor de energia para as primeiras experiências<br/>
                    encontrar no seguinte endereço: <b><font color='yellow'>localhost:3000/api/devices/"id do device cadastrado".</font></b><br/>
                    Existem alguns tutoriais com custo zero o que não significa que o conteúdo seja superficial. Experimente um deles e comprove.<br/>
                    O trabalho está em constante evolução e atualizações para os treinamentos são constantes assim como a inclusão de novos treinamentos.<br/>
                    Espero que o conteúdo seja útil e possa contribuir com a evolução de todos aqueles que desejam se aventurar por estas florestas.<br/>
                    <br/>
                    Bons estudos!!
                </p>
                {/* <button>Faça Contato</button> */}
            </Descricao>
        </Inicio>
    )
}

const Inicio = styled.div`  // Inicio vai substituir a div principal de BenvindoSection
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 10rem;
    color: white;
`;
const Descricao = styled.div`  // Aqui iremos colocar em BenvindoSection, uma div para a descrição e o botão
    flex: 1;
    padding-right: 5rem;
    z-index: 5;

    h1{
        font-weight: bold;
        color: yellow;
    }
    p{
        font-size: 18px;
        color: white;
    }
`;

export default SecaoResumo