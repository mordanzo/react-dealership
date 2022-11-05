import React from 'react';
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

const arr = [
  { 
    title: 'BMW M5 Competition', 
    year: '2006',
    imageUrl: '/img/1.jpg',
    price: 99999,
  },
  { 
    title: 'Ford Manteo', 
    year: '2001',
    imageUrl: '/img/2.jpg',
    price: 82999,
  },
  { 
    title: 'Audi Q8', 
    year: '2012',
    imageUrl: '/img/3.jpg',
    price: 76899,
  },
  { 
    title: 'Nissan Qashkai', 
    year: '2019',
    imageUrl: '/img/4.jpg',
    price: 4899,
  },
];

function App() {
  const [favoriteOpened, setFavoriteOpened] = React.useState(false);

  return (
    <div className="wrapper">
      {favoriteOpened && <Drawer onClose = {() => setFavoriteOpened(false)}/>}
      <Header onClickFavoriteMark = {() => setFavoriteOpened(true)}/>
      <div className="main">
        <div className="slider">
        </div>
        <div className="uplineshadow">
          <div className="upline"></div>
        </div>
        <div className="container">
          <div className="special-offers">
            <h1>СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ</h1>
            <div className='card-items d-flex justify-between'>
              {arr.map((obj) => (
                <Card
                  title={obj.title}
                  imageUrl={obj.imageUrl}
                  year={obj.year}
                  vehicleType="Седан"
                  engine="Дизель 2.0"
                  transmission="МКПП"
                  milage={125000}
                  price={obj.price}
                  onClick={() => console.log(obj)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
