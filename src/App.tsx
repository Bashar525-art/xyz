import './App.css'
import { Outlet } from 'react-router-dom';



function App() {


  return (

    <main>
      <h1>XYZ — Fil de tweets</h1>
      <Outlet />
    </main>
  );

}

export default App;
