import { CustomError } from "../../utils/api-helper";
import { Product } from "./productDetails";

export interface Errors {
  results: CustomError | null;
}

export interface ProductListState {
  isLoading: boolean;
  errors: Errors;
  products: Product[] | null;
}

export enum ProductListActionTypes {
  GET_PRODUCT_LIST_REQUEST = "@@productList/GET_PRODUCT_LIST_REQUEST",
  GET_PRODUCT_LIST_SUCCESS = "@@productList/GET_PRODUCT_LIST_SUCCESS",
  GET_PRODUCT_LIST_ERROR = "@@productList/GET_PRODUCT_LIST_ERROR",
}
