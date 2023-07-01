import RaciMain from "./RaciMain";

const TodayContentRACI = () => {
	return (
		<div className="flex flex-col gap-5 h-full">
			<div className="flex gap-3">
				<button className="text-sm rounded-[4px] px-3 py-2 text-[#5855D6] shadow-sm bg-white w-[6em]">
					Add task
				</button>

				<button className="text-sm rounded-[4px] px-3 py-2 text-[#5855D6] shadow-sm bg-white w-[7em]">
					Add guest
				</button>
			</div>
			<RaciMain/>
		</div>
	);
};

export default TodayContentRACI;

// import React, { useState } from 'react';

// const TodayContentRACI = () => {
//   const tasksData = [
//     {
//       title: 'firstTask',
//       responsible: [{ name: 'roma' }],
//       accountable: [{ name: 'platon' }, { name: 'mitya' }],
//       consultant: [{ name: 'nastya' }, { name: 'egor' }],
//       informed: [{ name: 'nika' }, { name: 'ilya' }, { name: 'stat' }],
//     },
//     {
//       title: 'secondTask',
//       responsible: [{ name: 'platon' }],
//       accountable: [{ name: 'roma' }, { name: 'mitya' }],
//       consultant: [{ name: 'nastya' }, { name: 'egor' }],
//       informed: [{ name: 'nika' }, { name: 'ilya' }, { name: 'stat' }],
//     },
//   ];

//   const usersData = [
//     { id: '1', name: 'roma' },
//     { id: '2', name: 'platon' },
//     { id: '3', name: 'mitya' },
//     { id: '4', name: 'nastya' },
//     { id: '5', name: 'egor' },
//     { id: '6', name: 'nika' },
//     { id: '7', name: 'ilya' },
//     { id: '8', name: 'stat' },
//   ];

//   const [tasks, setTasks] = useState(tasksData);
//   const [users, setUsers] = useState(usersData);
//   const [newTask, setNewTask] = useState('');
//   const [newUser, setNewUser] = useState('');

//   const handleUserChange = (e, taskId, userId) => {
//     const { value } = e.target;
//     const updatedTasks = tasks.map(task => {
//       if (task.title === taskId) {
//         const updatedUser = task[userId];
//         updatedUser[0].name = value;
//         return {
//           ...task,
//           [userId]: updatedUser,
//         };
//       }
//       return task;
//     });
//     setTasks(updatedTasks);
//   };

//   const handleTaskChange = (e, taskId) => {
//     const { value } = e.target;
//     const updatedTasks = tasks.map(task => {
//       if (task.title === taskId) {
//         return {
//           ...task,
//           title: value,
//         };
//       }
//       return task;
//     });
//     setTasks(updatedTasks);
//   };

//   const handleNewTaskSubmit = e => {
//     e.preventDefault();
//     if (newTask.trim() === '') return;
//     const newTaskData = {
//       title: newTask,
//       responsible: users.map(user => ({ name: user.name })),
//       accountable: users.map(user => ({ name: user.name })),
//       consultant: users.map(user => ({ name: user.name })),
//       informed: users.map(user => ({ name: user.name })),
//     };
//     setTasks([...tasks, newTaskData]);
//     setNewTask('');
//   };

//   const handleNewUserSubmit = e => {
//     e.preventDefault();
//     if (newUser.trim() === '') return;
//     const newUserItem = { id: String(users.length + 1), name: newUser };
//     setUsers([...users, newUserItem]);
//     setNewUser('');
//   };

//   return (
//     <div>
//       <form onSubmit={handleNewTaskSubmit}>
//         <input
//           type="text"
//           placeholder="Enter a new task"
//           value={newTask}
//           onChange={e => setNewTask(e.target.value)}
//         />
//         <button type="submit">Add Task</button>
//       </form>

//       <form onSubmit={handleNewUserSubmit}>
//         <input
//           type="text"
//           placeholder="Enter a new user"
//           value={newUser}
//           onChange={e => setNewUser(e.target.value)}
//         />
//         <button type="submit">Add User</button>
//       </form>

//       <table>
//         <thead>
//           <tr>
//             <th>Tasks</th>
//             {users.map(user => (
//               <th key={user.id}>{user.name}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.map(task => (
//             <tr key={task.title}>
//               <td>
//                 <input
//                   type="text"
//                   value={task.title}
//                   onChange={e => handleTaskChange(e, task.title)}
//                 />
//               </td>
//               {users.map(user => {
//                 const role = Object.keys(task).find(
//                   key => Array.isArray(task[key]) && task[key].some(u => u.name === user.name)
//                 );
//                 return (
//                   <td key={user.id}>
//                     <select
//                       value={role || ''}
//                       onChange={e => handleUserChange(e, task.title, user.id)}
//                     >
//                       <option value="">Select role</option>
//                       <option value="responsible">Responsible</option>
//                       <option value="accountable">Accountable</option>
//                       <option value="consultant">Consultant</option>
//                       <option value="informed">Informed</option>
//                     </select>
//                   </td>
//                 );
//               })}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TodayContentRACI;
