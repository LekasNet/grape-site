import React from "react";
import "./FifthPageSection.css";
import { Images } from '../../assets/images/images';
import GrainOverlayWrapper from "../widgets/GrainOverlayWrapper"; // Подключи свой список изображений
import { motion } from "framer-motion";


const sentenceRegular = "Наш подход ".split(' ');
const sentenceItalic = "— больше кино, ощущений, \nмомент как будто вы уже знакомы".split(' ');

const scrollToSixthSection = () => {
    const sixthSection = document.getElementById('sixth-section');
    if (sixthSection) {
        sixthSection.scrollIntoView({ behavior: 'smooth' });
    }
};


const FifthPageSection = () => {
    return (
        <section className="fifth-page">
            <div className="fifth-background">
                <GrainOverlayWrapper>
                <img src={Images.approach} alt="approach" className="approach-bg" />
                </GrainOverlayWrapper>
            </div>

            <div className="fifth-overlay">
                <h2 className="fifth-title">
                    {sentenceRegular.map((word, i) => (
                        <motion.span
                            key={`r-${i}`}
                            className="word regular"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                        >
                            {word + '\u00A0'}
                        </motion.span>
                    ))}
                    {sentenceItalic.map((word, i) => (
                        <motion.span
                            key={`i-${i}`}
                            className="word italic"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: (sentenceRegular.length + i) * 0.1, duration: 0.4 }}
                        >
                            {word + '\u00A0'}
                        </motion.span>
                    ))}
                </h2>

                <motion.button
                    className="fifth-button"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    onClick={scrollToSixthSection}
                >
                    Узнать подробнее
                </motion.button>
            </div>

            <div className="fifth-note">Момент, в который все сошлось</div>
        </section>
    );
};


export default FifthPageSection;
