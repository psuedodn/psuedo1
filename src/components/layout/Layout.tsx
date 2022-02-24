import React, { Fragment } from 'react';
import Navbar from './Navbar';

const Layout = (props: any) => {
  return (
    <Fragment>
      <Navbar />
      <main> {props.children} </main>
    </Fragment>
  );
};

export default Layout;
