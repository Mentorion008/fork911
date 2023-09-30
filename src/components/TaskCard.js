import "./TaskCard.css"
import styles from "./TaskCard.module.css"

export const TaskCard = ({task, handleDelete, info}) => {
  return (
    <div className="toto">
      <li className={`${task.completed ? "completed" : "incomplete"}`}> 
          <span className={styles.title}>{task.id} - {task.name} - {info}</span>
          <button className="delete" onClick={()=> handleDelete(task.id)}>Delete</button> 
      </li>
    </div>
  )
}
