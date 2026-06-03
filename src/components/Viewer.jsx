import "./Viewer.css";

import { emotionList } from "../constants/emotion-list";
import { getEmotionImage } from "../util/get-emotion-image";

const Viewer = ({ emotionId, content }) => {
  const emotionItem = emotionList.find(
    (item) => Number(item.emotionId) === Number(item.emotionId),
  );

  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
          <img src={getEmotionImage(emotionId)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
