import React, { Component } from 'react';
import Link from 'next/link';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default class NavOne extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
      activeLink: '/',
      mobileMenuOpen: false, // New state for mobile menu toggle
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.sectionPositions = this.getSectionPositions();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getSectionPositions = () => {
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

  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({ sticky: true });
    } else {
      this.setState({ sticky: false });
    }

    const scrollPosition = window.scrollY + 100;
    const currentSection = this.sectionPositions.find((section, index) => {
      const nextSection = this.sectionPositions[index + 1];
      if (nextSection) {
        return (
          scrollPosition >= section.offsetTop &&
          scrollPosition < nextSection.offsetTop
        );
      }
      return scrollPosition >= section.offsetTop;
    });

    if (currentSection && currentSection.id !== this.state.activeLink) {
      this.setState({ activeLink: currentSection.id });
    }
  };

  toggleMobileMenu = () => {
    const { mobileMenuOpen } = this.state;
    if (mobileMenuOpen) {
      document.body.classList.remove('no-scroll'); // Allow scrolling
    } else {
      document.body.classList.add('no-scroll'); // Disable scrolling
    }
    this.setState({ mobileMenuOpen: !mobileMenuOpen });
  };

  render() {
    const { sticky, activeLink, mobileMenuOpen } = this.state;

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
                  <li
                    className={`scrollToLink ${
                      activeLink === '/' ? 'current' : ''
                    }`}
                  >
                    <a
                      href="/"
                      className="nav-item"
                      onClick={this.toggleMobileMenu}
                    >
                      Home
                    </a>
                  </li>
                  <li
                    className={`scrollToLink ${
                      activeLink === '#cta-one' ? 'current' : ''
                    }`}
                  >
                    <a
                      href="#cta-one"
                      className="nav-item"
                      onClick={this.toggleMobileMenu}
                    >
                      Description
                    </a>
                  </li>
                  <li
                    className={`scrollToLink ${
                      activeLink === '#features' ? 'current' : ''
                    }`}
                  >
                    <a
                      href="#features"
                      className="nav-item"
                      onClick={this.toggleMobileMenu}
                    >
                      About Us
                    </a>
                  </li>
                  <li
                    className={`scrollToLink ${
                      activeLink === '#fact-one' ? 'current' : ''
                    }`}
                  >
                    <a
                      href="#fact-one"
                      className="nav-item"
                      onClick={this.toggleMobileMenu}
                    >
                      Reports
                    </a>
                  </li>
                </ul>
                <div className="nav-button" onClick={this.toggleMobileMenu}>
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
                  <img
                    src="/assets/images/resources/logo-dark.png"
                    className="main-logo"
                    width="119"
                    alt="Awesome Image"
                  />
                </a>
              </div>
              <div className="nav-button" onClick={this.toggleMobileMenu}>
                <CloseRoundedIcon />
              </div>
            </header>
            <ul className="mobile-nav-links">
            <li
                    className={`scrollToLink ${
                      activeLink === '/' ? 'current' : ''
                    }`}
                  >
                <a href="/" onClick={this.toggleMobileMenu} className='nav-item'>
                  Home
                </a>
              </li>
              <li
                    className={`scrollToLink ${
                      activeLink === '#cta-one' ? 'current' : ''
                    }`}
                  >
                <a href="#cta-one" onClick={this.toggleMobileMenu} className='nav-item'>
                  Description
                </a>
              </li>
              <li
                    className={`scrollToLink ${
                      activeLink === '#features' ? 'current' : ''
                    }`}
                  >
                <a href="#features" onClick={this.toggleMobileMenu} className='nav-item'>
                  About Us
                </a>
              </li>
              <li
                    className={`scrollToLink ${
                      activeLink === '#fact-one' ? 'current' : ''
                    }`}
                  >
                <a href="#fact-one" onClick={this.toggleMobileMenu} className='nav-item'>
                  Reports
                </a>
              </li>
            </ul>
          </div>
        )}
      </>
    );
  }
}