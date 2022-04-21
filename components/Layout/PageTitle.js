import React from "react";
import Head from "next/head";

const PageTitle = ({ page }) => {
  return (
    <Head>
      <title>{page} | Parasol - Find Your Inner Peace</title>
    </Head>
  );
};

export default PageTitle;
