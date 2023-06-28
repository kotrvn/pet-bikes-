import React from 'react'
import Routes from "./routes/Routes.tsx";
import {Provider} from "react-redux";
import { store } from './store'
import './assets/styles/global.scss'


export const App: React.FC = () => {
  return (
      <Provider store={store}>
        <Routes />
      </Provider>

  )
}
