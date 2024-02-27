import { Products } from "@/types"

type FeaturedProp = {
    products: Products
}

const FeaturedProducts = ({ products } : FeaturedProp) => {

    return (
        <section>
            <h2 className="section-title">Novedades</h2>
            <p className="section-subtitle">Destacados y recomendados</p>
        </section>
    )
}

export default FeaturedProducts