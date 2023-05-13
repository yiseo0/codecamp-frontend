import { ChangeEvent, MouseEvent } from "react";

export interface IProductWriteProps {
  isEdit: boolean;
  userData?: any;
}

export interface IUpdateProductInput {
  name?: string;
  detail?: string;
  price?: number;
}

export interface IData {
  seller: string;
  name: string;
  detail: string;
  price: string;
}

export interface IProductWriteUI {
  isEdit: boolean;
  data: IData;
  userData: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (e: MouseEvent<HTMLButtonElement>) => void;
}
