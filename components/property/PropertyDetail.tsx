"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { PropertyProps } from "@/interfaces";

export default function PropertyDetail({ property }: { property: PropertyProps }) {
  const router = useRouter();

  const handleBookNow = () => {
    router.push(`/booking?id=${encodeURIComponent(property.name)}`);
  };

  return (
    <div className="max-w-4xl mx-auto border rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 space-y-4">
        <h1 className="text-3xl font-bold">{property.name}</h1>
        <p className="text-gray-500">{property.address.city}, {property.address.state}, {property.address.country}</p>
        <p className="text-blue-600 text-xl font-semibold">${property.price} / night</p>

        <div>
          <h2 className="font-semibold text-lg">Category:</h2>
          <ul className="list-disc ml-6">
            {property.category.map((cat, idx) => (
              <li key={idx}>{cat}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg">Offers:</h2>
          <p>Bed: {property.offers.bed}</p>
          <p>Shower: {property.offers.shower}</p>
          <p>Occupants: {property.offers.occupants}</p>
        </div>

        <div className="text-gray-700">Rating: {property.rating}</div>

        <button
          onClick={handleBookNow}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
