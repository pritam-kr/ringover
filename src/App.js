import { Route, Routes } from "react-router";
import "./App.css";
import { Journey, Contacts, Products, Store, Teams } from "./pages";
 

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Journey />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/products" element={<Products />} />
        <Route path="/store/:id" element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
