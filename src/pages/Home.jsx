import React from 'react'
import { Link } from "react-router-dom"
import Card from "../components/Card";
import Drawer from "../components/Drawer";

const Home = ({ items, onClose,
  favoriteOpened,
  favoritesItems,
  onRemoveFavorites,
  onAddToFavorites }) => {
  return (
    <div className="wrapper">
      {favoriteOpened && (
        <Drawer
          items={favoritesItems}
          onClose={() => onClose(false)}
          onRemove={onRemoveFavorites}
        />
      )}
      <div className="main">
        <div className="slider"></div>
        <div className="mainbg">
          <div className="uplineshadow">
            <div className="upline"></div>
          </div>
        </div>
        <div className="special-offers">
          <div className="container pb-30">
            <h1>СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ</h1>
            <div className="card-items d-flex justify-between">
              {items.map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  imageUrl={item.imageUrl}
                  year={item.year}
                  vehicleType="Седан"
                  engine="Дизель 2.0"
                  transmission="МКПП"
                  milage={125000}
                  price={item.price}
                  onClick={() => console.log(item)}
                  onFavorite={(obj) => onAddToFavorites(obj)}
                  onRemove={onRemoveFavorites}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="catalog">
          <div className="banner d-flex align-center">
            <div className="bannerleft ">
              <h1>ПОСМОТРИ ВЕСЬ КАТАЛОГ АВТОМОБИЛЕЙ</h1>
              <p>
                Подбери себе автомобиль по нужным тебе характеристикам и
                предпочтениям. Просто переходи по ссылке в каталог и бронируй. У
                нас огромный ассортимент, поверь, ты мы тебя не разочаруем!
              </p>
              <Link to="/catalog"><button>Перейти в каталог</button></Link>
            </div>
            <div className="bannerright">
              <p>БОЛЬШОЙ ВЫБОР АВТОМОБИЛЕЙ</p>

              <div className="triangle">
                <div className="smalltriangle"></div>
              </div>
              <img width={610} height={145} src="/img/bannercars.png" alt="cars" />
            </div>
          </div>
        </div>
        <div className="webuy">
          <div className="lightbg">
            <div className="downline"></div>
          </div>
        </div>
        <div className="services"></div>
      </div>
      <footer></footer>
    </div>
  );
};
export default Home;