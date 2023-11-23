import { NextResponse } from "next/server";

export async function GET(req, res) {
  return NextResponse.json([
    {
      key: 1,
      source: "/aset_core/fairness.jpg",
      title: "fairness",
      col: "#317897",
    },
    {
      key: 2,
      source: "/aset_core/hygiene.jpg",
      title: "hygiene",
      col: "#409D86",
    },
    {
      key: 3,
      source: "/aset_core/organic.jpg",
      title: "organic",
      col: "#6D69AD",
    },
    {
      key: 4,
      source: "/aset_core/sustainable.jpg",
      title: "sustainable",
      col: "#B26973",
    },
  ]);
}
