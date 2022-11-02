import styles from './Card.module.scss'

function Card(props) { 
    console.log(props);
    return (
        <div className={styles.card} onClick={props.onClick}>
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
                        <span>99 999 BYN</span>
                    </div>
                </div>
                <div className={styles.price__usd}><span>≈</span>
                    <span>39 431 USD</span>
                </div>
            </div>
        </div>
    );
}

export default Card;

