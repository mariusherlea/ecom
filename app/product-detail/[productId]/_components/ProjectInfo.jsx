import React from "react";
import { useEffect, useState } from "react";

function ProjectInfo({ product }) {
  console.log(product);
  const title = product?.attributes?.title;
  const description = product?.attributes.description[0].children[0].text;
  return (
    <div>
      <h2 className="text-[20px]">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProjectInfo;
