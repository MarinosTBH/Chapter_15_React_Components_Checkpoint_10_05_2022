import './App.css';
import logo from './logo.svg';



function App() {
  return (
    <><div class="sidenav">
      
      <div class="login-main-text">
        <h2>Application<br></br> Login Page</h2>
        <p>Login or register from here to access.</p>
        <img src={logo} className="app-logo" alt="logo"/>
        <p> <small>Powered by React</small></p>
      </div>
      <p className="creator"><small>Mohamed Amine Terbah</small></p>
    </div>
    <div class="main">
        <div class="col-md-6 col-sm-12">
          <div class="login-form">
            <form>
              <div class="form-group">
                <label>User Name</label>
                <input type="text" class="form-control" placeholder="User Name">
                </input></div>
              <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" placeholder="Password">
                </input></div>
              <button type="submit" class="btn btn-black">Login</button>
              <button type="submit" class="btn btn-secondary">Register</button>
            </form>
          </div>
        </div>
      </div></>
      
  );
}

export default App;
