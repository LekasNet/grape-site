import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icons } from '../../../assets/images/images';
import './IntroGrapeWithArrow.css';

const titleVariantsInitial = {
    initial: { opacity: 0, y: -30, scale: 1 },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: 'easeOut' },
    },
    hover: {
        scale: 1.05,
        y: 4,
        transition: { duration: 0.2 },
    },
};

const arrowVariantsInitial = {
    initial: { opacity: 0, y: -30, scale: 1 },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'drop-shadow(0 0 0px transparent)',
        transition: { duration: 0.7, ease: 'easeOut', delay: 0.4 },
    },
    hover: {
        scale: 1.2,
        y: 8,
        filter: 'drop-shadow(0 0 10px white)',
        transition: { duration: 0.2, delay: 0.1 },
    },
};

const titleVariantsAfter = {
    ...titleVariantsInitial,
    animate: {
        ...titleVariantsInitial.animate,
        transition: { duration: 0.2, ease: 'easeOut' },
    },
};

const arrowVariantsAfter = {
    ...arrowVariantsInitial,
    animate: {
        ...arrowVariantsInitial.animate,
        transition: { duration: 0.2, ease: 'easeOut', delay: 0.1 },
    },
};

const IntroGrapeWithArrow = () => {
    const [titleVariants, setTitleVariants] = useState(titleVariantsInitial);
    const [arrowVariants, setArrowVariants] = useState(arrowVariantsInitial);
    const [animationCompleted, setAnimationCompleted] = useState(false);

    const handleInitialAnimationComplete = () => {
        if (!animationCompleted) {
            setTitleVariants(titleVariantsAfter);
            setArrowVariants(arrowVariantsAfter);
            setAnimationCompleted(true);
        }
    };

    const handleClick = () => {
        const secondSection = document.querySelector('#second-section');
        if (secondSection) {
            secondSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div
            className="intro-container"
            initial="initial"
            animate="animate"
            whileHover="hover"
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        >
            <motion.h1
                className="intro-title"
                variants={titleVariants}
                onAnimationComplete={handleInitialAnimationComplete}
            >
                Grape.
            </motion.h1>

            <motion.img
                src={Icons.arrow}
                alt="Arrow down"
                className="arrow"
                variants={arrowVariants}
            />
        </motion.div>
    );
};

export default IntroGrapeWithArrow;
