import { error } from "console";

export function delay<T>(ms: number, promise: Promise<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      promise.then((res) => resolve(res)).catch((error) => reject(error));
    }, ms);
  });
}
