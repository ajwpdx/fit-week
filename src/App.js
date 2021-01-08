import './styles/index.scss'

import Header from './components/Header'
import SavedWorkouts from './components/SavedWorkouts'
import Planner from './components/Planner'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main-container'>
      <Planner/>
      <SavedWorkouts/>
      </div>
    </div>
  );
}

export default App;
