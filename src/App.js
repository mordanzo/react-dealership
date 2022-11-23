import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Catalog from './pages/Catalog';

import 'macro-css';
import './scss/app.scss';

function App() {
  const [items, setItems] = React.useState([]);
  const [favoritesItems, setFavoritesItems] = React.useState([]);
  const [favoriteOpened, setFavoriteOpened] = React.useState(false);

  React.useEffect(() => {
    // Получаем таблицу items с backend
    axios.get('https://636786edf5f549f052d70d3e.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    // Получаем таблицу favorites с backend
    axios.get('https://636786edf5f549f052d70d3e.mockapi.io/favorites').then((res) => {
      setFavoritesItems(res.data);
    });
  }, []);

  //Добавляем объект в массив на backend
  const onAddToFavorites = (obj) => {
    axios.post('https://636786edf5f549f052d70d3e.mockapi.io/favorites', obj);
    setFavoritesItems((prev) => [...prev, obj]);
  };

  const onRemoveFavorites = (id) => {
    console.log(id);
    axios.delete(`https://636786edf5f549f052d70d3e.mockapi.io/favorites/${id}`);
    setFavoritesItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div className="wrapper">
      <Header onClickFavoriteMark={() => setFavoriteOpened(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              onClose={() => setFavoriteOpened(false)}
              favoritesItems={favoritesItems}
              favoriteOpened={favoriteOpened}
              onAddToFavorites={onAddToFavorites}
              onRemoveFavorites={onRemoveFavorites}
            />
          }
        />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/catalog" element={<Catalog items={items} />} />
      </Routes>
    </div>
  );
}

export default App;
