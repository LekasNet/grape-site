import { useEffect, useState } from 'react';
import './ThirdPageSection.css';
import { Images } from '../../assets/images/images';
import GrainOverlayWrapper from "../widgets/GrainOverlayWrapper";

const targetDate = new Date('2025-09-01T00:00:00'); // 🕒 дата релиза

const getTimeRemaining = () => {
    const now = new Date();
    const total = targetDate - now;
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
};

const pad = (num) => String(num).padStart(2, '0');

const ThirdPageSection = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

    useEffect(() => {
        const interval = setInterval(() => {
            const updated = getTimeRemaining();
            setTimeLeft(updated);
            if (updated.total <= 0) clearInterval(interval);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="third-page">
            <div className="countdown-content">
                <h2 className="countdown-title">До релиза осталось</h2>
                <div className="countdown-value">
                    {pad(timeLeft.days)} : {pad(timeLeft.hours)} : {pad(timeLeft.minutes)} : {pad(timeLeft.seconds)}
                </div>
                <button className="countdown-button">Оставить заявку</button>
            </div>

            <div className="countdown-image">
                <GrainOverlayWrapper>
                    <img src={Images.tpimage} alt="Release" className="phototp"/>
                </GrainOverlayWrapper>
            </div>
        </section>
    );
};

export default ThirdPageSection;
