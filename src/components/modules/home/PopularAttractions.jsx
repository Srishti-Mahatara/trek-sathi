import React from "react";
import AttractionCard from "../../common/AttractionCard";

const PopularAttractions = ({data,isAdmin=false,search=false}) => {
  return (
    <section className="animate-[fadeIn_0.8s_ease-out_forwards]">
      {
        !isAdmin && !search && <>
          <h2 className="text-3xl font-bold text-gray-800 mb-md flex items-center gap-[10px]">
          <i className="fas fa-star text-primary"></i>{
            data[0].type=="hotel" ? "Popular Hotels Nearby ":" Popular Attractions Nearby"
          }
          </h2>
        </>
      }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-md mb-lgx">
        {data.map((item, index) => (
          <AttractionCard data={item} key={index} isAdmin={isAdmin}/>
        ))}
      </div>
    </section>
  );
};

export default PopularAttractions;
