import { MouseEvent } from "react";

export interface IProductDetailUIProps {
   data: any;
   onClickMoveToEdit: (e: MouseEvent<HTMLButtonElement>) => void;
}