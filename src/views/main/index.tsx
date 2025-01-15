import React, { useState, useEffect } from 'react';
import Header from './Header';
import './style.css';

const Main: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuStyle, setMenuStyle] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > window.innerHeight / 2);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-container">
      <Header isScrolled={isScrolled}/>
      <main className="main">
       
      </main>
    </div>
  );
}

export default Main;