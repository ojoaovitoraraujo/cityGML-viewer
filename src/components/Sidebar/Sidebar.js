import React from 'react';
import './Sidebar.css';
import UnifeiLogo from '../../assets/UNIFEI.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={UnifeiLogo} alt="Logo" className="sidebar-logo" />
      </div>
      <ul>
        <li><a href="#viewer">3D Viewer</a></li>
        <hr />
        <li><a href="https://www.linkedin.com/in/joaovitoraraujo/" target="_blank">Sobre</a></li>
        <hr />
        <li><a href="https://www.overleaf.com/read/bssrkttnfjcv#993360" target="_blank">Artigo</a></li>
        <hr />
        <li><a href="mailto:email@jv.oliveraraujo@unifei.com.br" target="_blank">Contato</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
