import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const StyledCard = styled.div`
    box-sizing: border-box;
    background-color: #58617B;
    border-color: black;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    a{
        text-decoration: none;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
     
    h3{
        color: black;
        padding-left: 5rem;
        font-weight: bold;
    }

    h6{
        padding-left: 1rem;
        color: black;
        font-weight: bold;
        line-height: 12px;
    }

    h5{
        text-align: center;
        color: white;
        font-weight: normal;
    }
    
    img{
        padding-bottom: 1rem;
        max-width:220px;
        max-height:220px;
        width: auto;
        height: auto;
    }
`;

const Info = styled.div`
    text-decoration: none;
`;

const Titulo = styled.div`
    text-align: center;
    color: yellow;
    font-weight: bold;
    font-size: 12px;
`;

const Titulo1 = styled.div`
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 15px;
`;

const Card = ({projeto})=>{
    console.log(projeto)
    var ultimo = projeto.medidas.length
    console.log(ultimo)

    const [OnOff, setOnOff] = React.useState(false)
    const [OnOff1, setOnOff1] = React.useState(false)

    const interruptor = ()=>{
        setOnOff(!OnOff)
        console.log(OnOff)
    }

    const interruptor1 = ()=>{
        setOnOff1(!OnOff1)
        console.log(OnOff1)
    }

    return(
        
      <StyledCard>
            <div>
                <Content>
                    {projeto.tipo === 1 &&
                        <div>
                            <Titulo1>{projeto.nome}</Titulo1>
                            <Titulo>Medidor de Energia</Titulo>
                            <Link to={`/medidas/${projeto._id}`}>
                            <img src= {projeto.imagem} alt="Description"/>
                            </Link>
                            <h5>Últimas medidas:</h5>
                            <h6>{projeto.medidas[ultimo-1].data} {projeto.medidas[ultimo-1].hora}</h6>
                            <h6>{projeto.medidas[ultimo-1].netst}</h6>
                            <Info>
                                <h6 style={projeto.medidas[ultimo-1].kwh > 1500 ? {color:"red"}:{color:"white"}}>Kw/h :{projeto.medidas[ultimo-1].kwh}</h6>
                                <h6>Amp :{projeto.medidas[ultimo-1].corrente}</h6>
                                <h6>Voltagem :{projeto.medidas[ultimo-1].voltagem}</h6>
                                <h6>Ft.P. :{projeto.medidas[ultimo-1].fp}</h6>
                            </Info>
                        </div>
                    }
                    {projeto.tipo === 2 &&
                    <div>
                        <Titulo1>{projeto.nome}</Titulo1>
                        <Titulo>Interruptor</Titulo>
                        <Link to={`/medidas/${projeto._id}`}>
                            <img src= {projeto.imagem} alt="Description"/>
                        </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="button" class="btn btn-primary btn-sm" onClick={interruptor}>On/Off</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="button" class="btn btn-primary btn-sm" onClick={interruptor1}>On/Off</button>
                        <h5>Status Atual:</h5>
                        <Info>
                            <h3>ON</h3>
                            <h3>OFF</h3>
                            {/* <h6 style={projeto.medidas[ultimo-1].estado === 1 ? {color:"red"}:{color:"white"}}>estado :{projeto.medidas[ultimo-1].estado}</h6> */}
                        </Info>

                    </div>                    
                    }
                    {projeto.tipo === 3 &&
                        <div>
                        <Titulo1>{projeto.nome}</Titulo1>
                        <Titulo>Tomada</Titulo>
                        <Link to={`/medidas/${projeto._id}`}>
                            <img src= {projeto.imagem} alt="Description"/>
                        </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="button" class="btn btn-primary btn-sm" onClick={interruptor}>On/Off</button>
                        <h5>Status Atual:</h5>
                        <h3>ON</h3>
                        <h3>OFF</h3>
                    </div>                                           
                    }
                </Content>
            </div>
        </StyledCard>
    )
}
export default Card 

