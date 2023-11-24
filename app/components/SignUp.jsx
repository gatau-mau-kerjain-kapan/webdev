import Container from "./Container";
import { useState } from "react";

export default function SignUp() {
    const [authState, setAuthState] = useState("signup")

    if(authState === "signup") {
    return (
        <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account? 
                    <a class="no-underline border-b border-blue text-blue" onClick={() => setAuthState("login")}>
                         Log in
                    </a>.
                </div>
            </div>
        </div>
    )
    } else {
        return (
            <div class="bg-[#F9FAFB] h-screen w-screen flex items-center">
                <div class="h-max mx-auto flex flex-col items-center">
                    <img class="h-[40px] w-[47px] mb-5" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
                    <h1 class="text-xl font-bold text-center pb-10">Sign in to your account</h1>
                    <div class="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm">
                        <div>
                            <label class="text-gray-600 font-bold inline-block pb-2" for="email">Email</label>
                            <input class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="email" name="email" placeholder="mehedi@jaman.com"/>
                        </div>
                        <div>
                            <label class="text-gray-600 font-bold inline-block pb-2" for="password">Password</label>
                            <input class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="password" name="password" placeholder="******"/>
                        </div>
                        <div class="flex">
                            <div class="w-1/2">
                                <input type="checkbox" name="remeberMe"/>
                                <label for="remeberMe">Remeber me</label>
                            </div>
                            <div class="w-1/2">
                                <a class="font-bold text-blue-600" href="">Forgot password ?</a>
                            </div>
                        </div>
                        <div>
                            <input class="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]" type="submit" value="Login" />
                        </div>
                        <div>
                            <p class="text-center">Or continue with</p>
                        </div>
                        <div class="flex gap-4">
                            <button class="bg-[#1D9BF0] w-1/2 py-1 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]">Twitter</button>
                            <button class="bg-[#24292F] w-1/2 py-1 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]">Github</button>
                        </div>
                    </div>
                    <div class="text-grey-dark mt-6">
                    Not have an account? 
                    <a class="no-underline border-b border-blue text-blue" onClick={() => setAuthState("signup")}>
                         SignUp
                    </a>.
                </div>
                </div>
            </div>
        )
    }
}