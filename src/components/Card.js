function Card(props) {
    return (
        <div className="card">
            <div className="box">
                <img src={props.imageUrl} alt="Фотография машины" />
            </div>
            <div className="description">
                <div>
                    <h3>{props.title}</h3>
                    <p>{props.year}, {props.vehicleType}</p>
                    <p>{props.engine}, {props.transmission}</p>
                    <p>Пробег {props.milage} км</p>
                </div>
            </div>
            <div className="d-flex justify-center">
                <div className="bg-price">
                    <div className="price-byn">
                        <span id="price">99 999 BYN</span>
                    </div>
                </div>
                <div className="price-usd"><span>≈</span>
                    <span id="usd-price">39 431 USD</span>
                </div>
            </div>
        </div>
    );
}

export default Card;

