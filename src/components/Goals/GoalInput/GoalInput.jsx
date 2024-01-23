import {useState} from 'react';
import Button from '../../UI/Button';
import styles from './GoalInput.module.css';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [isTextValid, setIsTextValid] = useState(true);


  const addGoalHandler = (event) => {
    if(event.target.value.trim().length > 0) {
      setIsTextValid(true);
    }
    setEnteredGoal(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if(enteredGoal.trim() === 0) {
      setIsTextValid(false);
      return;
    }
    props.addGoalText(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <form onSubmit={submitHandler}>
        <div className={`${styles['form-control']} ${!isTextValid && styles.invalid}`}>
           <label>goals:</label>
          <input type='text' value={enteredGoal} onChange={addGoalHandler} />
          
        </div>

      <Button type='submit'>add goal</Button>
      
    </form>
  )
  
  
}
export default GoalInput;