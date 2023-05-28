// UserService.js
import axios from "axios";

const UserService = {
  getUsers: async (params) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  },
};

export default UserService;
