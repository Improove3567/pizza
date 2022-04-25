import css from './Order.module.css'

function Order() {
    return (
        <div className='container'>
            <span className={css.main_text}>Часто заказывают</span>
            <div className={css.products}>
                <div className={css.card}>Пеперони</div>
                <div className={css.card}>2 пиццы</div>
                <div className={css.card}>Мексиканская</div>
                <div className={css.card}>Додстер</div>
                <div className={css.card}>Бруслетики, 16 шт</div>
            </div>  

        </div>
    );
}

export default Order;