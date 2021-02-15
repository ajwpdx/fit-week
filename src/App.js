import './styles/index.scss'

import Header from './components/layouts/Header'
import Planner from './components/layouts/Planner'
import WorkoutLibrary from './components/layouts/WorkoutLibrary';
import MyPlan from './components/views/MyPlan';

function App() {
  return (
    <div className="App">
      <MyPlan/>
    </div>
  );
}

export default App;
