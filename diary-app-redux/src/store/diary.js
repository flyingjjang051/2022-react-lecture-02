// type
const initState = {
  count: 4,
  diaryListArray: [
    { id: 1, author: "홍길동", contents: "눈이 옵니다. 집에 어떻게 가나요?", emotion: 1, date: new Date().getTime() },
    { id: 2, author: "정형돈", contents: "GD야 요즘 어떻게 지내니?", emotion: 3, date: new Date().getTime() },
    { id: 3, author: "유재석", contents: "자기야 깝치지 좀 마", emotion: 5, date: new Date().getTime() },
    { id: 4, author: "지석진", contents: "유투브 만들어야지", emotion: 4, date: new Date().getTime() },
  ],
};
export const ACTIONS_TYPE = {
  INSERT_DIARY: "insertDiary",
  MODIFY_DIARY: "modifyDiary",
  DELETE_DIARY: "deleteDiary",
};

export const insertDiary = (diaryItem) => {
  return {
    type: ACTIONS_TYPE.INSERT_DIARY,
    payload: diaryItem,
  };
};
export const modifyDiary = (id, localContents) => {
  return {
    type: ACTIONS_TYPE.MODIFY_DIARY,
    payload: { id, localContents },
  };
};
export const deleteDiary = (id) => {
  return {
    type: ACTIONS_TYPE.DELETE_DIARY,
    payload: { id },
  };
};

const diary = (state = initState, action) => {
  //action에 {type,payload} 가 들어온다.
  switch (action.type) {
    case ACTIONS_TYPE.INSERT_DIARY: {
      const newDiaryItem = { ...action.payload };
      return {
        count: state.count + 1,
        diaryListArray: [newDiaryItem, ...state.diaryListArray],
      };
    }
    default:
      return state;
  }
};
export default diary;
