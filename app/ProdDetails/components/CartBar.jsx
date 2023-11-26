import Link from "next/link";

export default function CartBar() {
    return (
        <div className="bg-primaryThree">
        <div className="flex-no-wrap container relative top-0 z-10 flex flex-wrap items-center justify-between px-8 py-2 mx-auto lg:justify-between xl:px-0 w-[99vw] ">
            <div className="text-sm">Get first time discount for only 50% off!</div>
            <Link href="/cart" className="px-3 py-2 text-center text-white dark:text-primaryOne bg-primaryOne dark:bg-primaryFour rounded-md lg:ml-5"> My Cart</Link>
        </div>
        </div>
    );
}
