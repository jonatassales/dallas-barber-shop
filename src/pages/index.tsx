import React from 'react'
import Head from 'next/head'

import { Config as WhatsAppConfig } from '@/infra/whatsapp/Config'
import Anchor from '@/components/Anchor'
import WhatsappButton from '@/patterns/WhatsAppButton'

import { Container } from '@/styled/home'

export default function Home(): React.ReactElement {
  return (
    <Container>
      <Head>
        <title>Dallas Barber Club - Cortes, cabelo e barba em Itapetininga</title>
        <meta name="description" content="Cortes de cabelo e barba em itapetininga" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <h1>Dallas Barber Club</h1>
      <p>Cabelo e Barba</p>
      <Anchor href={WhatsAppConfig.Src} target="_blank" rel="noreferrer">
        <WhatsappButton>Agendar por Whatsapp!</WhatsappButton>
      </Anchor>
    </Container>
  )
}
