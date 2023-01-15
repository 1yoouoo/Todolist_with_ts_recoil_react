import { atom } from "recoil";
import { TodoType } from "../types/todoType";

export const todosState = atom<TodoType[]>({
  key: "todosState",
  default: [
    {
      id: 1,
      pin: true,
      task: "Default) Learning Typescript !",
    },
    {
      id: 2,
      pin: false,
      task: "Default) Learning Recoil !",
    },
    {
      id: 3,
      pin: false,
      task: "Default) Learning React !",
    },
  ],
});

export const todoInputState = atom<string>({
  key: "todoInputState",
  default: "",
});
