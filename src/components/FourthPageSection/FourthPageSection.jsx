import React from 'react';
import Slider from 'react-slick';
import './FourthPageSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Images } from '../../assets/images/images'; // Подключи свой список изображений

const feedbacks = [
    {
        name: 'Анастасия',
        age: 22,
        text: '“Я не ждала, что будет вау. Просто с ним стало спокойно.”',
        image: Images.feedback1,
    },
    {
        name: 'Егор',
        age: 28,
        text: '“Никаких идеальных биографий. Просто человек, которого хочется слушать.”',
        image: Images.feedback2,
    },
    {
        name: 'Лена',
        age: 24,
        text: '“Мне просто с ним хорошо. Всё сложилось само собой.”',
        image: Images.feedback3,
    },
];

const FourthPageSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4500,
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        customPaging: (i) => <div className="custom-dot" />,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (
        <section className="fourth-page">
            <div className="title-block">
                <div className="title-emotion">Эмоции</div>
                <div className="title-sub">пользователей</div>
                <div className="title-small">Кому уже помог<br />наш умный поиск</div>
            </div>

            <Slider {...settings} className="carousel">
                {feedbacks.map((item, index) => (
                    <div key={index} className="carousel-item">
                        <img src={item.image} alt={item.name} className="carousel-image" />
                        <div className="carousel-text">
                            <div className="carousel-name">{item.name}, {item.age}</div>
                            <div className="carousel-quote">{item.text}</div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default FourthPageSection;
