import { useState } from "react";
import "./App.css";
import Login from "./Component/Auth/Login";
import Register from "./Component/Auth/Register";
import Cart from "./Component/Home/Cart";
import HomePage from "./Component/Home/HomePage";

function App() {
  const [page, setPage] = useState("register");
  let component;
  switch (page) {
    case "register":
      component = <Register setPage={setPage} />;
      break;
    case "login":
      component = <Login setPage={setPage} />;
      break;
    case "home":
      component = <HomePage setPage={setPage} />;
      break;
    case "cart":
      component = <Cart setPage={setPage} />;
      break;

    default:
      break;
  }
  return <div className="App">{component}</div>;
}

export default App;
