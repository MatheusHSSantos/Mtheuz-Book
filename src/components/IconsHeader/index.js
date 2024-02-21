import React from 'react'
import styled from 'styled-components';
import profile from '../../img/perfil.svg';
import bag from '../../img/sacola.svg';

const Icons = styled.ul`
  display: flex;
  align-items: center;
`

const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
`

const icons = [profile, bag]

export default function IconsHeader() {
  return (
    <Icons>
          { icons.map( (icon) => (
            <Icon><img src={icon} alt='icones'></img></Icon>
          ) ) }
        </Icons>
  )
}
