import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  let currentLocation = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLocation += `/${crumb}`;
      return (
        <Link
          className="text-sm after:content-['>'] after:mx-2 after:cursor-default after:last:hidden"
          to={currentLocation}
        >
          {crumb}
        </Link>
      );
    });
  return <div>{crumbs}</div>;
};

export default BreadCrumbs;
