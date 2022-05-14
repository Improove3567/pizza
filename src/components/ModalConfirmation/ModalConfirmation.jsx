import React from 'react';
import css from './ModalConfirmation.module.css'

const ModalConfirmation = ({ setConfirmation }) => {
    return (
        <div>
            <div className={css.modal} onClick={() => setConfirmation(false)}>
                <div className={css.modal_content} onClick={e => e.stopPropagation()}>
                    <div className={css.text_container}>
                        <h1 className={css.main_text}>Вход на сайт</h1>
                        <p className={css.title}> Мы отправили код на ваш номер</p>
                    </div>
                    <div className={css.input_block}>
                        <input className={css.input} type='text' />
                        <input className={css.input} type='text' />
                        <input className={css.input} type='text' />
                        <input className={css.input} type='text' />
                    </div>
                    <button className={css.btn} onClick={() => setConfirmation(false)}>Получить новый код</button>
                </div>

            </div>
        </div>
    );
}

export default ModalConfirmation;
