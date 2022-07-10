import productListService from "../../services/product/productList.service";
import { Request, Response } from "express";
import { IProduct } from "../../interfaces/products";

const productListController = async (request: Request, response: Response) => {
  const productList: IProduct[] = await productListService();

  return response.json(productList);
};

export default productListController;
