import './Header.css';

const scrollToSection = (id) => {
    const section = document.querySelector(`#${id}`);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

const Header = () => {
    return (
        <header className="header">
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


