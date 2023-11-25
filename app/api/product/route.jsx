import { NextResponse } from "next/server";

export async function GET(req, res) {
  return NextResponse.json([
    {
      key: 1,
      source: "/asset_kopi/kopi_aceh.png",
      title: "kopi aceh",
      price: "Rp27.000",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ad ea minus repellat neque, recusandae suscipit veritatis soluta dolorum cumque voluptates eligendi, vel dignissimos obcaecati consequuntur odit quisquam fugit porro.",
      col: "black",
    },
    {
      key: 2,
      source: "/asset_kopi/kopi_bali.png",
      title: "kopi bali",
      price: "Rp29.000",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ad ea minus repellat neque, recusandae suscipit veritatis soluta dolorum cumque voluptates eligendi, vel dignissimos obcaecati consequuntur odit quisquam fugit porro.",
      col: "black",
    },
    {
      key: 3,
      source: "/asset_kopi/kopi_jawa.png",
      title: "kopi jawa",
      price: "Rp30.000",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ad ea minus repellat neque, recusandae suscipit veritatis soluta dolorum cumque voluptates eligendi, vel dignissimos obcaecati consequuntur odit quisquam fugit porro.",
      col: "black",
    },
    {
      key: 4,
      source: "/asset_kopi/kopi_toraja.png",
      title: "kopi toraja",
      price: "Rp30.000",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ad ea minus repellat neque, recusandae suscipit veritatis soluta dolorum cumque voluptates eligendi, vel dignissimos obcaecati consequuntur odit quisquam fugit porro.",
      col: "black",
    },
  ]);
}
