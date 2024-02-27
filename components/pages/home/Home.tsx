import FeaturedProducts from "@/components/blocks/featured_products/FeaturedProducts"
import ContactForm from "@/components/blocks/forms/contact_form/ContactForm"
import { Products } from "@/types"

type PropsTypes = {
    products: Products
}

const Home = ({ products }: PropsTypes) => {
    return (
        <div className="section-fluid">
            <div className="section-inner flex flex-col gap-20">
                <FeaturedProducts products={products} />
                
                <ContactForm />

                {/* <BannerCarousel />
          <Featured products={products} />
          <Categories />
          <Services />
          <Clients />
          <Contact /> */}
            </div>
        </div>
    )
}

export default Home