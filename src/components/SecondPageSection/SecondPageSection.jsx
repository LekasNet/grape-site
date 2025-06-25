import './SecondPageSection.css';
import { Images } from '../../assets/images/images';

const SecondPageSection = () => {
    return (
        <section className="second-page">
            <div className="image-wrapper">
                <video
                    className="main-photo"
                    autoPlay
                    loop
                    muted
                    playsInline // для автозапуска на iOS
                >
                    <source src={Images.romance} type="video/webm"/>
                </video>
            </div>

            <div className="text-wrapper">
                <h1 className="big-title">
                    МАГИЯ ЛЮБВИ <br/>
                    С МАГИЕЙ <br/>
                    АЛГОРИТМОВ
                </h1>

                <p className="subtitle">
                    Найти партнера с помощью специального алгоритма,<br/>
                    который мы разработали специально для тебя,<br/>
                    стало куда проще и увлекательнее
                </p>

                <button className="cta-button">Попробовать сейчас</button>
            </div>
        </section>
    );
};

export default SecondPageSection;
