import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { BoxCard} from "./BoxCard";

export const TaskList = (props) => {
    
  const [tasks, setTask] = useState([
    {id: 5271, name: "Record Lectures", completed: false},
    {id: 7825, name: "Edit React Lectures", completed: true},
    {id: 8391, name: "Watch Lectures", completed: true}
  ]);

  const [show, setShow] = useState(true); 

  function handleDelete(id){
    setTask(tasks.filter(task => task.id !== id));
  }

  return (
  <div className="tasklist">
    <h1>Task List {props.title} {props.subtitle}</h1>
    <ul>
        <button className="trigger" onClick={() => setShow(!show)}>Toggle</button>
        { show && tasks.map((task) => (
        <TaskCard key={task.id} info={props.info} task={task} handleDelete={handleDelete}/>
        ))}
    </ul>
    <BoxCard result="success">
      <p className="title">Lorem, ipsum dolor</p>
      <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo sint, ipsa autem quod animi temporibus nulla adipisci doloribus cum velit repellat obcaecati. Harum ipsam voluptatibus voluptatum! Vitae voluptatum sit modi?</p>
    </BoxCard>
    
    <BoxCard result="warning">
      <p className="title">Lorem, ipsum dolor</p>
      <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perspiciatis ducimus quam, earum commodi obcaecati dolorum officiis! Repellat delectus vitae odio inventore illum nihil, optio sit porro aliquam? Repellendus, aperiam.</p>
    </BoxCard>
  </div>
  )
}
