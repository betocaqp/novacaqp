import React from 'react'
import styled from 'styled-components'
import {Container, Table} from "react-bootstrap"

const Escolhas = styled.div`
    padding-left: 3rem;
    padding-top: 3rem;
    a{
        color: white;
        text-decoration: none;
        padding-top: 0rem;
        font-size: 33px;

    }
    h6{
        color: yellow;
        text-align: justify;
    }
    h5{
        color: white;
        text-align: center;
    }
`;

const Foto = styled.img`
    height: 83px;
`;

const Cursos = () => {
  return (
    <Escolhas>
        <Container>
            <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>Imagem</th>
                        <th>Curso</th>
                        <th>Descrição</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Foto src='ESP32.png' thumbnail></Foto></td>
                        <td><h6>ESP32, ESP8266, Backend, Frontend. Juntando tudo</h6></td>
                        <td><h6>Este curso descreve a construção de um dashboard 
                                que pode receber dados de devices IOT. Descreve 
                                todos os códigos necessários para que os devices
                                funcionem</h6></td>
                        <td><a href="https://www.udemy.com/course/esp32-esp8266-backend-frontend-juntando-tudo/?referralCode=C8A1F8E1D341F8FFCC6A" target="_blank" rel="noopener noreferrer"><h5>ESP32,ESP8266,Backend,Frontend.</h5></a></td>
                    </tr>
                    <tr>
                        <td><Foto src='PIC18.png' thumbnail></Foto></td>
                        <td><h6>Programação PIC18 com MPLABX e Compilador XC8</h6></td>
                        <td><h6>Este curso descreve todos os periféricos intrnos
                                do PIC18F4520. Muitos exemplos práticos são 
                                desenvolvidos em bancada de forma a comprovar o
                                funcionamento.</h6></td>
                        <td><a href="https://www.udemy.com/course/programacao-pic18-com-mplabx-e-compilador-xc8/?referralCode=0304AD2BA1A3483D7C76" target="_blank" rel="noopener noreferrer"><h5>Programação PIC18 com MPLABX</h5></a></td>
                    </tr>
                    <tr>
                        <td><Foto src='ACServo.png' thumbnail></Foto></td>
                        <td><h6>AC Servo Motor + Driver - MUDS083A1A</h6></td>
                        <td><h6>Este curso descreve como preparar um 
                            Ac Servo e seu driver ara funcionar intrfaceando um 
                            microcontrolador. São exibidas diversas práticas em 
                            bancada.</h6></td>
                        <td><a href="https://www.udemy.com/course/ac-servo-motor-amplificador-panasonic-muds/?referralCode=CCB33378C8BE65B7634A" target="_blank" rel="noopener noreferrer"><h5>AC Servo Motor + Driver</h5></a></td>
                    </tr>
                    <tr>
                        <td><Foto src='CompBordoCarrosAntigos.png' thumbnail></Foto></td>
                        <td><h6>Computador de bordo para carros.</h6></td>
                        <td><h6>Este curso irá mostrar como construir 
                            um simples computador de bordo para carros 
                            antigos. O device pode medir velocidade, 
                            temperatura, RPM e pode contemplar um player MP3.</h6></td>
                        <td><a href="https://www.udemy.com/course/computador-de-bordo-para-carros-antigos/?referralCode=B645947140A30E0C0F4E" target="_blank" rel="noopener noreferrer"><h5>Computador de bordo para carros antigos (Grátis)</h5></a></td>
                    </tr>
                    <tr>
                        <td><Foto src='CompBordoCarrosAntigosComple.png' thumbnail></Foto></td>
                        <td><h6>Computador de bordo para carros P2.</h6></td>
                        <td><h6>Este curso é uma continuação do item 
                            anterior e completa o assunto para o computador
                            de bordo urilizando o display PIC32 da Mikro Electronica. </h6></td>
                        <td><a href="https://www.udemy.com/course/computador-de-bordo-para-carros-antigos-complemento/?referralCode=59758316A04CECF9D25A" target="_blank" rel="noopener noreferrer"><h5>Computador de bordo para carros antigos P2 (Grátis)</h5></a></td>
                    </tr>
                    <tr>
                        <td><Foto src='CompBordoNextion.png' thumbnail></Foto></td>
                        <td><h6>Computador de bordo para carros antigos utilizando o display da Nextion.</h6></td>
                        <td><h6>Este curso segue a mesma lógica e sequência
                            mostrada nos anteriores, mas, aqui utilizamos 
                            o display da Nextion em substituição ao display
                            PIC32 da Mikro Electronica. </h6></td>
                        <td><a href="https://www.udemy.com/course/computador-de-bordo-para-carros-com-display-nextion/?referralCode=558641B99B066963ADF4" target="_blank" rel="noopener noreferrer"><h5>Computador de bordo utilizando o display Nextion (Grátis)</h5></a></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    </Escolhas>
    )
}

export default Cursos