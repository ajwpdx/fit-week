import './styles/index.scss'

import Header from './components/layouts/Header'
import Planner from './components/layouts/Planner'
import WorkoutLibrary from './components/layouts/WorkoutLibrary';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main-container'>
      <Planner/>
      <WorkoutLibrary/>
      </div>
    </div>
  );
}

export default App;
