import React from "react";
import { PropertyProps } from "@/interfaces"; 

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
      {/* Property Image */}
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        {/* Property Name */}
        <h3 className="font-semibold text-lg mb-1">{property.name}</h3>

        {/* Price and Rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-red-500 font-bold">${property.price}</span>
          <span className="text-gray-600 text-sm">{property.rating} ⭐</span>
        </div>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-2 mb-2">
          {property.category.map((cat, idx) => (
            <span
              key={idx}
              className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Offers */}
        <div className="text-gray-600 text-sm">
          {property.offers.bed} beds • {property.offers.shower} baths •{" "}
          {property.offers.occupants} guests
        </div>

        {/* Discount */}
        {property.discount && (
          <div className="mt-2 text-green-600 font-medium">
            {property.discount} off
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
