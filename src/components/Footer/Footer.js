import React from 'react';
import './Footer.css'; // Importando o CSS para o estilo do footer

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} João Vitor Araujo. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
