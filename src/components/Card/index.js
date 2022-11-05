import styles from './Card.module.scss'
import React from 'react';

function Card(props) {
    const [isAdded, setIsAdded] = React.useState(true);
    const onClickFavorite = () => {
        setIsAdded(!isAdded);
    }

    return (
        <div className={styles.card} onClick={props.onClick}>
            <div className={styles.favorite}>   
                <img 
                    width={32}  
                    src={isAdded ? '/img/star-unfavorite.svg' : '/img/star-favorite.svg'}
                    onClick={onClickFavorite}    
                /> 
            </div>
            <div className={styles.box}>
                <img src={props.imageUrl} alt="Фотография машины" />
            </div>
            <div className={styles.description}>
                <div>
                    <h3>{props.title}</h3>
                    <p>{props.year}, {props.vehicleType}</p>
                    <p>{props.engine}, {props.transmission}</p>
                    <p>Пробег {props.milage} км</p>
                </div>
            </div>
            <div className="d-flex justify-center">
                <div className={styles.bg__price}>
                    <div className={styles.price__byn}>
                        <span>{props.price} BYN</span>
                    </div>
                </div>
                <div className={styles.price__usd}><span>≈</span>
                    <span>{Math.round(props.price*2.52)} USD</span>
                </div>
            </div>
        </div>
    );
}

export default Card;

