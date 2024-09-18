"use client";
import NameIcon from "@assets/Nick-icon.svg";
import PasswordIcon from "@assets/Password-icon.svg";
import GoogleIcon from "@assets/icon/Google-icon.svg";
import { ButtonAuth } from "@/shared/ButtonsAuth/ButtonAuth";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState, FormEvent, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { checkExistUser, login } from "@/features/api/service/user.service";
import { checkEmail, checkPassword } from "@/features/api/util";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { userStore } from "@/features/store/user";
import { updateTokens } from "@/features/api/service";

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

    let resultCheck: string | boolean;

    resultCheck = checkPassword(password);

    if (resultCheck !== true && typeof resultCheck === "string") {
      setError(resultCheck);
      return;
    }

    const response = await login({ username, password });

    if (response.message) {
      setError(response.message);
      return;
    }

    initTokens({
      accessToken: response.accessToken!,
      refreshToken: response.token!,
    });

    updateTokens(response.accessToken!, response.token!);
    router.push("/app");
  };

  return (
    <main className=" flex items-center justify-center w-full h-full bg-FFFFFF">
      <form
        onSubmit={submitForm}
        className="w-600px px-16 py-[2.4%] bg-FFFFFF border-2 border-1E2E66 rounded-2xl
        tablet:max-h-[60%] tablet:py-[2%] tablet:max-w-[53%] tablet:min-h-[500px]
        laptop:max-h-[80%] laptop:py-[1.4%] laptop:w-[40%] laptop:px-[3%] laptop:max-w-[43%]
        desktop:max-w-[32%]
        4k:max-h-[80%] 4k:py-[2%] 4k:max-w-[30%] 4k:px-[4%] 4k:w-[40%] 4k:border-3px 4k:min-w-32"
      >
        <div className="tablet:pb-1 laptop:pb-[4%] flex justify-center items-center">
          <Image
            width={"100"}
            height={"100"}
            src="assets/icon/Logo-icon.svg"
            alt="Logo"
            className=" tablet:w-[23%] tablet:min-h-12 laptop:w-[19%] laptop:min-h-20 4k:w-[17%] 4k:min-w-36"
          />
        </div>
        <div className="flex flex-col gap-5 tablet:gap-3">
          <div className="mb-[7%] text-center">
            <p className="pb-[1%] tablet:text-2xl text-3xl 4k:text-6xl font-bold">
              Welcome back
            </p>
            <p className="4k:text-4xl tablet:text-sm">
              Don’t have an account yet?{" "}
              <Link href={"/registration"} className="text-sky-600">
                Sign up
              </Link>
            </p>
          </div>
          <div className="flex items-center w-full relative gap-2 p-2 4k:p-6 4k:rounded-2xl 4k:border-2px bg-DDE4FF border border-0A216F rounded-lg">
            <div>
              <Image
                width={"100"}
                height={"100"}
                src="assets/Nick-icon.svg"
                alt="Logo"
                className=" tablet:w-4 tablet:overflow-visible tablet:mr-2 4k:mr-6 4k:w-12"
              />
            </div>
            <input
              className="w-full 4k:text-3xl"
              name="username"
              placeholder="username"
              type="text"
            />
          </div>
          <div className="w-full">
            <div className="flex items-center w-full relative gap-2 p-2 4k:p-6 4k:rounded-2xl 4k:border-2px bg-DDE4FF border border-0A216F rounded-lg">
              <Image
                width={"100"}
                height={"100"}
                src="assets/Password-icon.svg"
                alt="Logo"
                className=" tablet:w-4 tablet:overflow-visible tablet:mr-2 4k:mr-6 4k:w-12"
              />

              <input
                className="w-full text-c88 4k:text-3xl"
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
            className="w-full tablet:py-2 py-3 4k:py-8 4k:text-4xl text-center text-0A216F bg-7289D9 rounded-lg"
          >
            Sign In
          </button>
          <div className="flex items-center">
            <hr className="w-full bg-0A216F" style={{ height: 2 }} />
            <span className="mx-2 text-lg 4k:text-4xl text-0A216F font-semibold">
              OR
            </span>
            <hr className="w-full bg-0A216F" style={{ height: 2 }} />
          </div>
          <div className="flex gap-5 justify-between">
            <div className="w-full">
              <ButtonAuth
                onClick={() => {
                  signIn("google");
                }}
              >
                <div>
                  <Image
                    width={"100"}
                    height={"100"}
                    src="assets/icon/Google-icon.svg"
                    alt="GoogleIcon"
                    className=" tablet:w-6 4k:w-12"
                  />
                </div>
              </ButtonAuth>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
