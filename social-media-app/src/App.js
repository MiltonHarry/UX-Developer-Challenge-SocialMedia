import MainTotal from './components/MainTotal/MainTotal';
import Overview from './components/Overview/Overview';
import Header from './components/Header/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainTotal></MainTotal>
      <Overview></Overview>
    </div>
  );
}

export default App;
