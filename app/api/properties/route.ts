import { NextResponse } from "next/server";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

export async function GET() {
  // Return property data as JSON
  return NextResponse.json(PROPERTYLISTINGSAMPLE);
}
