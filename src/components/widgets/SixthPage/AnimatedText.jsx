import { motion } from 'framer-motion';

const text = `Найти партнера с помощью специального алгоритма, который мы создали специально\nдля тебя, стало куда проще`;

const wordLines = text.split('\n').map(line => line.split(' '));

const wordFade = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.05, duration: 0.4, ease: 'easeOut' },
    }),
};

const AdaptiveAnimatedText = () => {
    return (
        <div className="animated-text-container">
            {wordLines.map((line, lineIndex) => (
                <div key={lineIndex} className="text-line">
                    {line.map((word, wordIndex) => {
                        const absoluteIndex = lineIndex * 100 + wordIndex;
                        const delay = lineIndex * 0.8 + wordIndex * 0.05 + 0.7;

                        return (
                            <motion.span
                                key={absoluteIndex}
                                className="word"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay, duration: 0.4, ease: 'easeOut' }}
                            >
                                {word + '\u00A0'}
                            </motion.span>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default AdaptiveAnimatedText;
