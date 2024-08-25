"use client";

import { FetchAnswer } from "./request";

export const isStatusType = <T = unknown>(
  status: number,
  fetchAnswer: FetchAnswer,
): fetchAnswer is FetchAnswer<T> => {
  return fetchAnswer.status === status;
};
