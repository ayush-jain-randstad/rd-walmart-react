import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
function App() {
  return (
  //  <Router> 
  //     <div>
  //       <Header />
  //     </div>
  //   </Router>
  <div className='min-h-screen flex flex-wrap content-between'>
        <div className='w-full block'>
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
    </div>
  );
}

export default App;
