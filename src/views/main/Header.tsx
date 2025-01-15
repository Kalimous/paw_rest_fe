import React, {useState} from "react";

import "./Header.css";

interface HeaderProps {
    isScrolled: boolean;
    
}

const Header: React.FC<HeaderProps> = ({ isScrolled}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    // const closeMenu = () => {
    //     setMenuOpen(false);
    // };

    return (
        <header className={`header ${isScrolled ? "scrolled" : ""}`}>
            <div className="logo"><img src="src/assets/logo.png"/></div>
            {!menuOpen && (
            <button className="menu-button" onClick={toggleMenu}>
                [ menu ]
            </button>
            )}
            {menuOpen && (
                <nav className="menu">
                    <a href="#">실종동물 찾기</a>
                    <a href="#">유기견 현황</a>
                    <a href="#">유기견 보호소</a>
                    <a href="#" style={{ color: '#CAA684' }}>로그인</a>
                    <a href="#">회원가입</a>
                </nav>
            )}
    </header>
  );
};

export default Header; 