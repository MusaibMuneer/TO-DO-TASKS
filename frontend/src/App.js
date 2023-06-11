import './App.css'
import { Routes, Route } from "react-router-dom";
import Form from './components/form/form.js'
import Update from './components/update/update.js'
// import Showtask from './components/showtask/showtask'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/update" element={<Update />}></Route>
      </Routes>
      {/* <Showtask/> */}
    </div>
  );
}

export default App;
