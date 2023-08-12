import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://62.84.125.174:81',
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: { username: string; password: string }) => {
        return {
          url: '/api-token-auth/',
          method: 'post',
          body,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
