import React from 'react'
import Userfront from '@userfront/react'
import { LogoutButton } from './autentica/Autenticacao';
import Styled from 'styled-components'
import {NavLink} from 'react-router-dom'


Userfront.init("qbjqg94n")

const StyledNav = Styled.nav`
    background: #58617B;
    color: white;
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    position: sticky;
    top: 0;
    z-index: 10;
    ul{
        display: flex;
        list-style: none;
    }
    li{
        padding-left: 2rem;
    }
    a{
        color: white;
        text-decoration: none;
        &:hover{
            background-color: black;
            color: white;
        }
    }
    h5{
        color: yellow;
    }
    .active{
        background-color: #000;
        color: #FFF;
    }
`;

const Menu = ()=>{
    return(
        <StyledNav>
            <h1>CAQP</h1>
            <ul>
                <li><NavLink to='/'>Bemvindo</NavLink></li>
                <li><NavLink to='/Cursos'>Cursos</NavLink></li>
                <li><NavLink to='/Mensagens'>Mensagens</NavLink></li>
                {!Userfront.accessToken() && (
                        <>
                            <li><NavLink to='/login'>Login</NavLink></li>
                            <li><NavLink to='/cadastro'>Cadastro</NavLink></li>
                        </>
                )}
                {Userfront.accessToken() && (
                        <>
                            <li><NavLink to='/Medidas'>Medidas</NavLink></li>
                            <li><NavLink to='/Admin'>Administração</NavLink></li>
                            <li><NavLink to='/logout'><LogoutButton/></NavLink></li>
                        </>
                )}
                
            </ul>
        </StyledNav>
    )
}
export default Menu

