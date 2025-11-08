"use client";
import { useRouter } from "next/navigation";
import { PropertyProps } from "@/interfaces";

interface Props {
  property: PropertyProps;
  id: number; // unique id for property
}

export default function PropertyCard({ property, id }: Props) {
  const router = useRouter();

  const handleBookNow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent card click
    router.push(`/booking?id=${encodeURIComponent(property.name)}`);
  };

  const handleCardClick = () => {
    router.push(`/property/${id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4 space-y-2">
        <h3 className="font-bold text-lg">{property.name}</h3>
        <p className="text-gray-500">
          {property.address.city}, {property.address.country}
        </p>
        <p className="text-blue-500 font-semibold">${property.price}/night</p>

        <button
          onClick={handleBookNow}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
