import axios from "axios";

const TodoService = {
  getTodoList: async (params) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos", {
      params: params,
    });

    return res.data;
  },
};
export default TodoService;
