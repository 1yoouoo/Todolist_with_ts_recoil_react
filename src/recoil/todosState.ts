import { atom } from "recoil";
import { TodoType } from "../types/todoType";

export const todosState = atom<TodoType[]>({
  key: "todosState",
  default: [
    {
      id: 1,
      pin: false,
      task: "this is test code1 !",
    },
    {
      id: 2,
      pin: false,
      task: "this is test code2 !",
    },
    {
      id: 3,
      pin: false,
      task: "this is test code3 !",
    },
  ],
});

export const pinsState = atom<TodoType[]>({
  key: "pinsState",
  default: [
    {
      id: 1,
      pin: true,
      task: "this is pin 1",
    },
  ],
});

export const todoInputState = atom<string>({
  key: "todoInputState",
  default: "",
});
