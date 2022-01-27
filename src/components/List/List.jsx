import './List.scss';

const List = () => {
  return (
    <div className='list'>
      <h3>Trip to Paris</h3>
      <hr />
      <div className='inner-list'>
        <input type='checkbox' />
        <span>Packing lug..</span>
      </div>
      <div className='inner-list'>
        <input type='checkbox' />
        <span>Packing lug..</span>
      </div>
      <div className='inner-list'>
        <input type='checkbox' />
        <span>Packing lug..</span>
      </div>
      <div className='inner-list'>
        <input type='checkbox' />
        <span>Packing lug..</span>
      </div>
      <div className='inner-list'>
        <input type='checkbox' />
        <span>Packing lug..</span>
      </div>
    </div>
  );
};

export default List;
