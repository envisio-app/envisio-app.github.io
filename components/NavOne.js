import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const NavOne = () => {
  const [sticky, setSticky] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sectionPositions, setSectionPositions] = useState([]);

  // Update section positions on mount
  useEffect(() => {
    const getSectionPositions = () => {
      const sections = [
        { id: '/', element: document.querySelector('header') },
        { id: '#cta-one', element: document.querySelector('#cta-one') },
        { id: '#features', element: document.querySelector('#features') },
        { id: '#fact-one', element: document.querySelector('#fact-one') },
      ];

      return sections.map((section) => ({
        id: section.id,
        offsetTop: section.element ? section.element.offsetTop : 0,
      }));
    };

    setSectionPositions(getSectionPositions());

    const handleScroll = () => {
      // Sticky header logic
      setSticky(window.scrollY > 70);

      // Active link logic
      const scrollPosition = window.scrollY + 100;
      const currentSection = sectionPositions.find((section, index) => {
        const nextSection = sectionPositions[index + 1];
        if (nextSection) {
          return (
            scrollPosition >= section.offsetTop &&
            scrollPosition < nextSection.offsetTop
          );
        }
        return scrollPosition >= section.offsetTop;
      });

      if (currentSection && currentSection.id !== activeLink) {
        setActiveLink(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionPositions, activeLink]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      document.body.classList.remove('no-scroll'); // Allow scrolling
    } else {
      document.body.classList.add('no-scroll'); // Disable scrolling
    }
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className="site-header site-header__header-one">
        <nav
          className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${
            sticky ? 'stricked-menu stricky-fixed' : 'stricked-menu stricky-fixed transparent'
          }`}
        >
          <div className="navbar-container">
            <div className="logo-box">
              <a className="navbar-brand" href="/">
                envisio
              </a>
            </div>
            <div className="main-navigation">
              <ul
                className={`one-page-scroll-menu navigation-box responsive-box ${
                  mobileMenuOpen ? 'open' : ''
                }`}
              >
                <li className={`scrollToLink ${activeLink === '/' ? 'current' : ''}`}>
                  <Link href="/" passHref>
                    <a className="nav-item" onClick={toggleMobileMenu}>Home</a>
                  </Link>
                </li>
                <li className={`scrollToLink ${activeLink === '#cta-one' ? 'current' : ''}`}>
                  <Link href="#cta-one" passHref>
                    <a className="nav-item" onClick={toggleMobileMenu}>Description</a>
                  </Link>
                </li>
                <li className={`scrollToLink ${activeLink === '#features' ? 'current' : ''}`}>
                  <Link href="#features" passHref>
                    <a className="nav-item" onClick={toggleMobileMenu}>About Us</a>
                  </Link>
                </li>
                <li className={`scrollToLink ${activeLink === '#fact-one' ? 'current' : ''}`}>
                  <Link href="#fact-one" passHref>
                    <a className="nav-item" onClick={toggleMobileMenu}>Reports</a>
                  </Link>
                </li>
              </ul>
              <div className="nav-button" onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {mobileMenuOpen && (
        <div className="fixed-mobile-nav">
          <header className="mobile-header">
            <div className="logo-box">
              <a className="navbar-brand" href="/">
                envisio
              </a>
            </div>
            <div className="nav-button" onClick={toggleMobileMenu}>
              <CloseRoundedIcon />
            </div>
          </header>
          <ul className="mobile-nav-links">
            <li className={`scrollToLink ${activeLink === '/' ? 'current' : ''}`}>
              <Link href="/" passHref>
                <a className="nav-item" onClick={toggleMobileMenu}>Home</a>
              </Link>
            </li>
            <li className={`scrollToLink ${activeLink === '#cta-one' ? 'current' : ''}`}>
              <Link href="#cta-one" passHref>
                <a className="nav-item" onClick={toggleMobileMenu}>Description</a>
              </Link>
            </li>
            <li className={`scrollToLink ${activeLink === '#features' ? 'current' : ''}`}>
              <Link href="#features" passHref>
                <a className="nav-item" onClick={toggleMobileMenu}>About Us</a>
              </Link>
            </li>
            <li className={`scrollToLink ${activeLink === '#fact-one' ? 'current' : ''}`}>
              <Link href="#fact-one" passHref>
                <a className="nav-item" onClick={toggleMobileMenu}>Reports</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavOne;
