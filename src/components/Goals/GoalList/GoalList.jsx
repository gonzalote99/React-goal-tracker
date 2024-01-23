import GoalItem from '../GoalItem/GoalItem';
  import './GoalList.css';

const GoalList = (props) => {
  if(props.goalItems.length === 0) {
    return <p style={{textAlign: 'center'}}>no goals</p>
  }

  return(
    <ul className='goal-list'>
      {
        props.goalItems.map(goal => 
          <GoalItem
           key={goal.id}
            goalObj={goal}
            deleteGoal={props.deleteGoal}
            />
          
        )
      }
    </ul>
  )
}

export default GoalList;