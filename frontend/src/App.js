import './App.css';
import Router from './pages/Router';

function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;

import React, { useState } from 'react';

// const App = () => {
//   const [nameList, setNameList] = useState(['Ahmad', 'Anas', 'Noman']);
//   const [val, setVal] = useState('');
//   const [id, setId] = useState('');
//   const handleOnChange = (e) => {
//     e.preventDefault();
//     if (id === '') {
//       setNameList([...nameList, val]);
//       setVal('');
//     }
//     if (id !== '') {
//       const newArr = [...nameList];
//       newArr[id] = val;
//       setNameList(newArr);
//       setId('');
//       setVal('');
//     }
//   };
//   const delteName = (index) => {
//     const filterArr = nameList.filter((item, i) => {
//       return index !== i;
//     });
//     setNameList(filterArr);
//   };
//   const editName = (index) => {
//     setVal(nameList[index]);
//     setId(index);
//   };
//   return (
//     <div>
//       <h1>CRUP OPERATIONS</h1>
//       <form action="" onSubmit={handleOnChange}>
//         <input
//           type="text"
//           value={val}
//           onChange={(e) => {
//             setVal(e.target.value);
//             console.log(e.target.value);
//           }}
//         />
//         <button type="submit">ADD TO DO</button>
//       </form>
//       {nameList.map((item, index) => {
//         return (
//           <ul key={index}>
//             <li>
//               {item} <button onClick={(e) => editName(index)}>edit</button>
//               <button onClick={(e) => delteName(index)}>delete</button>
//             </li>
//           </ul>
//         );
//       })}
//     </div>
//   );
// };

// export default App;
