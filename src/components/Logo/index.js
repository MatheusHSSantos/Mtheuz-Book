import React from 'react'
import styled from 'styled-components'
import logo from '../../img/logo.svg'

const LogoContainer = styled.div`
   display: flex;
   font-size: 30px;
`

const LogoImage = styled.img`
   margin-right: 10px;
`

export default function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt='logo, triângulo laranja' className='logo-img'></LogoImage>
            <p><strong>Mtheuz</strong>Books</p>
        </LogoContainer>
    )
}
