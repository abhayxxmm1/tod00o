// TodoApp.jsx
import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Add a task
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Toggle done / not-done
  const toggleTaskCompletion = (index) => {
    const updated = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
  };

  // Delete a task
  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h1>To-Do List</h1>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
        onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
        style={{ width: '100%', padding: 8, marginBottom: 10 }}
      />

      <button onClick={handleAddTask} style={{ width: '100%', padding: 8 }}>
        Add Task
      </button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: 20 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
          >
            <span
              onClick={() => toggleTaskCompletion(index)}
              style={{ cursor: 'pointer' }}
            >
              {task.text}
            </span>

            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
