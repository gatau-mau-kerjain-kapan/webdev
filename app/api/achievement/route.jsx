import { NextResponse } from "next/server";

export async function GET(req, res) {
  return NextResponse.json([
    {
      key: 1,
      data: 20000,
      desc: "products sold in Indonesia",
      col: "#317897",
    },
    {
      key: 2,
      data: 30,
      desc: "our outlet spread across the country",
      col: "#409D86",
    },
    {
      key: 3,
      data: 200,
      desc: "worker spread across the country",
      col: "#6D69AD",
    },
    {
      key: 4,
      data: 300,
      desc: "coffee farmer helped by us",
      col: "#B26973",
    },
  ]);
}
