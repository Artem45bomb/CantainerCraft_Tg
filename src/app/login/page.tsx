"use client";
import EmailIcon from "@assets/Email-icon.svg";
import PasswordIcon from "@assets/Password-icon.svg";
import GoogleIcon from "@assets/icon/Google-icon.svg";
import TgIcon from "@assets/icon/Tg-icon.svg";
import VkIcon from "@assets/icon/Vk-icon.svg";
import { ButtonAuth } from "@/shared/ButtonsAuth/ButtonAuth";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState, FormEvent } from "react";
import { login } from "@/features/api/service/user.service";
import { checkEmail, checkPassword } from "@/features/api/util/form";

console.log(`${checkPassword("aaa")}`);

export default function Login() {
  const [isShow, setShow] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const input = () => {
    if (Boolean(error) === true) setError("");
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = (formData.get("email") as string).trim();
    const password = (formData.get("password") as string).trim();

    let resultCheck: string | boolean;

    resultCheck = checkEmail(email);

    if (resultCheck !== true && typeof resultCheck === "string") {
      setError(resultCheck);
      return;
    }

    resultCheck = checkPassword(password);

    if (resultCheck !== true && typeof resultCheck === "string") {
      setError(resultCheck);
      return;
    }

    await login({ email, password })
      .then((user) => {})
      .catch((error) => {
        console.log(error);
      });
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
              Don’t have an account yet? <span>Sign up</span>
            </p>
          </div>
          <div className="flex w-full gap-2 p-2  bg-msu-green border border-desaturated-cyan rounded-lg">
            <EmailIcon />
            <input
              name="email"
              onChange={input}
              placeholder="Email addres"
              type="text"
            />
          </div>
          <div className="w-full">
            <div className="flex w-full gap-2 p-2 bg-msu-green border border-desaturated-cyan rounded-lg">
              <PasswordIcon />
              <input
                name="password"
                onChange={input}
                placeholder="Password"
                type={!isShow ? "password" : "text"}
              />
            </div>
            <div className="text-red-700 h-4">{error && error}</div>
          </div>
          <button
            type="submit"
            className="w-full py-3 text-center bg-crystal rounded-lg"
          >
            Sign Up
          </button>
          <div className="flex items-center">
            <hr className="w-full bg-white" style={{ height: 1 }} />
            <span className="mx-2 ">OR</span>
            <hr className="w-full bg-white" style={{ height: 1 }} />
          </div>
          <div className="flex gap-5 justify-between">
            <ButtonAuth
              onClick={() => {
                signIn("google");
              }}
            >
              <div className="my-1">
                <GoogleIcon />
              </div>
            </ButtonAuth>
            <ButtonAuth
              onClick={() => {
                signIn("google");
              }}
            >
              <div className="my-1">
                <VkIcon />
              </div>
            </ButtonAuth>
            <ButtonAuth
              onClick={() => {
                signIn("google");
              }}
            >
              <div className="my-1">
                  <TgIcon />
              </div>
            </ButtonAuth>
          </div>
        </div>
      </form>
    </main>
  );
}
