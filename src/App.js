import Card from './components/Card'
import Header from './components/Header'

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="main">
        <div className="slider">
        </div>
          <div className="uplineshadow">
            <div class="upline"></div>
          </div>
          <div class="container">
            <div class="special-offers">
                <h1>СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ</h1>
                <Card/>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
