import { Route, Routes } from "react-router-dom";

import Button from "./components/Button";
import Header from "./components/Header";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
