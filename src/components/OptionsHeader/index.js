import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Option = styled.li`
   font-size: 16px;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   height: 100%;
   padding: 0 5px;
   cursor: pointer;
   min-width: 120px;
`

const Options = styled.ul`
   display: flex;
`


const textOptions = ['CATEGORIES', 'FAVORITES', 'SHELF']

export default function OptionsHeader() {
  return (
    <Options className='options'>
    { textOptions.map( (text) => (
     <Link to={`/${text.toLowerCase()}`}><Option className='option'><p>{text}</p></Option></Link>
    ) ) }
   </Options>
  )
}
