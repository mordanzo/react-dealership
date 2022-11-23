import { Link } from 'react-router-dom';

function Header({onClickFavoriteMark}) {
    return (
        <header>
            <div className="container d-flex justify-between align-center">
                <div className="headerleft">
                <Link to="/">
                    <img width={140} src="/img/LogoOW.png" alt='logo'/>
                </Link>
                </div>
                <div className="headermiddle">
                    <ul className="d-if">
                        <li><Link to="catalog">КАТАЛОГ</Link></li>
                        <li><a href>ОБМЕН</a></li>
                        <li><a href>ПРОДАТЬ АВТО</a></li>
                        <li><a href>ПОДБОР</a></li>
                        <li><a href>О НАС</a></li>
                    </ul>
                </div>
                <img className="cu-p" width={39}
                    src="/img/profileicon.png" alt='profile-icon'/>
                <img className="favoriteMark cu-p" width={32}
                    src="/img/favoriteMark.png" alt='mark' onClick={onClickFavoriteMark} />
                <div className="headerright d-flex justify-between">
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