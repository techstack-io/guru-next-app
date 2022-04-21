import React from "react";
import Head from "next/head";

const PageTitle = ({ page }) => {
  return (
    <Head>
      <title>{page} | Guru - Find Your Self</title>
    </Head>
  );
};

export default PageTitle;
