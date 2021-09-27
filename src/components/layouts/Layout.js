import MainNavigationBar from './MainNavigationBar';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <MainNavigationBar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
