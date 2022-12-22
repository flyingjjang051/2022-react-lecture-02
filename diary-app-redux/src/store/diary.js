// 상태에 쓸 것들 여기에 정의
const initState = {
  count: 4,
  diaryListArray: [
    { id: 1, author: "홍길동", contents: "눈이 옵니다. 집에 어떻게 가나요?", emotion: 1, date: new Date().getTime() },
    { id: 2, author: "정형돈", contents: "GD야 요즘 어떻게 지내니?", emotion: 3, date: new Date().getTime() },
    { id: 3, author: "유재석", contents: "자기야 깝치지 좀 마", emotion: 5, date: new Date().getTime() },
    { id: 4, author: "지석진", contents: "유투브 만들어야지", emotion: 4, date: new Date().getTime() },
  ],
};

//action의 타입을 정의
export const ACTIONS_TYPE = {
  INSERT_DIARY: "insertDiary",
  MODIFY_DIARY: "modifyDiary",
  DELETE_DIARY: "deleteDiary",
};

//action
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

// 여기가 핵심 reducer
const diary = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS_TYPE.INSERT_DIARY: {
      const newDiaryItem = { ...action.payload };
      return {
        count: state.count + 1,
        diaryListArray: [newDiaryItem, ...state.diaryListArray],
      };
    }
    case ACTIONS_TYPE.DELETE_DIARY: {
      const { id } = action.payload;
      return {
        count: state.count - 1,
        diaryListArray: state.diaryListArray.filter((item, idx) => item.id !== id),
      };
    }
    case ACTIONS_TYPE.MODIFY_DIARY: {
      // const id = action.payload.id;
      // const localContents = action.payload.localContents;
      const { id, localContents } = action.payload;
      return {
        count: state.count,
        diaryListArray: state.diaryListArray.map((item, idx) => (item.id === id ? { ...item, contents: localContents } : item)),
      };
    }

    default:
      return state;
  }
};
export default diary;
