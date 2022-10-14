import type { NextPage } from 'next'
import React from 'react'
import styled from '@emotion/styled'

const Estilo = styled.div `
text-align: center;
width: 100%;
height: 100vh;
color: #fff;
`;

const Home: NextPage = () => {
  return (
    <Estilo>
      <h1>Executando React com Next.JS</h1>
      <h2>Site criado em TypeScript publicado na Vercel.</h2>
      <h3>Ava Girls</h3>
  
    </Estilo>
  )
}

export default Home
