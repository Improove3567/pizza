import React from 'react';
import css from './Banner.module.css'


const Banner = () => {
    return (
        <div className={css.banner_block}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStTBgZARwvY6hf-3IINgazFw2ZYoh-okAyPP9xKilaR_MLWZHXCLrJiOEaMlONBUS8UG4&usqp=CAU'
                alt='failed'
                className={css.logo}
            ></img>
            <div className={css.text_block}>
                <span className={css.main_text}>Без свинины</span>
                <span className={css.description_text}>Мы готовим из цыпленка и говядины</span>
            </div>

        </div>
    );
}

export default Banner;
