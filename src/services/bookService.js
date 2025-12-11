import { apiRequest } from './api';

export const bookService = {
  // Get list of books/educations
  getBooksList: async () => {
    return apiRequest('/educations/list', {
      method: 'GET',
    });
  },
};
