import React from 'react';

import './styles/global.css';
import { BrowserRouter } from 'react-router-dom';


import {Routes} from './routes';

import { Header } from "./components/Header";


export function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className="pages">
        <Routes />
      </div>

    </BrowserRouter>
  );
};
