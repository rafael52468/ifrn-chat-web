import React from 'react'
import { AppContainer } from '../src/components/AppContainerComponent'

const Logout = props => {
  return (
    <AppContainer>
      <div>
        <p>Clique para sair</p>
        <input type="button" id="Logout" value="SAIR" />
      </div>
    </AppContainer>
  )
}

export default Logout
