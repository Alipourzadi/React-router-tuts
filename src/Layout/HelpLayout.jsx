import { NavLink, Outlet } from "react-router-dom";

function HelpLayout() {
  return (
    <div className="p-10 text-slate-300 space-y-5">
      <h2 className="text-lg">Website Help</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas
        debitis quibusdam deserunt repellat hic molestias ipsum commodi aut
        odit!
      </p>

      <nav className="flex items-center justify-center gap-8">
        <NavLink
          to="faq"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 bg-secondary-500 rounded-lg border-white"
              : "px-4 py-2"
          }
        >
          View the FAQ
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 bg-secondary-500 rounded-lg border-white"
              : "px-4 py-2"
          }
        >
          Contact Us
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default HelpLayout;
