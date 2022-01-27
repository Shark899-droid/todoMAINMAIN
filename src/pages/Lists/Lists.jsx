import './Lists.scss';
import List from '../../components/List/List';
import { HiPlus } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Lists = () => {
  return (
    <>
      <div className='lists'>
        <div className='add-list'>
          <Link to='/addtask'>
            <HiPlus />
          </Link>
        </div>
        <span>Add list</span>
      </div>
      <div className='list-container'>
        <div className='list-container-grid'>
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
        </div>
      </div>
    </>
  );
};

export default Lists;
