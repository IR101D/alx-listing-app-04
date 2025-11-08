import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    // Convert id to number since we use array index
    const propertyIndex = Number(id);
    const selectedProperty = PROPERTYLISTINGSAMPLE[propertyIndex];

    if (selectedProperty) {
      setProperty(selectedProperty);
    } else {
      setProperty(null);
    }

    setLoading(false);
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!property) return <p className="text-center mt-10">Property not found.</p>;

  return <PropertyDetail property={property} />;
}
