import { NextResponse } from "next/server";

export async function GET(req, res) {
  return NextResponse.json([
    {
      key: 1,
      source: "/asset_kopi/kopi_aceh.png",
      title: "kopi aceh",
    },
    {
      key: 2,
      source: "/asset_kopi/kopi_bali.png",
      title: "kopi bali",
      col: "black",
    },
    {
      key: 3,
      source: "/asset_kopi/kopi_jawa.png",
      title: "kopi jawa",
      col: "black",
    },
    {
      key: 4,
      source: "/asset_kopi/kopi_toraja.png",
      title: "kopi toraja",
      col: "black",
    },
  ]);
}
