import { signal } from "@angular/core";

const DB_KEY = 'current-post';

export const postService = {
  saveToLocalStorage: (key: string, value: any) => {
    localStorage.setItem((key = DB_KEY), JSON.stringify(value));
  },
  getFromLocalStorage: (key: string) => {
    return JSON.parse(localStorage.getItem((key = DB_KEY)));
  },


};
