import Image from "next/image";
import { PropertyProps } from "@/interfaces";

export default function PropertyCard({ property }: { property: PropertyProps }) {
  return (
    <div className="border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
      <Image
        src={property.image}
        alt={property.name}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <p className="text-gray-600">{property.id}</p>
        <h3 className="text-lg font-semibold">{property.name}</h3>
        <p className="text-gray-600">{property.rating}</p>
        <p className="mt-2 text-blue-600 font-bold">${property.price}/night</p>
      </div>
    </div>
  );
}
