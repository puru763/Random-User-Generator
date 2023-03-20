import "./App.css";
import { getpost, getrandomuser } from "./api";
import Postcart from "./components/Postcart";
import { useEffect, useState } from "react";
import Usercard from "./components/Usercard";

function App() {
  // const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   getpost().then((posts) => setData(posts));
  // }, []);

  useEffect(() => {
    getrandomuser().then((user) => setUserData(user.results[0]));
  }, []);

  const refresh = () => {
    getrandomuser().then((user) => setUserData(user.results[0]));
  };

  return (
    <div className="App">
      <div className="cart">
        {userData && <Usercard key={userData.login.uuid} data={userData} />}
        <button onClick={refresh}>refrresh</button>
      </div>

      {/* 

      {data ? (
        data.map((post) => (
          <Postcart key={post.id} title={post.title} body={post.body} />
        ))
      ) : (
        <p>no data</p>
      )} */}
    </div>
  );
}

export default App;
