/**
 * Date 객체를 "YYYY-MM-DD" 형식의 문자열로 변환한다.
 *
 * @param {Date} date 변환할 Date 객체
 * @returns {string} "YYYY-MM-DD" 형식의 닐짜 문자열
 */
export const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};
