import './App.css';
import Address from './Component/Profile/Address';
import Name from './Component/Profile/FullName';
import Photo from './Component/Profile/ProfilPhoto';

function App() {
  return (
    <div className="App">
      <Photo />
      <div className="data">
      <Name />
      <Address />
      </div>
    </div>
  );
}

export default App;
