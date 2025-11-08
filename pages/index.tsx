"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "@/components/property/PropertyCard";
import { PropertyProps } from "@/interfaces";

export default function Home() {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        //const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`);
        console.log("API data:", response.data); // 👈 Check what comes back
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!properties.length) {
    return <p className="text-center mt-10 text-gray-500">No properties found.</p>;
  }

  return (
    <section className="max-w-7xl mx-auto p-6 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {properties.map((property, idx) => (
        <PropertyCard key={idx} property={property} id={idx} />
    ) )}
    </section>
  );
}

