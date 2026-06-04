import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    const $titie = document.getElementsByTagName("title")[0];
    $titie.innerText = `${title} - 나만의 감정 일기장`;
  }, [title]);

  console.log("<--");
  console.log("usePageTitle 실행");
  console.log("-->");
};

export default usePageTitle;
