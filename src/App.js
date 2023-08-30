import React from 'react'
import { Register } from './components/Register'
import { Provider } from 'react-redux'
import { RouterApp } from './config/router/RouterApp'
import store from './store/services'

const App = () => {
  return (
    // <Register />
    <Provider store={store}>
    <RouterApp />
  </Provider>
  )
}

export default App