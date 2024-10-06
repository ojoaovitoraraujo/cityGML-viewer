import React from 'react';
import ThreeDView from './components/ThreeeDView/ThreeDView';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Sidebar />
      <ThreeDView />
      <Footer />
    </div>
  );
}

export default App;
