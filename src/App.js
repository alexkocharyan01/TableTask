import { useEffect, useState } from 'react';
import './App.css';
import CustomTable from './CustomTable/CustomTable'
function App() {
  
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const headers = [
    {name: "No#", title: "id", sortable: false},
    {name: "Name", title: "name", sortable: true},
    {name: "UserName", title: "userName", sortable: true},
    {name: "Email", title: "email", sortable: false},
  ]

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then((data) => setData(data))
  }, [])

  function serchUser(users) {
    return users.filter(
      (user) =>
        user.name.toLowerCase().indexOf(search) > -1 ||
        user.email.toLowerCase().indexOf(search) > -1 ||
        user.username.toLowerCase().indexOf(search) > -1)
  }

  return (
    <div>
      <div className="search-div">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}/>
      </div>
      <div>
        <CustomTable
          data={serchUser(data)}
          headers={headers}
        />  
      </div>
    </div>
  );
}

export default App;
