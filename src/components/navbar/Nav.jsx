import css from './Nav.module.css'

function Nav() {
    return (
        <div className={css.container}>
            <div className={css.nav_block}>
                <span className={css.link}>Пицца</span>
                <span className={css.link}>Комбо</span>
                <span className={css.link}>Закуски</span>
                <span className={css.link}>Десерты</span>
                <span className={css.link}>Напитки</span>
                <span className={css.link}>Другие товары</span>
                <span className={css.link}>Акции</span>
                <span className={css.link}>Контакты</span>
                <span className={css.link}>О нас</span>
                <span className={css.link}>Прямой эфир</span>
            </div>
            <div className="btn">
                <button className={css.button}>Корзина</button>
            </div>
        </div>
    );
}

export default Nav;