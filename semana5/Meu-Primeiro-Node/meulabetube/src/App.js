import logo from './img/23.webp';
import busca from './img/busca.png';
import './App.css';

function App() {

  const titulo = "Título do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div>
      <body>

        <header>

          <div className="icone-e-texto">
            <img className="icone" src={logo} alt="icone de filme" />
            <a href="index.html"><h2>LabeTube</h2></a>
          </div>
          <div className="buscar">
            <input type="search" name="Busca" id="busca" placeholder="Buscar..." />
            <img className="iconebusca" src={busca} alt="Buscar" />
          </div>
        </header>

        <main className="main-container">

          <div onClick={reproduzVideo} className="card-videos">
            <video>
              <source src="https://storage.googleapis.com/future-apis.appspot.com/1.mp4" type="video/mp4" />
            </video>
            <h3> Ireland's Beauty</h3>
            <p> Lindas paisagens da Irlanda</p>
          </div>
          <div onClick={reproduzVideo} className="card-videos">
            <video>
              <source src="https://storage.googleapis.com/future-apis.appspot.com/2.mp4" type="video/mp4" />
            </video>
            <h3> Plaquetas</h3>
            <p> Plaquetas sanguineas</p>
          </div>
          <div onClick={reproduzVideo} className="card-videos">
            <video>
              <source src="https://storage.googleapis.com/future-apis.appspot.com/3.mp4" type="video/mp4" />
            </video>
            <h3> Arte</h3>
            <p> Arte em movimento</p>
          </div>
          <div onClick={reproduzVideo} className="card-videos">
            <video>
              <source src="https://storage.googleapis.com/future-apis.appspot.com/4.mp4" type="video/mp4" />
            </video>
            <h3> Mar</h3>
            <p> Mar em movimento</p>
          </div>
          <div onClick={reproduzVideo} className="card-videos">
            <video>
              <source src="https://storage.googleapis.com/future-apis.appspot.com/5.mp4" type="video/mp4" />
            </video>
            <h3> Paisagem</h3>
            <p> Paisagem em moviemnto</p>
          </div>
          <div onClick={reproduzVideo} className="card-videos">
            <video>
              <source src="https://storage.googleapis.com/future-apis.appspot.com/6.mp4" type="video/mp4" />
            </video>
            <h3> Lebre</h3>
            <p> Lebre fofinha</p>
          </div>
          <div onClick={reproduzVideo} className="card-videos">
            <video>
              <source src="https://storage.googleapis.com/future-apis.appspot.com/7.mp4" type="video/mp4" />
            </video>
            <h3> Espaço</h3>
            <p> Espaço em movimento</p>
          </div>
          <div onClick={reproduzVideo} className="card-videos">
            <video>
              <source src="https://storage.googleapis.com/future-apis.appspot.com/8.mp4" type="video/mp4" />
            </video>
            <h3> Foguete</h3>
            <p> decolagem de um foguete</p>
          </div>
          <div onClick={reproduzVideo} className="card-videos">
            <video>
              <source src="https://storage.googleapis.com/future-apis.appspot.com/9.mp4" type="video/mp4" />
            </video>
            <h3> Pista</h3>
            <p> Pista vista de cima</p>
          </div>
          <div onClick={reproduzVideo} className="card-videos">
            <video>
              <source src="https://storage.googleapis.com/future-apis.appspot.com/10.mp4" type="video/mp4" />
            </video>
            <h3> Cachoeira</h3>
            <p> Cachoeira em movimento</p>
          </div>

        </main>

        <footer>
          <p> LabeTube  </p>
        </footer>

      </body>
    </div>
  );
}

export default App;
