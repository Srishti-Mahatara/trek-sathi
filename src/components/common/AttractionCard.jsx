import { Button, Rating } from "@mantine/core";
import {useNavigate} from "react-router";

const AttractionCard = (props) => {
  const { data } = props;

  const navigate = useNavigate();


  return (
    <div className="cursor-pointer bg-white rounded-md overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-[10px]" onClick={() => {
      if (data.type === "hotel") {
        navigate(`/hotel/${data.id ?? data.title}`);
      } else {
        navigate(`/location/${data.id ?? data.title}`);
      }
    }}>
      <div className="h-[180px] overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-sm">
        <div className="no-underline">
          <h3 className="text-lg font-semibold text-gray-800 mb-xs">
            {data.title}
          </h3>
        </div>
        <p className="text-gray-500 text-sm mb-[10px] flex items-center gap-xxs">
          <i className="fas fa-map-marker-alt"></i> {data.distance} {data.unit}{" "}
          away
        </p>
        <p className="text-gray-600 text-sm mb-xs leading-normal">
          {data.description}
        </p>
        <div className="flex items-center justify-between gap-xxs text-yellow-500 text-sm">
          <div className="flex gap-xxs items-center">
            <Rating defaultValue={data.rating} fractions={2} readOnly />
            <span className="text-gray-700 ml-xxs">{data.rating}</span>
          </div>
          {
            data.type=="hotel" && <Button className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary-dark text-white">
              Book Now
            </Button>
          }
         
        </div>
        
      </div>
    </div>
  );
};

export default AttractionCard;
