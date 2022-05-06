import React from 'react';
import css from './Modal_basket.module.css'
import Nothing from '../modal_content/Nothing';

const ModalBasket = ({ modal, setModal }) => {
    return (
        <div className={css.modal} onClick={() => setModal(false)}>
            <div className={css.modal_content} onClick={e => e.stopPropagation()}>
                <Nothing modal={modal} setModal={setModal}/>
            </div>

        </div>
    );
}

export default ModalBasket;
