import './Header.css';
import {useEffect, useState} from "react";

const scrollToSection = (id) => {
    const section = document.querySelector(`#${id}`);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

const Header = () => {
    const [isFifthVisible, setIsFifthVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const fifth = document.getElementById('fifth-section');
            if (!fifth) return;

            const rect = fifth.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= 0;
            setIsFifthVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isFifthVisible ? 'white-header' : ''}`}>
            <nav className="nav-grid">
                <span className="nav-item" onClick={() => scrollToSection('second-section')}>алгоритм</span>
                <span className="nav-item" onClick={() => scrollToSection('third-section')}>о релизе</span>
                <span className="nav-brand" onClick={() => scrollToSection('first-section')}>Grape.</span>
                <span className="nav-item" onClick={() => scrollToSection('fourth-section')}>эмоции</span>
                <span className="nav-item" onClick={() => scrollToSection('fifth-section')}>наш подход</span>
            </nav>
        </header>
    );
};

export default Header;


