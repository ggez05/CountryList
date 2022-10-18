import Header from './components/header/header.component';
import FilterBar from './components/filterbar/filterbar.component';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div className='App'>
        <FilterBar />
      </div>
    </div>
  );
}

export default App;
