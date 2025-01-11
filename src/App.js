import React from 'react';
import './App.css';
import Header from './components/Header'
import Chartsection from './components/Chartsection'
import Performancesection from './components/Performancesection';
import Sentiment from './components/Sentiment';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Team from './components/Team';
import Youmaylike from './components/Youmaylike';
const App = () => {
  return (
    <div className="container10">
      <Header/>
      <Chartsection/>
      <Performancesection/>
      <Sentiment/>
      <About/>
      <Tokenomics/>
      <Team/>
      <Youmaylike/>
    </div>
  );
};

export default App;
