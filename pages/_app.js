import { useRouter } from "next/router";
import Layout from "../Containers/Layout";
import "../styles/globals.css";
import MainThemeProvider from "../Theme/ThemeContext.js";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  console.log(pathname.slice(0, 5));

  return (
    <MainThemeProvider>
      {pathname.slice(0, 5) === "/auth" ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </MainThemeProvider>
  );
}

export default MyApp;
