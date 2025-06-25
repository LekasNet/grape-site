import { useEffect, useState } from 'react';

export const useIsOnFifthSection = () => {
    const [isOnFifth, setIsOnFifth] = useState(false);

    useEffect(() => {
        const target = document.getElementById('fifth-section');
        if (!target) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsOnFifth(entry.isIntersecting),
            {
                root: null,
                threshold: 0.5, // видимость 50% секции
            }
        );

        observer.observe(target);
        return () => observer.disconnect();
    }, []);

    return isOnFifth;
};
