// REDUCERS
// nó là 1 function

const initValue = { value: 0 };
// pure function
const rootReducer = (state = initValue, action) => {
  // function này dùng để cập nhật lại state ở cái kho chung của chúng ta
  switch (
    action.type // ktr action
  ) {
    case "INCREMENT": //trường hợp INCREMENT
      return {
        ...state, // copy thằng state hiện tại
        value: state.value + 1,
      };
    case "todolist/increment":
      return {
        ...state,
        value: state.value + action.payload,
      };

    default: // nếu không thỏa mãn bất kỳ case nào thì sẽ trả về default
      return state;
  }
};
// qui ước 1 là state mới sẽ được tính toán trên state trc (tham số thứ nhất ở đây là state = initValue) và action là tham số thứ 2 nếu có
// thứ 2 là ko thể thay đổi trực tiếp state đầu tiên
// thứ 3 ko được có bất kỳ qui ước bất đồng bộ nào trong reducer ngoài ra không được dùng các func tính toán ngẫu nhiên nhứ math.random() , date.now(), gọi api
// phải dùng
//case "INCREMENT":
// return {
//   ...state,
//   value: state.value + 1,
// };
// ACTION là 1 obj
const INCREMENT = {
  type: "todolist/increment",
  payload: 10,
};

// Action creators
const incrementCreator = (data) => {
  return {
    type: "todoList/increment",
    payload: data,
  };
};
incrementCreator(10);

// DISPATCH

//là 1 func

dispatch(INCREMENT);
dispatch(incrementCreator(15));
