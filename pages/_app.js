import Layout from "../components/Layouts";

 import 'tailwindcss/tailwind.css'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
