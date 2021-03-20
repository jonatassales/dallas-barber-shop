import React from 'react'
import Head from 'next/head'

import WhatsAppConfig from '@/infra/whatsapp/config'
import InstagramConfig from '@/infra/instagram/config'
import Anchor from '@/components/Anchor'
import WhatsappButton from '@/patterns/WhatsAppButton'
import InstagramButtom from '@/patterns/InstagramButtom'

import { Container, SocialButtons } from '@/styled/home'

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
      <SocialButtons>
        <Anchor href={WhatsAppConfig.src} rel="noreferrer">
          <WhatsappButton>Agendar por Whatsapp!</WhatsappButton>
        </Anchor>
        <Anchor href={InstagramConfig.src} rel="noreferrer">
          <InstagramButtom>Agendar por Instagram!</InstagramButtom>
        </Anchor>
      </SocialButtons>
    </Container>
  )
}
