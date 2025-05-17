import { Rating } from "@mantine/core";

const AttractionCard = (props) => {
  const { data } = props;

  return (
    <div className="bg-white rounded-md overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-[10px]">
      <div className="h-[180px] overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-sm">
        <a href="location.html" className="no-underline">
          <h3 className="text-lg font-semibold text-gray-800 mb-xs">
            {data.title}
          </h3>
        </a>
        <p className="text-gray-500 text-sm mb-[10px] flex items-center gap-xxs">
          <i className="fas fa-map-marker-alt"></i> {data.distance} {data.unit}{" "}
          away
        </p>
        <p className="text-gray-600 text-sm mb-xs leading-normal">
          {data.description}
        </p>
        <div className="flex items-center gap-xxs text-yellow-500 text-sm">
          <Rating defaultValue={data.rating} fractions={2} readOnly />
          <span className="text-gray-700 ml-xxs">{data.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default AttractionCard;
