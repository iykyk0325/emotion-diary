import "./DiaryItem.css";

import { useNavigate } from "react-router-dom";

import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();

  const goDiaryPage = () => {
    nav(`/diary/${id}`);
  };

  const goEditPage = () => {
    nav(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div
        className={`img_section img_section_${emotionId}`}
        onClick={goDiaryPage}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="info_section" onClick={goDiaryPage}>
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button text="수정하기" onClick={goEditPage} />
      </div>
    </div>
  );
};

export default DiaryItem;
