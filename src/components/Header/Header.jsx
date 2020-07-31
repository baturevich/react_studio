import React from 'react'
import s from './Header.module.scss'
const Header = (props) => {
    return (
        <header className={s.header}>
            <div className="container">
                <div className="row ai-center">
                    <div className="col-3">
                        <div className={s.logo}>
                            <span>Vision Studio</span>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul className={s.nav}>
                            <li><a href="##">О нас</a></li>
                            <li><a href="##">Портфолио</a></li>
                            <li><a href="##">Услуги</a></li>
                            <li><a href="##">Контакты</a></li>
                        </ul>
                    </div>
                    <div className="col-3 ml-auto">
                <a href="##" className={s.contact_btn}>Заказать звонок</a>
            </div>
                </div>
               
            </div>     
        </header>
    )
}
export default Header;