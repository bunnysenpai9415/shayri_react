import './App.css';
import AppRouter from './route/AppRouter';
// import Navbar from './components/Navbar';
import NavScrollExample from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavScrollExample/>
      {/* <Navbar /> */}
      <AppRouter/>  
    </div>
  );
}

export default App;
