import "./App.css";
import { useEffect } from "react";
import Routes from "./components/routes/Routes";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "CREATE_STATE" });
  }, [dispatch]);
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
