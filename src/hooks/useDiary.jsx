import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { DiaryStateContext } from "../App";

/**
 * 전달받은 id에 해당하는 일기 데이터를 전역 일기 목록에서 찾아 반환한다.
 * 일기가 없으면 경고를 띄우고 홈("/")으로 이동시킨다.
 *
 * @param {string | number} id 조회할 일기의 고유 id
 * @returns {object | undefined} 조회된 일기 객체. 아직 찾기 전이면 undefined
 */
const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();
  const nav = useNavigate();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => Number(item.id) === Number(id),
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [id]);

  return curDiaryItem;
};

export default useDiary;
