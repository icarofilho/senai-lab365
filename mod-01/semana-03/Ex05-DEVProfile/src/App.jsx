import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    // fetch do usuário
    fetch("https://api.github.com/users/icarofilho")
      .then((res) => res.json())
      .then((json) => setUser(json));

    fetch("https://api.github.com/users/rpad88/followers")
      .then((res) => res.json())
      .then((json) => {
        setFollowers(json);
      });
  }, []);

  return (
    <>
      <section className="header">
        <div className="avatar">
          <img src={user?.avatar_url} alt="avatar" />
        </div>
        <div className="user-info">
          <ul>
            <li>
              <b>Username: </b>
              {user?.login}
            </li>
            <li>
              <b>Name: </b>
              {user?.name}
            </li>
            <li>
              <b>Bio: </b>
              {user?.bio}
            </li>
          </ul>
        </div>
      </section>
      <section className="body">
        <div className="followers">
          <p>Followers: {followers?.length}</p>
          {followers?.map((f, i) => {
            console.log(f);
            if (!f.avatar_url) {
              return (
                <img
                  className="mini-img"
                  key={i}
                  src="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png"
                />
              );
            } else {
              return <img className="mini-img" key={i} src={f.avatar_url} />;
            }
          })}
        </div>
      </section>
      <section className="footer"></section>
    </>
  );
}

export default App;
