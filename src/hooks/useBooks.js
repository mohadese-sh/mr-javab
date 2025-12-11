import { useQuery } from '@tanstack/react-query';
import { bookService } from '../services/bookService';

// Query keys
export const bookKeys = {
  all: ['books'],
  lists: () => [...bookKeys.all, 'list'],
  list: () => [...bookKeys.lists(), 'all'],
};

// Hook for getting books list
export const useBooksList = () => {
  return useQuery({
    queryKey: bookKeys.list(),
    queryFn: () => bookService.getBooksList(),
    staleTime: 10 * 60 * 1000, // Consider data fresh for 10 minutes
    gcTime: 30 * 60 * 1000, // Keep in cache for 30 minutes
  });
};
