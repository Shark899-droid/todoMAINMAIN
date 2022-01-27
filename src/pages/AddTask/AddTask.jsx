import './AddTask.scss';
import { HiPlus } from 'react-icons/hi';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';

const AddTask = () => {
  return (
    <div className='tasks'>
      <h1>Add List</h1>
      <form action='POST'>
        <div className='form-container'>
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' id='title' />
        </div>
        <div className='form-container'>
          <label htmlFor='item'>Item</label>
          <div className='item-container'>
            <input type='text' name='item' id='item' />

            <HiPlus className='add-item' />
          </div>
        </div>
        <button type='button'>Add</button>
        <Link to='/'>
          <ImCross className='back' />
        </Link>
      </form>
    </div>
  );
};

export default AddTask;
