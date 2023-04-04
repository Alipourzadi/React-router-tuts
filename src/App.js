import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Faq from "./Pages/Help/FAQ";
import Contact from "./Pages/Help/Contact";
import NotFound from "./Pages/NotFound";
import Careers from "./Pages/Careers";
import CareersDetail from "./Pages/Careers/CareersDetail";
import CareersError from "./Pages/Careers/CareersError";

import careersLoader from "./Utilities/careersLoader";
import careersDetailLoader from "./Utilities/careersLoaderDetail";

import BrowerRoutLayout from "./Layout/BrowerRoutLayout";
import HelpLayout from "./Layout/HelpLayout";
import CareersLayout from "./Layout/CareersLayout";
import contactAction from "./Utilities/contactAction";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BrowerRoutLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareersDetail />}
          loader={careersDetailLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
