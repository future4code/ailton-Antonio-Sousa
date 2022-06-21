import bar from "./img/menu-aberto.png";
import foto from "./img/youtube.png";
import camera from "./img/camera-de-video.png";
import pontos from "./img/menu-de-pontos.png";
import sino from "./img/sino.png";
import lupa from "./img/lupa-de-detetive.png"
import './App.css';

function App() {
  const titulo = "Titulo do video"

  function reproduzVideo() {
    alert("O video está sendo reproduzido")
  }
  return (
    <body>
      <div className='tela-inteira'>
        <header>
          <div className="menu_left">
            <img src={bar} />
            <img src={foto} />
          </div>
          <div className="menu_center">
            <input type="text" placeholder="Pesquisar" id="campoDeBusca" />
            <img src={lupa} />
          </div>
          <div className="menu_rigth">
            <img src={camera} />
            <img src={pontos} />
            <img src={sino} />
          </div>

        </header>

        <main>
          <nav className='menu-vertical'>
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr>
              </hr>
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=1 " alt=""></img>
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media2" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=2 " alt=""></img>
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media3" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=3 " alt=""></img>
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media4" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=4 " alt=""></img>
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media5" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=5 " alt=""></img>
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media6" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=6 " alt=""></img>
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media7" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=7 " alt=""></img>
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media8" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=8 " alt=""></img>
              <h4>{titulo}</h4>
            </div>
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>

    </body>
  );
}

export default App;
