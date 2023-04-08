import { Provider } from "react-redux";
import { store } from "../store/store";
import { useEffect, useState } from "react";
import Layout from '../components/layout/layout';
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import { Button, ConfigProvider } from 'antd';




import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import "../styles/main.scss";
import 'react-calendar/dist/Calendar.css';


import { appWithTranslation } from 'next-i18next';
import { useRouter } from "next/router";



function MyApp({ Component, pageProps: { session, ...pageProps }, }) {

  // const { locale } = useRouter();
  const [queryClient] = useState(() => new QueryClient());



  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  // useEffect(() => {
  //   document.documentElement.dir = locale === "ar" ? 'rtl' : 'ltr';
  // }, [locale]);

  useEffect(() => {
    document.documentElement.dir = 'rtl';
  }, []);


  const getLayout = Component.getLayout || ((page) => <Layout> {page}</Layout>)
  const newpage = getLayout(<Component {...pageProps} />)

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Provider store={store}>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#4E58FD',
                  borderRadius: 5,
                  fontFamily: 'Mcit-kn-font',
                },
                components: {
                  Button: {
                    borderRadius: 5,
                  },
                },
              }}>
              {newpage}
              <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                draggable={false}
                rtl
                pauseOnVisibilityChange
                closeOnClick
                pauseOnHover
              />
            </ConfigProvider>
          </Provider>
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);

