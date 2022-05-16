import http from "../http-common";

class AuthService {
  login(email_id, password) {
    return http
      .post("/auth/signin", { email_id, password })
      .then((response) => {
    if (response.data.accessToken) {
          localStorage.setItem("user_token", JSON.stringify(response.data));
          localStorage.setItem("access_token", response.data["accessToken"]);
          localStorage.setItem("login_status", true);
          return true
        } else {
          console.log("api failed");
        }
        return response;
      })
      .catch((error) => {
        console.log(error)
        return error.response;
      });
  }


    logout() {
      localStorage.removeItem("user");
    }

}

export default new AuthService();
