import http from "../http-common";
import authHeader from "./auth.header";

class AssetDataService {
  update(data) {
    return http.put(`/variables/update/`, data, authHeader());
  }

  get(id) {
    return http.get(`/variables/${id}`);
  }
}

export default new AssetDataService();
