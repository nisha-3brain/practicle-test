import apiInstance from "./axiosConfig";

const mainApi = {
  
  GET: async (link) => {
    let { data } = await apiInstance.get(link);
    return data;
  },
  POST: async (link, apiData) => {
    let { data } = await apiInstance.post(link, apiData);
    return data;
  },

  PUT: async (link, apiData) => {
    let { data } = await apiInstance.put(link, apiData);
    return data;
  },

  PATCH: async (link, apiData) => {
    let { data } = await apiInstance.patch(link, apiData);
    return data;
  },

  DELETE: async (link) => {
    let { data } = await apiInstance.delete(link);
    return data;
  },

  
};

export default mainApi;
