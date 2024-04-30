"use client";
import { FormEvent, useState } from "react";
import NameIcon from "@assets/Nick-icon.svg";
import PasswordIcon from "@assets/Password-icon.svg";
import EmailIcon from "@assets/Email-icon.svg";
import GoogleIcon from "@assets/icon/Google-icon.svg";
import TgIcon from "@assets/icon/Tg-icon.svg";
import VkIcon from "@assets/icon/Vk-icon.svg";
import { ButtonAuth } from "@/shared/ButtonsAuth/ButtonAuth";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { login, registration } from "@/features/api/service/user.service";
import { checkEmail, checkName, checkPassword } from "@/features/api/util/form";

export default function Registration() {
  const [isShow, setShow] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const input = () => {
    if (Boolean(error) === true) setError("");
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string).trim();
    const email = (formData.get("email") as string).trim();
    const password = (formData.get("password") as string).trim();

    let resultCheck: string | boolean;

    resultCheck = checkName(name);

    if (resultCheck !== true && typeof resultCheck === "string") {
      setError(resultCheck);
      return;
    }

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

    await registration({ email, name, password })
      .then((user) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className="flex items-center justify-center w-full h-full bg-msu-green">
      <form
        onSubmit={submitForm}
        className="max-w-2xl px-20 py-8 m-auto bg-police-blue rounded-2xl"
      >
        <div className="mb-4 text-center">
          <p className="pb-1 text-3xl font-bold">Welcome</p>
          <p>
            Do you already have an account? <span>Login</span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-5">
          <div className="flex w-full relative gap-2 p-2 bg-msu-green border border-desaturated-cyan rounded-lg">
            <NameIcon />
            <input
              name="name"
              onChange={input}
              placeholder="Name"
              type="text"
              className="w-full rounded-lg bg-none"
            />
          </div>
          <div className="flex w-full relative gap-2 p-2 bg-msu-green border border-desaturated-cyan rounded-lg">
            <EmailIcon />
            <input name="email" placeholder="Email" type="text" />
          </div>
          <div className="w-full">
            <div className="flex w-full relative gap-2 p-2 bg-msu-green border border-desaturated-cyan rounded-lg">
              <NameIcon />
              <input
                name="password"
                onChange={input}
                placeholder="Password"
                type={!isShow ? "password" : "text"}
              />
            </div>
            <div className="text-red-700 h-4">{error && error}</div>
          </div>
          <div className="flex w-full gap-2 p-2 bg-msu-green border border-desaturated-cyan rounded-lg">
            <PasswordIcon />
            <input
              name="passwordCopy"
              onChange={input}
              placeholder="Repeat your password"
              type={!isShow ? "password" : "text"}
            />
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
