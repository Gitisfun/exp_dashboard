import httpClient from "../httpClient";


class Categories {

  static END_POINT = "/categories";

  static getAll() {
    return httpClient.get(`${END_POINT}`);
  }

  static get(id) {
    return httpClient.get(`${END_POINT}/${id}`);
  }

  static create(item) {
    return httpClient.post(END_POINT, item);
  }

  static update(id, item) {
    return httpClient.put(`${END_POINT}/${id}`, item);
  }

  static delete(id) {
    return httpClient.delete(`${END_POINT}/${id}`);
  }
}

export default Categories