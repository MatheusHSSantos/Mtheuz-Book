import React from 'react'
import { books } from './lastReleasesData'
import { Title } from '../Title'
import styled from 'styled-components'
import imageBook from "../../img/livro2.png"
import RecommenCard from '../RecommenCard'

const LastReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

export default function LastReleases() {
  return (
    <LastReleasesContainer>
      <Title 
        titleColor="##EB9B00" 
        fontSize="36px" 
        >
          Últimos Lançamentos
        </Title>
      <NewBooksContainer>
        {books.map(book => (
          <img src={book.src} alt='livro' />
        ))}
      </NewBooksContainer>
      <RecommenCard 
        title="Talvez você se interesse por..."
        subtitle="Estoicismo Mil Grau"
        description="Estoicismo é Toppen"
        img={imageBook}
      />
    </LastReleasesContainer>
  )
}
