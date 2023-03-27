import styled from "styled-components"

export const NavBar= styled.nav`
display: flex;
box-shadow: rgba(0,0,0, .15) 0px -2px 10px 0px;
justify-content: space-between;
align-items: center;
padding: .5em 2em;

.brand{
    font-size: 1.2em;
}

.brand span{
    font-weight: 900;
    text-transform: uppercase;

}

 ul{
    display: flex;
    list-style: none;

    .active{
    background-color:black;
    color: white;
 }
 }
 .links-list{
    margin-right: 1em; //afastar link do outro
 }

 a{
padding: .4em .6em; //cima baixo= 4 e laterais 6
 }

`

