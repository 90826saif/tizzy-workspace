import React from 'react'
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <main className="pageWrapper">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout