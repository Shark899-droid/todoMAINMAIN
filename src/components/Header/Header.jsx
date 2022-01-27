import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <h1 className='first'>Tasks</h1> <h1 className='second'>Manager</h1>
      <hr className='Hr left' />
      <hr className='Hr right' />
    </div>
  );
};

export default Header;
