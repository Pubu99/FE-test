import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePageFinale from "./pages/HomePageFinale";
import ViewEvent from "./pages/ViewEvent";
import DownloadTicket from "./pages/DownloadTicket";
import BookTicketsForEvent from "./pages/BookTicketsForEvent";
import GuidlinesPage from "./pages/GuidlinesPage";
import AboutUs from "./pages/AboutUs";
import PaymentPage from "./pages/PaymentPage";
import Payment from "./pages/Payment";
import Events from "./pages/Events";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import OrderCompleted from "./pages/OrderCompleted";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/view-event":
        title = "";
        metaDescription = "";
        break;
      case "/download-ticket":
        title = "";
        metaDescription = "";
        break;
      case "/admin-view":
        title = "";
        metaDescription = "";
        break;
      case "/book-tickets-for-event":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/payment-page":
        title = "";
        metaDescription = "";
        break;
      case "/payment":
        title = "";
        metaDescription = "";
        break;
      case "/events":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/log-in":
        title = "";
        metaDescription = "";
        break;
      case "/order-completed":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePageFinale />} />
      <Route path="/view-event" element={<ViewEvent />} />
      <Route path="/download-ticket" element={<DownloadTicket />} />
      <Route path="/admin-view" element={<BookTicketsForEvent />} />
      <Route path="/book-tickets-for-event" element={<GuidlinesPage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/payment-page" element={<PaymentPage />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/events" element={<Events />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/order-completed" element={<OrderCompleted />} />
    </Routes>
  );
}
export default App;
