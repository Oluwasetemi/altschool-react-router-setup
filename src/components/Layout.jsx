import CustomNavLink from './CustomNavLink';

function Layout() {
  return (
    <nav>
      <h1 className="logo">Welcome to our Router Test App</h1>
      <CustomNavLink to="/">Home</CustomNavLink>|{' '}
      <CustomNavLink to="/about">About</CustomNavLink>|{' '}
      <CustomNavLink to="/items">Items</CustomNavLink>|{' '}
      <CustomNavLink to="/items/new">New Item</CustomNavLink>
    </nav>
  );
}

export default Layout;
