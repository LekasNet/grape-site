import { useEffect, useRef, useState } from 'react';

const getBrightness = (r, g, b) => (r * 299 + g * 587 + b * 114) / 1000;

const AutoColorText = ({ children, fontSize = 16, fontFamily = 'sans-serif' }) => {
    const ref = useRef();
    const [color, setColor] = useState('#000000');

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 1;
        canvas.height = 1;

        const { x, y, width, height } = element.getBoundingClientRect();
        const sampleX = x + width / 2;
        const sampleY = y + height / 2;

        try {
            ctx.drawWindow?.(window, sampleX, sampleY, 1, 1, 'rgb(255,255,255)');
        } catch (err) {
            // не работает без расширений, fallback
            const bg = getComputedStyle(element).backgroundColor;
            const match = bg.match(/rgba?\((\d+), (\d+), (\d+)/);
            if (match) {
                const [r, g, b] = match.slice(1, 4).map(Number);
                const brightness = getBrightness(r, g, b);
                setColor(brightness < 128 ? '#ffffff' : '#000000');
            }
        }
    }, []);

    return (
        <span
            ref={ref}
            style={{
                color,
                fontSize,
                fontFamily,
                transition: 'color 0.3s ease',
            }}
        >
      {children}
    </span>
    );
};

export default AutoColorText;
