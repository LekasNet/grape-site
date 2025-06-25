import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './SixthPageSection.css';
import { Images } from '../../assets/images/images';

const text1 = "Найти партнера с помощью\nспециального алгоритма,\nкоторый мы создали специально".split('\n').map(line => line.split(' '));

const text2 = "Найти партнера с помощью\nспециального алгоритма,\nкоторый мы создали специально\nдля тебя, стало куда проще".split('\n').map(line => line.split(' '));

const delaysText2 = text2.map((line, lineIndex) => {
    const delays = [];
    let currentDelay = 0.7;
    if (lineIndex > 0) {
        const totalPrevWords = text2.slice(0, lineIndex).reduce((sum, l) => sum + l.length, 0);
        currentDelay += totalPrevWords * 0.2;
    }
    for (let i = 0; i < line.length; i++) {
        delays.push(currentDelay + i * 0.2);
    }
    return delays;
});

const SixthPageSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    return (
        <section className="sixth-page" ref={sectionRef}>
            <div className="left-block">
                <motion.img
                    src={Images.sixpimage3}
                    alt="photo1"
                    className="photo photo1"
                    initial={{ opacity: 0, x: 60 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
                    transition={{ duration: 1 }}
                />

                <div className="text1">
                    {text1.map((line, lineIndex) => (
                        <div key={lineIndex} className="text-line6">
                            {line.map((word, wordIndex) => (
                                <motion.span
                                    key={lineIndex * 100 + wordIndex}
                                    className="word"
                                    initial="hidden"
                                    animate={isInView ? 'visible' : 'hidden'}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                delay: delaysText2[lineIndex][wordIndex],
                                                duration: 0.4,
                                                ease: 'easeOut',
                                            },
                                        },
                                    }}
                                >
                                    {word + '\u00A0'}
                                </motion.span>
                            ))}
                        </div>
                    ))}
                </div>

                <motion.img
                    src={Images.sixpimage2}
                    alt="photo2"
                    className="photo photo2"
                    initial={{ opacity: 0, x: -60 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
                    transition={{ duration: 1 }}
                />

                <div className="text2">
                    {text2.map((line, lineIndex) => (
                        <div key={lineIndex} className="text-line6">
                            {line.map((word, wordIndex) => (
                                <motion.span
                                    key={lineIndex * 100 + wordIndex}
                                    className="word"
                                    initial="hidden"
                                    animate={isInView ? 'visible' : 'hidden'}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                delay: delaysText2[lineIndex][wordIndex],
                                                duration: 0.4,
                                                ease: 'easeOut',
                                            },
                                        },
                                    }}
                                >
                                    {word + '\u00A0'}
                                </motion.span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <motion.img
                src={Images.sixpimage1}
                alt="photo3"
                className="right-photo"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 2 }}
            />
        </section>
    );
};

export default SixthPageSection;
