export interface TodoType {
  id: number;
  pin: boolean;
  task: string;
}

export interface TodoPropTypes {
  data: TodoType;
}
