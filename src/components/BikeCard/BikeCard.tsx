import React from "react";
import {Link} from "react-router-dom";
import styles from '../../views/Home/Home.module.css'
import React from "react";

import styles from './BikeCard.module.scss'

export type BikeItemProps = {
    name: string;
    image: string;
    price: number;
}

const BikeCard: React.FC<BikeItemProps> = ({ id, name, picture, price}) => {
    return (
        <div className={styles.item}>
            <div className={styles.item__image} style={{
                backgroundImage: `url(${picture})`
            }} />
            <div className={styles.item__info}>
                <h2 className={styles.item__name}>{name}</h2>
                <p className={styles.item__price}>{new Intl.NumberFormat('ru-Ru', {
                    style: 'currency',
                    currency: 'RUB',
                }).format(price)}</p>
                <Link to={`/bikes/${id}`} className={styles.item__link} >Read more</Link>
            </div>
        </div>
    )
}

export default BikeCard

