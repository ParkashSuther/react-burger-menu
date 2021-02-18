import logo from './logo.svg';
import './App.css';
import { slide as Menu } from 'react-burger-menu'
import Sidebar from './Sidebar'
function App() {
  return (
    <div id="App">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
        <h1>Cool Restaurant 🍔🍕</h1>
        <h2>Check out our offerings in the sidebar!</h2>
      </div>
    </div>
  );
}
export default App;
