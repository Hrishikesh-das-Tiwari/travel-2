import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import MainNavigation from '../components/MainNavigation';
import Navbar from '../components/Navbar/Navbar';
import { getTokenDuration } from '../util/auth';

function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
