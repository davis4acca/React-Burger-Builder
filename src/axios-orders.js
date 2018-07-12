import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-d941d.firebaseio.com/"
});

export default instance;