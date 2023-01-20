import "./App.css";
import UsersList from "./components/UsersList";
import AddUser from "./components/AddUser";

function App() {
  return (
    <div>
      <h2>App</h2>
      <hr />
      <AddUser />
      <hr />
      <UsersList />
    </div>
  );
}

export default App;
