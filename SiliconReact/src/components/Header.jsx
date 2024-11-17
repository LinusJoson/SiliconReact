import React, { useEffect, useState } from 'react'

const Header = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedThemeMode = localStorage.getItem('themeMode');

        if (storedThemeMode === 'dark' || (!storedThemeMode && window.matchMedia('(prefers-color-scheme: dark)').matches))
            {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {

        setIsDarkMode(false);
        document.documentElement.classList.remove('dark');
        } 

    }, []);
    
    const handleThemeToggle = () => {
        if (isDarkMode) {
            setIsDarkMode(false);
            localStorage.setItem('themeMode', 'light');
            document.documentElement.classList.remove('dark');
        } else {
            setIsDarkMode(true);
            localStorage.setItem('themeMode', 'dark');
            document.documentElement.classList.add('dark');
        }
    } 

  return (

    <header id="header">
        <div className="container">
            <a className="logotype" href="#">
                <img src="images/Navbar/logotype.svg" alt="Silicon logo"/> 
            </a>

            <nav className="nav-links">
                <a className="nav-link active" href="#">Features</a>
                <a className="nav-link" href="#">Contact</a>
            </nav>
            <div className="theme-switch">
                <label className="toggle-switch" htmlFor="darkmode-switch" aria-label="darkmode switch">
                    <input id="darkmode-switch" type="checkbox" checked={isDarkMode} onChange={handleThemeToggle}/>
                    <span className="slider"></span>
                </label>
                <label className="switch-label" htmlFor="darkmode-switch">Dark mode</label>
            </div>

            <a className="btn with-icon" href="#"><i className="fa-regular - fa-user"></i>   Sign in/up</a>
        </div>
    </header>
  )
}

export default Header
