import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './SecondPageSection.css';
import { Images } from '../../assets/images/images';

const wordFade = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.4 },
    }),
};

const SecondPageSection = () => {
    const text1 = `Найти партнера с помощью \nспециального алгоритма, \nкоторый мы создали специально`.split('\n');
    const text2 = `Найти партнера с помощью \nспециального алгоритма,\nкоторый мы создали специально для тебя,\nстало куда проще`.split('\n');


    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section ref={ref} className="second-page">
            <div className="left-block">
                <motion.img
                    src={Images.spimage3}
                    alt="photo1"
                    className="photo photo1"
                    initial={{opacity: 0}}
                    animate={inView ? {opacity: 1} : {}}
                    transition={{duration: 0.6}}
                />
                <motion.p className="text1" initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                    {text1.map((line, lineIndex) => (
                        <span key={lineIndex}>
                          {line.split(' ').map((word, wordIndex) => (
                              <motion.span key={wordIndex} custom={lineIndex * 100 + wordIndex} variants={wordFade}>
                                  {word + ' '}
                              </motion.span>
                          ))}
                            <br/>
                        </span>
                    ))}
                </motion.p>


                <motion.img
                    src={Images.spimage2}
                    alt="photo2"
                    className="photo photo2"
                    initial={{opacity: 0, x: 60}}
                    animate={inView ? {opacity: 1, x: 0} : {}}
                    transition={{duration: 0.8}}
                />
                <motion.p className="text2" initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                    {text2.map((line, lineIndex) => (
                        <span key={lineIndex}>
                          {line.split(' ').map((word, wordIndex) => (
                              <motion.span key={wordIndex} custom={lineIndex * 100 + wordIndex} variants={wordFade}>
                                  {word + ' '}
                              </motion.span>
                          ))}
                            <br/>
                        </span>
                    ))}
                </motion.p>
            </div>

            <motion.img
                src={Images.spimage1}
                alt="photo3"
                className="right-photo"
                initial={{opacity: 0}}
                animate={inView ? {opacity: 1} : {}}
                transition={{duration: 0.8}}
            />
        </section>
    );
};

export default SecondPageSection;
