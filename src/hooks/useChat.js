import { useQuery } from '@tanstack/react-query';
import { chatService } from '../services/chatService';
import { getToken } from '../services/api';

export const chatKeys = {
  all: ['chat'],
  lists: () => [...chatKeys.all, 'list'],
  list: () => [...chatKeys.lists(), 'all'],
};

// Hook for getting chat list
export const useChatList = () => {
  const token = getToken();

  return useQuery({
    queryKey: chatKeys.list(),
    queryFn: () => chatService.getChatList(),
    enabled: !!token,
    staleTime: 2 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: true,
  });
};
