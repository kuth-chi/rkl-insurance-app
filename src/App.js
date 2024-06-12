import logo from './logo.png';
import './App.css';
// Bootstrap icon
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import TotalSpent from './components/TotalExpense';
import Currency from './components/Currency';

function App() {
  return (
    <div className="App">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-brand">
            <img src={logo} alt="Logo" width="32" height="30" class="d-inline-block align-text-top" />
             <span className='ms-2'>RKL Insurance</span>
          </div>
        </div>
      </nav>
      <AppProvider>
        <div className='fluid-container p-4'>
            <h1 className='mt-3'>Company's Budget Allocation</h1>
            <div className='row mt-3 gap-3'>
                <div className='col-sm'>
                    <Budget />
                </div>
                <div className='col-sm'>
                    <Remaining />
                </div>
                <div className='col-sm'>
                    <TotalSpent />
                </div>
                <div className='col-sm'>
                    <Currency />
                </div>
            </div>
            <div className='row '>
                <div className='col-sm'>
                    Expense List
                </div>
            </div>
            <h3 className='mt-3'>Change allocation</h3>
            <div className='row mt-3'>
                <div className='col-sm'>
                    Allocation 
                </div>
            </div>
        </div>
    </AppProvider>
    </div>
  );
}

export default App;
