import type { NextPage } from "next";

import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";

interface HomeProps {
  products: any[];
  bannerData: object[];
}

const Home = ({ products, bannerData }: HomeProps) => {
  return (
    <>
      {/* Hero banner */}
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many varietions</p>
      </div>

      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      {/*Footer */}
      <FooterBanner footerbanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
