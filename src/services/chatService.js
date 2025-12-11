import { apiRequest } from './api';

export const chatService = {
  // Get list of messages/chats
  getChatList: async () => {
    return apiRequest('/list_chat', {
      method: 'GET',
    });
  },
};
