import React from 'react'
import { FooterContainer, LogosContainer } from './FooterStyles'
import { GiPlasticDuck } from 'react-icons/gi' 


const Footer = () => {
    return (
      <FooterContainer>
          <p>© 2024 Random Cuack - Made by Rebeca Fabbricatore</p>
  
          <LogosContainer>
            <GiPlasticDuck />
            <GiPlasticDuck />
            <GiPlasticDuck />
          </LogosContainer>
      </FooterContainer>
    )
  }
  
  export default Footer