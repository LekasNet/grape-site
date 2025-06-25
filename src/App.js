import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import FirstPageSection from './components/FirstPageSection/FirstPageSection';
// import MainPagesWrapper from './components/widgets/MainPagesWrapper';
import Header from './components/widgets/Header/Header';
import SixthPageSection from "./components/SixthPageSection/SixthPageSection";
import SecondPageSection from "./components/SecondPageSection/SecondPageSection";
import ThirdPageSection from "./components/ThirdPageSection/ThirdPageSection";
import FourthPageSection from "./components/FourthPageSection/FourthPageSection";
import FifthPageSection from "./components/FifthPageSection/FifthPageSection";
import {useIsOnFifthSection} from "./components/widgets/Header/useSectionObserver";

function App() {
    const [fixed, setFixed] = useState(false);
    const isOnFifthSection = useIsOnFifthSection();

    useEffect(() => {
        const onScroll = () => {
            const triggerPoint = window.innerHeight * 0.9;
            setFixed(window.scrollY > triggerPoint);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <section id="first-section">
                <FirstPageSection />
            </section>

            <AnimatePresence>
                {fixed && (
                    <motion.div
                        className={`header-fixed-wrapper ${isOnFifthSection ? 'no-blend' : ''}`}
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        exit={{ opacity: 0}}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        <Header />
                    </motion.div>
                )}
            </AnimatePresence>

            <section id="second-section">
                <SecondPageSection/>
            </section>

            <section id="third-section">
                <ThirdPageSection/>
            </section>

            <section id="fourth-section">
                <FourthPageSection/>
            </section>

            <section id="fifth-section">
                <FifthPageSection/>
            </section>

            <section id="sixth-section">
                <SixthPageSection/>
            </section>
        </>
    );
}

export default App;
