import './SingleItem.scss';
import { Link } from 'react-router-dom';

const SingleItem = () => {
  return (
    <div className='single-item'>
      <h1>Title</h1>
      <div className='single-item-container'>
        <input type='checkbox' />

        <span>take my breath away</span>
      </div>
      <div className='buttons'>
        <button type='button'>Modify</button>
        <Link to='/'>
          <button type='button'>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleItem;
