import {useState} from 'react';
import './App.css';
import GoalInput from './components/Goals/GoalInput/GoalInput';
import GoalList from './components/Goals/GoalList/GoalList';

const DUMMY_GOALS = [
  {id: 'g1', text: 'goal 1'},  
  {id: 'g2', text: 'goal 2'},

];

const App = () => {
  const [goals, setGoals] = useState(DUMMY_GOALS);

  
  const addGoalHandler = (goalTxt) => {
    const goal = {
      id: Date.now() + '' + Math.floor(Math.random()* 78),
      text: goalTxt
      
    }
    setGoals(prevGoals => {
      return[goal, ...prevGoals]
    })
  }
  const deleteGoalHandler = (goalId) => {
    setGoals(prevGoals => {
      const updateGoals = prevGoals.filter(goal => goal.id  !== goalId);
      return updateGoals;
    })
  }

  return(
  <div>
  <section id='goal-form'>
  <GoalInput addGoalText={addGoalHandler} />
  </section>
    <section id='goals'>
    <GoalList goalItems={goals} deleteGoal={deleteGoalHandler} />
    </section>
  </div>
  )
  
}

export default App;