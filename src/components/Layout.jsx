import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();

  return (
    <div className="app-layout">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="main-content" key={location.pathname}>
        <div className="page-transition">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
