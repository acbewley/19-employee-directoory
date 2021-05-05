import axios from "axios";

export default {
  getUsers: function() {
    return axios.get('https://randomuser.me/api/?inc=name,email,dob,picture&results=10&nat=us')
  }
};
