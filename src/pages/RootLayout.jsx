import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import SplashScreen from "../components/SplashScreen";

export default function RootLayout() {
  return (
    <>
      <SplashScreen />

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
