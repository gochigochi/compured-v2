import "@/styles/globals.css"
import { Public_Sans } from "next/font/google"
import { store } from "@/store/store"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import Layout from "@/components/ui/layout/Layout"

const publicSans = Public_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className={publicSans.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </Provider>
  )

}
