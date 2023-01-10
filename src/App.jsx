// Baseado na vídeo-aula: https://www.youtube.com/watch?v=3sQITRihW_A&list=LL&index=17&t=608s

import { React, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Search from './components/Search';
import AboutModal from './components/AboutModal';
import './App.css';

import { RiSearchEyeLine } from "react-icons/ri";  // https://react-icons.github.io/react-icons

function App() {  
  const [userInfo, setUserInfo] = useState({});
  const [repositoryInfo, setRepositoryInfo] = useState({});
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <div className="finder-icon"><h1> GitHub </h1> <RiSearchEyeLine style={{ fontSize: '85px' }}/> <h1>Finder.</h1></div>
      <div className="card">
        <Search setUserInfo={setUserInfo} setRepositoryInfo={setRepositoryInfo}/>
        <Outlet context={{userInfo, repositoryInfo}} />
      </div>

      <AboutModal show={showModal === false ? "" : "show"}/>
      <span className="about" onClick={() => setShowModal((state) => !state)}> ? </span>
    </>
  );
}

export default App;
