import { motion } from 'framer-motion';
import './FPBottomText.css';

const text = "Момент, в который\nвсё сошлось";
const italicWord = "сошлось";

const BottomText = () => {
    const lines = text.split('\n').map(line => line.split(''));

    return (
        <div className="bottom-text-container">
            {lines.map((line, lineIndex) => {
                const lineStr = line.join('');
                const italicStartIndex = lineIndex === 1 ? lineStr.indexOf(italicWord) : -1;

                return (
                    <div key={lineIndex} className="text-line">
                        {line.map((char, charIndex) => {
                            const absoluteCharIndex = lineIndex * 100 + charIndex;
                            const delay = lineIndex * 0.8 + charIndex * 0.05 + 0.7;

                            const isItalic =
                                lineIndex === 1 &&
                                italicStartIndex !== -1 &&
                                charIndex >= italicStartIndex &&
                                charIndex < italicStartIndex + italicWord.length;

                            return (
                                <motion.span
                                    key={absoluteCharIndex}
                                    className={`char ${isItalic ? 'italic' : ''}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay, duration: 0.4, ease: 'easeOut' }}
                                >
                                    {char === ' ' ? '\u00A0' : char}
                                </motion.span>
                            );
                        })}
                    </div>
                );
            })}

            {/* подпись */}
            <motion.span
                className="bottom-caption"
                initial={{ opacity: 0, x: '-50%' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 1.45 + 0.7 }}
            >
                dating app
            </motion.span>
        </div>
    );
};

export default BottomText;
