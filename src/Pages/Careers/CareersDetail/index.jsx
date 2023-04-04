import React from "react";
import { useLoaderData } from "react-router-dom";

const CareersDetail = () => {
  const careerDetail = useLoaderData();
  return (
    <div className="space-y-3 bg-slate-800 p-4 rounded-lg shadow-2xl">
      <h2 className="text-2xl font-bold text-secondary-500">
        Job detail for {careerDetail.title}
      </h2>
      <p>Salary: {careerDetail.salary}$</p>
      <p>Location: {careerDetail.location}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        soluta aut similique consequatur mollitia dolorem deleniti nam nobis,
        odit asperiores dolores necessitatibus quo autem dolorum quasi
        voluptate, est, distinctio adipisci.
      </p>
    </div>
  );
};

export default CareersDetail;
