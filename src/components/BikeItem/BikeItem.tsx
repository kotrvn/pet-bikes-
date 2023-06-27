import styles from '../../pages/Home/Home.module.css'
import React from "react";

export type BikeItemProps = {
    name: string;
    image: string;
    price: number;
}
const BikeItem: React.FC<BikeItemProps> = ({ name, image, price}) => {
    return (
        <div>
            <h1>Bikes</h1>
            <div className={styles.item}>
                <div>
                    <div className={styles.image} style={{
                        backgroundImage: `url(${image})`
                    }} />
                    <div className={styles.info}>
                        <h2>{name}</h2>
                        <p>{new Intl.NumberFormat('ru-Ru', {
                            style: 'currency',
                            currency: 'RUB',
                        }).format(price)}</p>
                        <button>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BikeItem
