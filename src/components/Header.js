function Header(props) {
    return (
        <div className="container">
            <header className="d-flex justify-between align-center">
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
                    <img className="favoriteMark cu-p" width={32} 
                    src="/img/favoriteMark.png" onClick={props.onClickFavoriteMark}/>
                    <div className="headerright d-flex justify-between">
                        <button className="log align-center d-if">
                            <span>Войти</span>
                        </button>
                        <button className="reg align-center d-if">
                            <span>Регистрация</span>
                        </button>
                        <img className="profile__avatar" 
                             width={32} 
                             src="/img/profile-avatar.svg"/>
                    </div>
            </header>
        </div>
    );
}

export default Header;