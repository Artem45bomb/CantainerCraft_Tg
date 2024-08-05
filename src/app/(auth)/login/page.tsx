"use client";
import EmailIcon from "@assets/Email-icon.svg";
import PasswordIcon from "@assets/Password-icon.svg";
import GoogleIcon from "@assets/icon/Google-icon.svg";
import { ButtonAuth } from "@/shared/ButtonsAuth/ButtonAuth";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useState, FormEvent, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { checkExistUser, login } from "@/features/api/service/user.service";
import { checkEmail, checkPassword } from "@/features/api/util";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { userStore } from "@/features/store/user";
import axios, { AxiosError } from "axios";
import { setCookie } from "cookies-next";

export default function Login() {
  const [isShow, setShow] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const { initTokens } = userStore();
  const { pending } = useFormStatus();

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = (formData.get("username") as string).trim();
    const password = (formData.get("password") as string).trim();

    // let resultCheck: string | boolean;

    // resultCheck = checkEmail(email);

    // if (resultCheck !== true && typeof resultCheck === "string") {
    //   setError(resultCheck);
    //   return;
    // }

    // resultCheck = checkPassword(password);

    // if (resultCheck !== true && typeof resultCheck === "string") {
    //   setError(resultCheck);
    //   return;
    // }

    const response = await login({ username, password });

    if (response.message) {
      setError(response.message);
      return;
    }
    console.log("response", response);
    initTokens({
      accessToken: response.accessToken!,
      refreshToken: response.token!,
    });
    setCookie("accessToken", response.accessToken);
    router.push("/app");
  };

  return (
    <main className=" flex items-center justify-center w-full h-full bg-msu-green">
      <form
        onSubmit={submitForm}
        className="max-w-2xl px-20 py-8 m-auto bg-police-blue rounded-2xl"
      >
        <div className="flex flex-col gap-5">
          <div className="mb-10 text-center">
            <p className="pb-1 text-3xl font-bold">Welcome back</p>
            <p>
              Don’t have an account yet?{" "}
              <Link href={"/registration"} className="text-crystal">
                Sign up
              </Link>
            </p>
          </div>
          <div className="flex items-center w-full gap-2 p-2  bg-msu-green border border-desaturated-cyan rounded-lg">
            <div>
              <EmailIcon />
            </div>
            <input
              className="w-full"
              name="username"
              placeholder="username"
              type="text"
            />
          </div>
          <div className="w-full">
            <div className="flex items-center w-full gap-2 p-2 bg-msu-green border border-desaturated-cyan rounded-lg">
              <div>
                <PasswordIcon />
              </div>
              <input
                className="w-full text-c88"
                name="password"
                placeholder="Password"
                type={!isShow ? "password" : "text"}
              />
              <div
                onClick={() => setShow((prev) => !prev)}
                className="relative w-6 h-5"
              >
                {isShow ? (
                  <Image fill src="/assets/icon/Eye.svg" alt="" />
                ) : (
                  <Image fill src="/assets/icon/Eye-closed.svg" alt="" />
                )}
              </div>
            </div>
            <div className="text-red-700 h-4">{error && error}</div>
          </div>
          <button
            disabled={pending}
            type="submit"
            className="w-full py-3 text-center bg-crystal rounded-lg"
          >
            Sign In
          </button>
          <div className="flex items-center">
            <hr className="w-full bg-white" style={{ height: 1 }} />
            <span className="mx-2 ">OR</span>
            <hr className="w-full bg-white" style={{ height: 1 }} />
          </div>
          <div className="flex gap-5 justify-between">
            <div className="w-full">
              <ButtonAuth
                onClick={() => {
                  signIn("google");
                }}
              >
                <div className="my-1">
                  <GoogleIcon />
                </div>
              </ButtonAuth>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
