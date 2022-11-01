import Card from './components/Card'
import Header from './components/Header'

const arr = [
  { 
    title: 'BMW M5 Competition', 
    year: '2006',
    imageUrl: '/img/1.jpg',
  },
  { 
    title: 'Ford Manteo', 
    year: '2001',
    imageUrl: '/img/2.jpg',
  },
  { 
    title: 'Audi Q8', 
    year: '2012',
    imageUrl: '/img/3.jpg',
  },
  { 
    title: 'Nissan Qashkai', 
    year: '2019',
    imageUrl: '/img/4.jpg',
  },
];

function App() {
  return (
    <div className="wrapper">
      <Header />
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
