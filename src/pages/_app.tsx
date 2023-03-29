import "styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "layouts";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
