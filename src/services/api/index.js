const API = process.env.NEXT_PUBLIC_API_URL;

const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  categories: {
    getCategories: (offset = 5) => `${API}/api/${VERSION}/categories?limit=${offset}`,
    postCategories: `${API}/api/${VERSION}/categories`,
    getCategoriesProduct: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
    putCategories: (id) => `${API}/api/${VERSION}/categories/${id}`,
  },
  files: {
    postFiles: `${API}/api/${VERSION}/files/upload`,
    getFiles: (fileName) => `${API}/api/${VERSION}/files/${fileName}`,
  },
  products: {
    getProducts: `${API}/api/${VERSION}/products?`,
    addProducts: `${API}/api/${VERSION}/products`,
    getProductsPaginate: (limit = 10, offset = 0) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    putProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
  users: {
    getUsers: `${API}/api/${VERSION}/users`,
    postUsers: `${API}/api/${VERSION}/users`,
    isAvailable: `${API}/api/${VERSION}/users/is-available/`,
  },
};

export default endPoints;
