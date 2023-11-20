import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

export interface TodoDocument {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}

type TodoListResponse = TodoDocument[];
type TodoItemResponse = TodoDocument;

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://jsonplaceholder.typicode.com',
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 5 });

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: baseQueryWithRetry,
  endpoints: (builder) => ({
    getTodoList: builder.query<TodoListResponse, void>({ query: () => 'todos' }),
    getTodoItem: builder.query<TodoItemResponse, string>({ query: (id: string) => 'todos/' + id }),
  }),
});

export const { useGetTodoListQuery, useGetTodoItemQuery } = todoApi;
