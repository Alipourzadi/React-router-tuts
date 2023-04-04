import { NavLink, Outlet } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";

const BrowerRoutLayout = () => {
  return (
    <div className="p-10 text-slate-300">
      <header>
        <nav className="flex items-center justify-between w-full">
          <div>
            <h1 className="text-white text-2xl border-b-4 border-secondary-500 max-w-min">
              Jobarouter
            </h1>
            <BreadCrumbs />
          </div>
          <div className="space-x-8 px-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 bg-secondary-500 rounded-lg hover:bg-secondary-500/60"
                  : "px-4 py-2"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 bg-secondary-500 rounded-lg hover:bg-secondary-500/60"
                  : "px-4 py-2"
              }
            >
              About
            </NavLink>
            <NavLink
              to="help"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 bg-secondary-500 rounded-lg hover:bg-secondary-500/60"
                  : "px-4 py-2"
              }
            >
              Help
            </NavLink>
            <NavLink
              to="careers"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 bg-secondary-500 rounded-lg hover:bg-secondary-500/60"
                  : "px-4 py-2"
              }
            >
              careers
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default BrowerRoutLayout;
