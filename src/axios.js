import axios from "axios";
import { baseUrl } from "./constants/constants";

//create instance for axios

const instance = axios.create({
    baseURL: baseUrl,
    
  });

  export default instance