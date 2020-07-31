import React from 'react'
import s from './MainPage.module.scss'
import offer_img from '../../img/offer_img.png'
import way_img from '../../img/way_img.png'
import about_img from '../../img/about_img.png'
import response_img from '../../img/response_img.png'
import exclusive_img from '../../img/exclusive_img.png'
import portfolio_img from '../../img/portfolio_img.png'
import rates_img from '../../img/rates_img.png'

const MainPage = (props) => {
    return (
        <div className={s.main_page}>
            <div className={s.offer_block}>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className={s.offer}>
                                <h2>Мы создаем только лучшее</h2>
                                <h1>Разработка индивидуальных <br></br>сайтов для бизнеса</h1>
                                <a href="##" className={s.offer__btn}>Подробнее</a>
                            </div>
                        </div>
                        <div className="col-6">
                            <img src={offer_img} alt="offer_img" className={s.offer__img} />
                        </div>
                    </div>
                </div>
                <img src={way_img} alt="way_img" className={s.way_img}/>
            </div>
            <div className={s.about_us}>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={about_img} alt="about_img" className="mr-auto" />
                        </div>
                        <div className="col-6">
                            <div className={s.about_text}>
                                <h3><span>О</span> нашей <span>компании</span></h3>
                                <p>
                                    Наша команда специализируется на комплексном подходе к запуску проекта. Мы знаем все секреты успешного создания и продвижения сайта! Креативные решения, современные IT технологии и профессиональная команда - основа эффективного проекта!
                                </p>
                                <p>
                                    За годы успешной работы на рынке веб дизайна наша веб студия приобрела огромнейший опыт, что позволяет нам разрабатывать сайты быстро и эффективно, но самое главное Ваш сайт будет действительно работать и приносить Вам деньги, а не бесполезно болтаться в интернете.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.response}>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className={s.about_text}>
                                <h3 className={s.small_title}><span>Оптимизация</span> сайта под экраны мобильных устройств</h3>
                                <p>
                                Немаловажно в нынешнее время корректная работа на экранах смартфонов и планшетов. Если вам нужно создать сайт с адаптивным дизайном, наши специалисты, используя самые передовые технологии, смогут гарантировать правильное отображение контента на всех существующих устройствах.
                                </p>
                            </div>
                        </div>
                        <div className="col-6">
                            <img src={response_img} alt="response_img" className="ml-auto" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.exclusive}>
                <div className="container">
                    <div className="row">
                    <div className="col-6">
                            <img src={exclusive_img} alt="exclusive_img" className="mr-auto" />
                        </div>
                        <div className="col-6">
                            <div className={s.about_text}>
                                <h3 className={s.small_title}>Делаем сайты с  <span>эксклюзивным</span> интерфейсом и дизайном</h3>
                                <p>
                                    Невозможно разработать сайт, который будет успешно работать и продавать на шаблоне! Проектирование дружественного интерфейса и уникального оформления - задача нашего опытного дизайнера. Всё это позволит Вашему покупателю быстро найти интересующую его информацию или услугу. Помните, что мы занимаемся разработкой сайтов не для Вас,
                                    а для вашего клиента!
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.portfolio}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className={s.portfolio__title}>Портфолио</h3>
                        </div>
                        <div className="col-4">
                            <div className={s.portfolio__item}>
                                <img src={portfolio_img} alt="portfolio_img"/>
                                <div className={s.portfolio__descr}>
                                    <h4>Дизайн для CMS</h4>
                                    <a href="##">Посмотреть</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className={s.portfolio__item}>
                                <img src={portfolio_img} alt="portfolio_img"/>
                                <div className={s.portfolio__descr}>
                                    <h4>Дизайн для CMS</h4>
                                    <a href="##">Посмотреть</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className={s.portfolio__item}>
                                <img src={portfolio_img} alt="portfolio_img"/>
                                <div className={s.portfolio__descr}>
                                    <h4>Дизайн для CMS</h4>
                                    <a href="##">Посмотреть</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className={s.portfolio__item}>
                                <img src={portfolio_img} alt="portfolio_img"/>
                                <div className={s.portfolio__descr}>
                                    <h4>Дизайн для CMS</h4>
                                    <a href="##">Посмотреть</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className={s.portfolio__item}>
                                <img src={portfolio_img} alt="portfolio_img"/>
                                <div className={s.portfolio__descr}>
                                    <h4>Дизайн для CMS</h4>
                                    <a href="##">Посмотреть</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className={s.portfolio__item}>
                                <img src={portfolio_img} alt="portfolio_img"/>
                                <div className={s.portfolio__descr}>
                                    <h4>Дизайн для CMS</h4>
                                    <a href="##">Посмотреть</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.rates}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className={s.rates__title}>Услуги</h3>
                        </div>
                        <div className="col-4">
                            <div className={s.rates__item}>
                                <h5>Landing Page</h5>
                                <img src={rates_img} alt="rates_img"/>
                                <h4>От 200$</h4>
                                <div className={s.rates__descr}>
                                <p> 3-5 дней</p>
                                <p>1 Страница</p>
                                </div>
                                <a href="##">Заказать</a>
                            </div>               
                        </div>
                        <div className="col-4">
                            <div className={s.rates__item}>
                                <h5>Landing Page</h5>
                                <img src={rates_img} alt="rates_img"/>
                                <h4>От 200$</h4>
                                <div className={s.rates__descr}>
                                <p> 3-5 дней</p>
                                <p>1 Страница</p>
                                </div>
                                <a href="##">Заказать</a>
                            </div> 
                        </div>
                        <div className="col-4">
                            <div className={s.rates__item}>
                                <h5>Landing Page</h5>
                                <img src={rates_img} alt="rates_img"/>
                                <h4>От 200$</h4>
                                <div className={s.rates__descr}>
                                <p> 3-5 дней</p>
                                <p>1 Страница</p>
                                </div>
                                <a href="##">Заказать</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;