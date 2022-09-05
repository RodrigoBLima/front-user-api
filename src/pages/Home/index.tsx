import React from "react";

import { useUserViewModel } from "../../core/user/controller/userViewModel";
import { useUserStoreImplementation } from "../../core/user/data/userStoreImplementation";

function Home() {
  const store = useUserStoreImplementation();
  const { setUser } = useUserViewModel(store);

  function handleLogout() {
    setUser();
  }

  return (
    <div id="home-container">
      <p>Name: {store.user?.name}</p>
      <p>Email: {store.user?.email}</p>
      <button type="submit" onClick={() => handleLogout()}>
        Logout
      </button>
    </div>
  );
}
export default Home;
