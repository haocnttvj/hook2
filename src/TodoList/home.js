import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TodoService from "./api";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTodoList = async () => {
      try {
        const params = {};
        const res = await TodoService.getTodoList(params);
        dispatch(fetchTodoList(res));
      } catch (error) {
        console.error("Error fetching todo list:", error);
      }
    };

    fetchTodoList();
  }, [dispatch]);

  return <div>Home Component</div>;
}
