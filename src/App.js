import './App.scss';
import Header from './components/Header/Header';
import Lists from './pages/Lists/Lists';
import Task from './pages/AddTask/AddTask';
import SingleItem from './pages/SingleItem/SingleItem';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Lists />} />
        <Route path='/addtask' element={<Task />} />
        <Route path='/singletask/:id' element={<SingleItem />} />
      </Routes>
    </div>
  );
}

export default App;
