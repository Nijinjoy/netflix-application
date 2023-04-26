
import './App.css';
import {action,originals,horror} from './urls'
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Rowpost from './components/Rowpost/Rowpost';



function App() {
  return (
    <div className="App">
   <Header/>
   <Banner/>
   <Rowpost url={originals} title='Netflix Originals' />
   <Rowpost url={action} title='Action Movies' isSmall  />
   <Rowpost url={horror} title='Horror Movies' isSmall  />
    </div>
  );
}

export default App;
