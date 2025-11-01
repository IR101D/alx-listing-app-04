import Image from "next/image";
import { PropertyProps } from "@/interfaces";

export default function PropertyDetail({ property }: { property: PropertyProps }) {
  return (
    <div className="max-w-4xl mx-auto border rounded-xl shadow-sm overflow-hidden">
      <Image
        src={property.image}
        alt={property.name}
        width={800}
        height={500}
        className="w-full h-96 object-cover"
      />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
        <p className="text-gray-600 mb-2">{property.category}</p>
        <p className="text-blue-600 text-xl font-semibold mb-4">${property.price} / night</p>

        <div className="text-gray-700 mb-4">
          <p>{property.rating}</p>
        </div>
      </div>
    </div>
  );
}
