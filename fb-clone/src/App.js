import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import Login from './Login'
import { useStateValue } from './StateProvider';


function App() {
  const [{ user }, dispatch] = useStateValue()
  console.log("✅", user)
  return (

    <div className="app">
      {!user
        ? <Login />
        : <div>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>

        </div>
      }

    </div>
  );
}

export default App;
