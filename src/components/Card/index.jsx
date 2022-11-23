import styles from './Card.module.scss'
import React from 'react';

function Card({ title, imageUrl, year, vehicleType, engine, transmission, milage, price, onFavorite, onClick }) {
    const [isAdded, setIsAdded] = React.useState(true);
    const onClickFavorite = () => {
        onFavorite({title, imageUrl, year, vehicleType, engine, transmission, milage, price});
        setIsAdded(!isAdded);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img
                    width={32}
                    src={isAdded ? '/img/unfavorite.svg' : '/img/favorite.svg'}
                    onClick={onClickFavorite} alt="favorite"
                />
            </div>
            <div onClick={onClick}>
                <div className={styles.box}>
                    <img src={imageUrl} alt="Фотография машины" />
                </div>
                <div className={styles.description}>
                    <div>
                        <h3>{title}</h3>
                        <p>{year}, {vehicleType}</p>
                        <p>{engine}, {transmission}</p>
                        <p>Пробег {milage} км</p>
                    </div>
                </div>
                <div className="d-flex justify-center">
                    <div className={styles.bg__price}>
                        <div className={styles.price__byn}>
                            <span>{price} BYN</span>
                        </div>
                    </div>
                    <div className={styles.price__usd}><span>≈</span>
                        <span>{Math.round(price * 2.52)} USD</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

