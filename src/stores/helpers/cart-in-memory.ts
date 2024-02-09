import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../card-store";

export function add(products: ProductCartProps[], newProduct: ProductProps) {
    const existingProduct = products.find(({ id }) => newProduct.id === id);

    if (existingProduct) {
        return products.map((prod) => prod.id === existingProduct.id
            ? { ...prod, quantity: prod.quantity + 1 }
            : prod);
    }

    return [...products, { ...newProduct, quantity: 1 }];
}


export function remove(products: ProductCartProps[], productRemoveId: string) {
    const updatedProduct = products.map((product) => product.id === productRemoveId
        ? {
            ...product,
            quantity: product.quantity > 1 ? product.quantity - 1 : 0
        }
        : product
    );
    return updatedProduct.filter((product) => product.quantity > 0);
}