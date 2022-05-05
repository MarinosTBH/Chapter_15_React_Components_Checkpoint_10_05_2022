import './App.css';
import Component from './Form.js'
import logo from './logo.svg';



function App() {
  return (
    <div className="main">
      <section>
        <div className='logoo'>
          <img src={logo} className="app-logo" alt="logo"/>
          <p className="pbr"><small>Powered by React</small></p>
        </div>
        <Component/>
        <p className="creator"><small>Mohamed Amine Terbah</small></p>
      </section>
    </div>
         
  );
}

export default App;
