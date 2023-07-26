import React, { useState } from 'react';

const TaskChecklist = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Complete HR paperwork', completed: false },
    { id: 2, task: 'Set up workstation', completed: false },
    { id: 3, task: 'Attend orientation', completed: false },
    { id: 4, task: 'Meet team members', completed: false },
    { id: 5, task: 'Review company policies', completed: false },
  ]);

  const handleTaskChange = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>New Employee Task Checklist</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleTaskChange(task.id)}
              />
              {task.task}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskChecklist;
