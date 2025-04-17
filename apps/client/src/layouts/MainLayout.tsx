import React from 'react';
import AppRoutes from '../routes';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


type Props = {
    children: React.ReactNode;
  };
  
  const LandingLayout = ({ children }: Props) => {
    return (
      <>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    );
  };
  
  export default LandingLayout;
  