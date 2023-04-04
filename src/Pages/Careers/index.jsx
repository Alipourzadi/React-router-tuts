import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const Careers = () => {
  const careers = useLoaderData();

  return careers.map((career) => (
    <Link
      className="bg-slate-800 text-slate-500 p-8 rounded-lg space-y-1 flex flex-col group"
      to={career.id.toString()}
      key={crypto.randomUUID()}
    >
      <h2 className="text-lg text-white group-hover:text-secondary-500">
        {career.title}
      </h2>
      <p>{career.location}</p>
    </Link>
  ));
};

export default Careers;
