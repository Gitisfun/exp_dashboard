import httpClient from "../httpClient";


class CategoryRoutes {

  static END_POINT = "/categories";

  static GET_ALL() {
    return httpClient.get(`${CategoryRoutes.END_POINT}`);
  }

  static GET(id) {
    return httpClient.get(`${CategoryRoutes.END_POINT}/${id}`);
  }

  static CREATE(item) {
    return httpClient.post(CategoryRoutes.END_POINT, item);
  }

  static UPDATE(id, item) {
    return httpClient.put(`${CategoryRoutes.END_POINT}/${id}`, item);
  }

  static DELETE(id) {
    return httpClient.delete(`${CategoryRoutes.END_POINT}/${id}`);
  }
}

export default CategoryRoutes;
