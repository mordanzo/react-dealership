function Card() {
    return (
        <div class="card">
            <h3>Название автомобиля</h3>
            <img src="/img/noimage.jpg" alt="" />
            <div class="brief-description">
                <p>Год, тип кузова</p>
                <p>Дизель, 2.0, МКПП (АКПП)</p>
                <p>Пробег 999999 км</p>
            </div>
            <div class="mini-price">
                <div class="bg-price">
                    <div class="price-byn">
                        <span id="price">99 999 BYN</span>
                    </div>
                </div>
                <div class="price-usd"><span>≈</span>
                    <span id="usd-price">39 431 USD</span>
                </div>
            </div>
        </div>
    );
}

export default Card;

