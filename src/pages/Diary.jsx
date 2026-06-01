import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { DiaryStateContext } from "../App";
import Button from "../components/Button";
import Header from "../components/Header";
import Viewer from "../components/Viewer";
import { getStringedDate } from "../util/get-stringed-date";

const Diary = () => {
  const nav = useNavigate();
  const params = useParams();
  const data = useContext(DiaryStateContext);

  const [curDiaryItem, setCurDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => Number(item.id) === Number(params.id),
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [params.id]);

  if (!curDiaryItem) {
    return <div>데이터 로딩 중...</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button
            text={"수정하기"}
            onClick={() => nav(`'/edit/${params.id}`)}
          />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
