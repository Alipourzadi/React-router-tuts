import React from "react";
import { Outlet } from "react-router-dom";

const CareersLayout = () => {
  return (
    <div className="space-y-5 mt-4">
      <h2 className="text-xl">Careers List</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod fugiat
        saepe assumenda dolor earum eius reiciendis culpa maiores corrupti illum
        numquam asperiores, beatae dicta impedit dignissimos aut dolorem
        suscipit. Doloribus.
      </p>

      <ul className="list-none space-y-3">
        <Outlet />
      </ul>
    </div>
  );
};

export default CareersLayout;
