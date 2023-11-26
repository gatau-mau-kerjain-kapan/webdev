import { NextResponse } from "next/server";

export async function GET(req, res) {
  return NextResponse.json([
    {
      key: 1,
      source: "/asset_kopi/kopi_aceh.png",
      title: "Kopi Aceh",
      price: "Rp27.000",
      desc: "Salah satu kopi terbaik di dunia. Dengan tingkat ketajaman aroma tingkat tinggi serta rasa aftertaste yang tidak pahit, membuatnya layak menyandang gelar itu.",
      col: "black",
    },
    {
      key: 2,
      source: "/asset_kopi/kopi_bali.png",
      title: "Kopi Bali",
      price: "Rp29.000",
      desc: "Rasa ringan yang ditawarkan dengan kesegaran yang seperti buah jeruk, membuat kopi ini cocok diminum bagi kalangan siapapun",
      col: "black",
    },
    {
      key: 3,
      source: "/asset_kopi/kopi_jawa.png",
      title: "Kopi Jawa",
      price: "Rp30.000",
      desc: "Perpaduan antara rasa dan aroma yang nikmat, ditambah dengan ukuran biji yang kecil menambah daya tarik kopi Jawa",
      col: "black",
    },
    {
      key: 4,
      source: "/asset_kopi/kopi_toraja.png",
      title: "Kopi Toraja",
      price: "Rp30.000",
      desc: "Kopi khas asli Toraja yang cenderung floral dan fruity. Kopi ini juga memiliki rasa kuat dan aftertaste yang cenderung berbeda dibanding yang lainnya.",
      col: "black",
    },
  ]);
}
