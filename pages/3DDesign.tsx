import React from "react";
import { DataGrid } from "../components/3ddesign/big-grid";
import ThreeDProjectsTransition from "@/components/3DDesignPageTransition";

const ThreeDDesign: React.FC = () => {
  return (
    <div className="mt-20 page-specific-font-pp">
      <div className="cursor"></div>
      <div className="md:flex md:flex-row">
        <div className="w-full flex flex-col">
          <ThreeDProjectsTransition to="/3d-design/3dprojects/Architecture">
            <DataGrid
              size="big"
              src="https://res.cloudinary.com/dxmnledfa/video/upload/v1772691773/hero_navbar_lfxngt.mp4"
              Title="3D Architecture"
              heading="Fiction and non-Fiction"
              date="2022"
              href="/3d-design/3dprojects/Architecture"
              color="red"
            />
          </ThreeDProjectsTransition>
          <DataGrid
            size="small"
            Title="Portraits"
            heading="Fiction and non-Fiction"
            date="2022"
            href="/Portraits"
            color="grey"
          />
          <DataGrid
            size="big"
            Title="Wierd Stuff"
            heading="Fiction and non-Fiction"
            date="2022"
            href="/Other"
            color="blue"
          />
          <div className="sc-fznZeY jWYHGr"></div>
        </div>
        <div className="w-full flex flex-col">
          <DataGrid
            size="small"
            Title="Environment"
            heading="Fiction and non-Fiction"
            date="2023"
            href="/Environment"
            color="green"
          />
          <DataGrid
            size="big"
            Title="Geometry Nodes"
            heading="Fiction and non-Fiction"
            date="2022"
            href="/GeometryNodes"
            color="purple"
            isTextWhite
          />
          <DataGrid
            size="small"
            Title="Weapons"
            heading="Fiction and non-Fiction"
            date="2024"
            href="/Weapons"
            color="yellow"
          />
          <div className="sc-fznZeY jvpqPC"></div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDDesign;
