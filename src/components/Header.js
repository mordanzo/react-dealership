function Header() {
    return (
        <header>
            <div className="container d-flex justify-between align-center clear">
                <div className="headerleft">
                    <img width={140} src="/img/LogoOW.png" />
                </div>
                <div className="headermiddle">
                    <ul className="d-if">
                        <li><a href="#">КАТАЛОГ</a></li>
                        <li><a href="#">ОБМЕН</a></li>
                        <li><a href="#">ПРОДАТЬ АВТО</a></li>
                        <li><a href="#">ПОДБОР</a></li>
                        <li><a href="#">О НАС</a></li>
                    </ul>
                </div>
                <div className="headerright d-flex justify-around">
                    <button className="log align-center d-if">
                        <span>Войти</span>
                    </button>
                    <button className="reg align-center d-if">
                        <span>Регистрация</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;