import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AppButton, AppContainer, AppInput } from '../src/components'

const Login = props => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Infoweb chat - Login</title>
      </Head>
      <main>
        <AppContainer>
          <AppInput label="Usuário" title="apelido ou email do usuário" />
          <AppInput label="Senha" type="password" />
          <AppButton
            onClick={event => router.back()}
            label="voltar"
            color="secondary"
          />
          <AppButton
            title="Clique aqui para entrar no chat"
            label="Entrar no chat"
          />
        </AppContainer>
      </main>
    </div>
  )
}

export default Login
