import React from 'react';
import styles from './Catalog.module.scss';

const CatalogBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Каталог автомобилей</h1>
        <div>
          <div className={styles.categories}>
            <ul>
              <li>Марка</li>
              <li>Тип кузова</li>
              <li>Тип даигателя</li>
              <li>Коробка передач</li>
              <li>Привод</li>
            </ul>
          </div>
          <div className={styles.sort}></div>
        </div>
        <div className={styles.items}></div>
      </div>
    </div>
  );
};
export default CatalogBlock;
