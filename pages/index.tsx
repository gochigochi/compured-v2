import dynamic from 'next/dynamic'
import Head from 'next/head'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getProductsByCategory } from "@/utils/getProductsByCategory"
import { Categories as Categs, Products } from '@/types'
import FeaturedProducts from '@/components/blocks/featured_products/FeaturedProducts'
// import SEO from '@/components/seo/SEO'
// import BannerCarousel from '@/components/banner_carousel/BannerCarousel'
// import Featured from '@/components/featured/Featured'
// import Categories from '@/components/home/categories/Categories'
// import Services from '@/components/home/services/Services'
// const Clients = dynamic(() => import('../components/home/clients/Clients'))
// const Contact = dynamic(() => import('../components/contact/Contact'))

export const getStaticProps = (async () => {

  // cat. 129 DESTACADOS
  // cat. 0 TODOS LOS PRODUCTOS
  const products = await getProductsByCategory(129)

  return {
    props: {
      products: products,
    },
    revalidate: 10,
  }
}) satisfies GetStaticProps<{ products: Products }>

export default function HomePage({
   products
  } : InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Head>
        <title>Compured - Tienda</title>
        <meta name="description" content="Descripcion compured" key="Compured" />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="Compured" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <SEO /> */}
      <div className="section-fluid">
        <div className="section-inner flex flex-col gap-20">
          <FeaturedProducts products={products} />


          {/* <BannerCarousel />
          <Featured products={products} />
          <Categories />
          <Services />
          <Clients />
          <Contact /> */}
        </div>
      </div>
    </>
  )
}