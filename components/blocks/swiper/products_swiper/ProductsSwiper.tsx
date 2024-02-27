import { Products } from "@/types"

type PropsTypes = {
    products: Products
}

const ProductsSwiper = ({ products }: PropsTypes) => {

    console.log(products)

    return (
        <div>ProductsSwiper</div>
    )
}

export default ProductsSwiper