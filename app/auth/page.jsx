"use client";

import Image from "next/image";
import SignUp from "../components/SignUp";
import { UserAuth } from "../context/AuthContext";

export default function Auth() {
    const { currentUser, googleLogOut } = UserAuth();

    
    if(currentUser) {
        return (
            <>
            <div className="flex flex-col items-center justify-center">
                <h1 className="mt-5 text-3xl font-bold text-center">You are already logged in!</h1>
                <Image src="/img/coffee-icon.png" alt="coffee icon" width="512" height="512" />
            </div>

            <button class="bg-blueGray-800 light:text-black dark:text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button" onClick={googleLogOut}>
            Log Out
            </button>
            </>
        )
    } else {
        return (
            <SignUp />
        )
    }
}
