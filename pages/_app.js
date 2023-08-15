import '@/styles/globals.css'
import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import  thunkMiddleware  from 'redux-thunk'
import rootReducer from '@/reducers'

const store = configureStore({
  reducer:rootReducer,
  middleware:[thunkMiddleware],
})
const App = ({ Component, pageProps }) => {

  
  return(
    <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  )
}
export default App