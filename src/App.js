import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto.js'
import FullName from './Component/Profile/FullName.js'
import Address from './Component/Profile/Address.js'


function App() {
  return (
    <>   <section className='content-box'>
    <ProfilePhoto/>
    <FullName/>
    <Address/>
  </section>
    <div className='triangle-container'><div className='triangle'>
     
      </div></div>
    </>
         
  );
}

export default App;
