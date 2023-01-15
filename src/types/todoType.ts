export interface TodoType {
  id: number;
  pin: boolean;
  task: string;
}

export interface TodoPropTypes {
  data?: TodoType;
  pin?: TodoType;
}

export type ActivatedVerticalDotPropTypes = {
  toggle: boolean;
  data?: TodoType;
};

export type TogglePropTypes = {
  id?: number;
  onDelete?: (id?: number | undefined) => void;
  onPin?: ((id?: number | undefined) => void) | undefined;
};
