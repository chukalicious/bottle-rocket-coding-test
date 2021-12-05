import "./App.css";
import List from "./components/pages/List";
import Header from "./components/common/Header";
import Map from "./components/pages/Map";

function App() {
  return (
    <div className="App" style={{ width: `100%` }}>
      <Header />

      <List />
    </div>
  );
}

export default App;
