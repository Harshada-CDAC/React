import logo from './logo.svg';
import './App.css';
import CompA from './CompA';
import { UserProvider } from './userContext';
 
function App() {
 
  return (
    <div className="App">
      {/* <UserProvider  value={[{name: "abhishek"}]}>
      <CompA></CompA>
      </UserProvider> */}
      {/* <UserProvider  value= "abhishek">
      <CompA></CompA>
      </UserProvider> */}
      <UserProvider value="abhi">
        <CompA></CompA>
      </UserProvider>
 
    </div>
  );
}
 
export default App;