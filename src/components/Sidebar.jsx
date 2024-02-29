import styles from './Sidebar.module.css';
import Logo from './Logo';
import AppNav from './AppNav';
import SidebarFooter from './SidebarFooter';
import { Outlet } from 'react-router-dom';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <SidebarFooter styles={styles} />
    </div>
  );
}

export default Sidebar;
