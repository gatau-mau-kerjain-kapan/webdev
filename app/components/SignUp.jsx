import Container from "./Container";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Router } from "next/router";

export default function SignUp() {
    const [authState, setAuthState] = useState("signup")
    const { currentUser, emailSignIn, emailSignUp, googleSignIn } = UserAuth();

    const handleEmailSignUp = async (displayName, email, password) => {
        try {
            await emailSignUp(displayName, email, password);
            // Router.push("/");
        } catch (error) {
            console.log(error);
        }
    }

    const handleEmailSignIn = async (email, password) => {
        try {
            await emailSignIn(email, password);
            // Router.push("/");
        } catch (error) {
            console.log(error);
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            // Router.push("/");
        } catch (error) {
            console.log(error);
        }
    }
    
    if(authState === "signup") {
    return (
        <section class=" bg-blueGray-50">
            <div class="w-full lg:w-6/12 px-4 mx-auto pt-6">
            <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-primaryFour border-0">
                <div class="rounded-t mb-0 px-6 py-6">
                <div class="text-center mb-3">
                    <h6 class="text-blueGray-500 text-sm font-bold">
                    Sign up with
                    </h6>
                </div>
                <div class="btn-wrapper text-center">
                    {/* <button class="bg-white active:bg-blueGray-50 text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                    <img alt="..." class="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/github.svg"/>Github </button> */}
                    <button class="bg-white active:bg-blueGray-50 text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"  onClick={handleGoogleSignIn} type="button">
                    <img alt="..." class="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"/>Google</button>
                    
                </div>
                <hr class="mt-6 border-b-1 border-blueGray-300"/>
                </div>
                <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div class="text-blueGray-400 text-center mb-3 font-bold">
                    <small>Or sign up with credentials</small>
                </div>
                <form>
                    <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password"> Name</label>
                    <input id="display-name" type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Name"/>
                    </div>

                    <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">Email</label>
                    <input id="email-signup" type="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email"/>
                    </div>

                    <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">Password</label>
                    <input id="password-signup" type="password" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Password"/>
                    </div>

                    <div>
                    <label class="inline-flex items-center cursor-pointer">
                        <input id="customCheckLogin" type="checkbox" class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"/>
                        <span class="ml-2 text-sm font-semibold text-blueGray-600">
                        I agree with the 
                        <a href="#" class="text-pink-500"> Privacy Policy
                        </a>
                        </span>
                    </label>
                    </div>

                    <div class="text-center mt-6">
                    <button class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button" onClick={() => handleEmailSignUp(document.getElementById("display-name").value, document.getElementById("email-signup").value, document.getElementById("password-signup").value)}>
                        Create Account
                    </button>
                    </div>
                </form>
                
                </div>
                
            </div>
            <div class="text-grey-dark mt-6 text-center">
                    Already having an account?
                    <a class="no-underline border-b border-blue text-blue" onClick={() => setAuthState("login")}> Login
                    </a>
                </div>
            </div>
        </section>
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
                            <input id="email-signin" class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="email" name="email" placeholder="name@provider.com"/>
                        </div>
                        <div>
                            <label class="text-gray-600 font-bold inline-block pb-2" for="password">Password</label>
                            <input id="password-signin" class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="password" name="password" placeholder="******"/>
                        </div>
                        <div class="flex">
                            <div class="w-1/2">
                                <input type="checkbox" name="remeberMe"/>
                                <label for="remeberMe">Remember me</label>
                            </div>
                            <div class="w-1/2">
                                <a class="font-bold text-blue-600" href="">Forgot password ?</a>
                            </div>
                        </div>
                        <div>
                            <input class="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]" type="submit" value="Login" onClick={() => handleEmailSignIn(document.getElementById("email-signin").value, document.getElementById("password-signin").value)}/>
                        </div>
                        <div>
                            <p class="text-center">Or continue with</p>
                        </div>
                        <div class="flex gap-4">
                            <button class="bg-[#1D9BF0] w-1/2 py-1 rounded-md text-white font-bold cursor-pointer hover:bg-[#00ff00]" onClick={handleGoogleSignIn}>Google</button>
                        </div>
                    </div>
                    <div class="text-grey-dark mt-6">
                    Not have an account? 
                    <a class="no-underline border-b border-primaryFour text-primaryOne" onClick={() => setAuthState("signup")} role="button"> Sign Up
                    </a>.
                </div>
                </div>
            </div>
        )
    }
}