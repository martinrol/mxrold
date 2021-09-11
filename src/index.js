import React from 'react'
import ReactDOM from 'react-dom'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import App from './routes/App'
import './assets/styles/index.css'

const firebaseConfig = {
  apiKey: "AIzaSyBIuMYeMCdcorxvB6jlb71TbnoxxB-ZtVI",
  authDomain: "mxrold.firebaseapp.com",
  projectId: "mxrold",
  storageBucket: "mxrold.appspot.com",
  messagingSenderId: "326391650608",
  appId: "1:326391650608:web:f13f213f60c854d37210f5",
  measurementId: "G-E8X49EDD5T"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

ReactDOM.render(<App /> , document.getElementById('app'))
