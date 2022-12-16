import React from "react";
import {
  BrowserRouter,
  Routes, // replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import Header from "./Header";
import Table from "./UserTable";
import CreateUser from "./CreateUser";

function App(): JSX.Element {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/create-user" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
