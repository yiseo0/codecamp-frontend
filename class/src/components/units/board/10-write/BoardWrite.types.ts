import { ChangeEvent, MouseEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  boardData?: any;
}

export interface IMyVariables {
  number: Number;
  writer?: string;
  title?: string;
  contents?: string;
}

export interface IBoardWriteUIProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (e: MouseEvent<HTMLButtonElement>) => void;
  isEdit: boolean;
  boardData?: any;
}
