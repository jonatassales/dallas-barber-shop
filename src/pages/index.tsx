import React from 'react'
import Head from 'next/head'

import KlivoLogo from '@/components/KlivoLogo'

import { Container } from '@/styled/home'

export default function Home(): React.ReactElement {
  return (
    <Container>
      <Head>
        <title>Klivo Web Starter</title>
        <meta
          name="description"
          content="Com o uso humano da tecnologia e profissionais altamente qualificados, ajudamos o paciente crônico a levar uma vida com muito mais saúde"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <h1>Klivo Web Starter</h1>
      <p>Boilerplate for web based applications at Klivo</p>
      <KlivoLogo />
    </Container>
  )
}
