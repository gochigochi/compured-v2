// import ErrorBoundary from "../errors/ErrorBoundary"
// import ProductsSwiper from "../swipers/products_swiper/ProductsSwiper"
import SectionError from "../errors/section_error/SectionError"
import ErrorBoundary from "../errors/ErrorBoundary"
import ProductsSwiper from "../swipers/products_swiper/ProductsSwiper"
import { Products } from "@/types"

type FeaturedProp = {
    products: Products
}

const FeaturedProducts = ({ products } : FeaturedProp) => {

    return (
        <section>
            <h2 className="section-title">Novedades</h2>
            <p className="section-subtitle">Destacados y recomendados</p>
            <ErrorBoundary fallback={<SectionError />}>
                <ProductsSwiper products={products} />
            </ErrorBoundary>
        </section>
    )
}

export default FeaturedProducts