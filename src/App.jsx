import { createContext, useReducer, useRef } from "react";
import { Route, Routes } from "react-router-dom";

import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/NotFound";

const mockData = [
  {
    id: 0,
    createdDate: new Date("2026-04-26").getTime(),
    emotionId: 1,
    content: "0번 일기 내용",
  },
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date("2026-06-26").getTime(),
    emotionId: 3,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date("2026-05-17").getTime(),
    emotionId: 4,
    content: "3번 일기 내용",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        parseInt(item.id) === parseInt(action.data.id) ? action.data : item,
      );
    case "DELETE":
      return state.filter((item) => parseInt(item.id) !== parseInt(action.id));
    default:
      return state;
  }
};

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

const App = () => {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(mockData.length);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
};

export default App;
