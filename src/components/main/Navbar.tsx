import React from 'react';
import './navbar.css';

type NavbarProps = {
    className: string;
}

const ABOUT = 'About';
const EVENTS = 'Events';
const OFFICERS = 'Officers';

const Navbar: React.FC<NavbarProps> = ({className}) => {

    const logoHandle = (e: any) => {

        const elem = e.target as HTMLElement;
        switch (elem.innerHTML) {
            case ABOUT:
                document.getElementById("about-component")?.scrollIntoView();
                break;
            case EVENTS:
                document.getElementById("events-component")?.scrollIntoView();
                break;
            case OFFICERS:
                document.getElementById("officers-component")?.scrollIntoView();
                break;

        }

        const browserWidth: number = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

        if (browserWidth < 800) {
            const overlay = document.getElementById("nav-overlay") as HTMLElement;
            if (overlay.style.width === "100%") {
                overlay.style.width = "0";
            } else {
                overlay.style.width = "100%";
            }
        }

        e.preventDefault();

        let circuits: HTMLImageElement = document.getElementById("circuits") as HTMLImageElement;

        circuits.classList.add('circuits_1');
        setTimeout(() => {
            circuits.classList.remove('circuits_1');
            circuits.classList.add('circuits_2');
        }, 50);

        setTimeout(() => {
            circuits.classList.remove('circuits_2');
            circuits.classList.add('circuits_3');
        }, 100);

        setTimeout(() => {
            circuits.classList.remove('circuits_3');
            circuits.classList.add('circuits_4');

            const displayStatus = document.getElementsByClassName('navbar')[0];

            if (displayStatus.classList.contains('display-none')) {
                displayStatus.classList.remove('display-none');
            } else {
                displayStatus.classList.add('display-none');
            }
        }, 150);

        setTimeout(() => {
            circuits.classList.remove('circuits_4');
            circuits.classList.add('circuits_0');
        }, 1000);
    }

    return (

        <div className="navbar-container">
            <div id="nav-overlay" className="fullscreen-nav">
                <a href="#about-component" onClick={logoHandle}>{ABOUT}</a>
                <a href="#events-component" onClick={logoHandle}>{EVENTS}</a>
                <a href="#officers-component" onClick={logoHandle}>{OFFICERS}</a>
            </div>
            <div id="logo-container">
                <img alt="circuits" id="circuits" className="circuits_0" />
                <img alt="logo" className="logo1 nav-logo" onClick={logoHandle} />
            </div>
            <div className={className}>
                <ul className="nav-bar">
                    <li className="nav-bar-item" onClick={logoHandle}>
                        <a href="#about-component">{ABOUT}</a>
                    </li>
                    <li className="nav-bar-item" onClick={logoHandle}>
                        <a href="#events-component">{EVENTS}</a>
                    </li>
                    <li className="nav-bar-item" onClick={logoHandle}>
                        <a href="#officers-component">{OFFICERS}</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
