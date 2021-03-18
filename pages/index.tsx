import * as React from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";
import getConfig from "next/config";
import styled, { withTheme } from "styled-components";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SearchBox from "../components/SearchBox";
import CarCards from "../components/CarCards";
const Wrap = styled.div`
  color: ${(props) => props.theme.main};
`;

const IndexPage: NextPage = () => {
  return (
    <Wrap>
      <Layout title="This is a template">
        <Header />
        <div className="mt-16">
          <Banner />
          <SearchBox />
          <CarCards />
          {/* CarCard */}
          {/* Footer */}
        </div>
      </Layout>
    </Wrap>
  );
};

IndexPage.getInitialProps = async () => {
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
  return { serverRuntimeConfig, publicRuntimeConfig };
};

export default withTheme(IndexPage);
