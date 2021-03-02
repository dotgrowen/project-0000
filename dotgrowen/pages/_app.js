import '../styles/globals.css'
import { Navbar, NavbarLogo, NavItem } from '../components/Navbar';
import Head from 'next/head'
import FooterPage from '../components/Footer';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
      </Head>

      <div className="nav">
        <NavbarLogo />
        <Navbar >
          <NavItem link="/writings" tab="Writings" />
          <NavItem link="/entertainment" tab="Entertainment" />
          <NavItem link="/projects" tab="Projects" />
          <NavItem link="https://www.youtube.com/channel/UCQYcqeiLnkkbIVgZUuO2drA" at="@" tab="dotgrowen" />
        </Navbar>
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
