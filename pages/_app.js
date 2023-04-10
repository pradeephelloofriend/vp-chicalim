
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
//import '../public/css/plugins.css';
import '../public/css/style.css';
import '../public/css/font.awesome.css'
import '../public/css/custom.css';
import '../public/css/fontello.css';
import '../public/css/responsive.css';
//import '../public/css/flaticon.css';
//import '../public/css/animate.css'
import "swiper/css/bundle";
import Head from 'next/head';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { wrapper } from '../redux/store';
import { withRouter, Router } from 'next/router'
import SimpleReactLightbox from 'simple-react-lightbox'
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import MainLayout from '../components/layout/MainLayout';


Router.events.on('routeChangeStart', (url) => {
    //console.log(`Loading: ${url}`)
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
function MyApp({ Component, pageProps }) {
    const store = useStore((state) => state);
    return (
        <PersistGate persistor={store.__persistor} >
            <SimpleReactLightbox>
                <MainLayout>
                <Head>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
                    <title>Welcome Village Panchayat,Dongurli,Goa</title>
                    <meta charset="UTF-8" />
                    <meta name="keywords" content="village panchyat;village panchyat Dongurli; Dongurli; goa;Village Panchayat of Dongurli Salcete Goa;Dongurli Panchayat;Dongurli Verna Panchayat;South Goa Dongurli Panchayat;" />
                        <meta name="author" content="Kamsoft Technology, Goa" />
                        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                        <meta name="title" content="Village Panchayat Dongurli" />
                        <meta name="description" content="Village Panchayat Dongurli,Government Of Goa"/>
                        
                        <meta name="robots" content="index, follow" />
                        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                        <meta name="language" content="English" />
                        <meta name="revisit-after" content="15 days" />
                </Head>
                    <Component {...pageProps} />
                   
                </MainLayout>
            </SimpleReactLightbox>
        </PersistGate>
                    
    ) 


}
MyApp.getInitialProps = async ({ Component, ctx }) => {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps: pageProps };
}
export default withRouter(wrapper.withRedux(MyApp))