import { Fragment, useEffect } from "react";
import { getSession } from 'next-auth/react';

import Search from "../components/Layout/Search";
import Feed from "../components/Feed";



export default function Home() {
  return (
    <Fragment>
      <Search />
      <Feed />
    </Fragment>
  );
}

