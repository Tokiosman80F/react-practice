import React, { useState } from "react";
import Search from "./Search";
import TaskAction from "./TaskAction";
import TaskTable from "./TaskTable";
import TaskModal from "./TaskModal";

export default function TaskBoard() {
  const [tasks, setTasks] = useState([
    {
      id: crypto.randomUUID(),
      title: "react",
      desc: "lorem is some",
      tags: ["toki", "osman"],
      priority: "high",
      isFav: true,
    },
  ]);
  const [taskModal, setTaskModal] = useState(false);
  function handleAddTask(task) {
    let newTask=[...tasks,task]
    setTasks(newTask)
  }

  function handleTaskFav(taskId){
    setTasks(tasks.map((task)=>{
      if(task.id==taskId) {
        return {...task,isFav:!task.isFav}
      }else {
        return task
      }
    }))
    
  }

  function handleDelete(taskId){
    const taskAfterDelete=tasks.filter((task)=>  task.id!==taskId)
    setTasks(taskAfterDelete)
    
  }

  function handleDeleteAll(){
    tasks.length=0
    setTasks([...tasks])

  }

  function handleSearch(searchText) {
      console.log(searchText);
      const filterData=tasks.filter((task)=>
        task.title.toLowerCase().includes(searchText.toLowerCase())
      )
      setTasks([...filterData])
  }
  return (
    <div>
      <div>{taskModal && <TaskModal onSave={handleAddTask} onClose={()=>setTaskModal(false)} />}</div>
      <section className=" mb-20  relative" id="tasks">
        <div className=" container mx-auto">
          <Search onSearch={handleSearch} />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16  text-white/80">
            <TaskAction onAdd={()=>setTaskModal(true)} onDeleteAll={handleDeleteAll}  />
            <TaskTable tasks={tasks} isTaskFav={handleTaskFav} onDelete={handleDelete} />
          </div>
        </div>
      </section>
    </div>
  );
}
