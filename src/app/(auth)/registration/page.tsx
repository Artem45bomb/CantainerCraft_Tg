"use client";
import { FormEvent, useState, useEffect } from "react";
import NameIcon from "@assets/Nick-icon.svg";
import PasswordIcon from "@assets/Password-icon.svg";
import EmailIcon from "@assets/Email-icon.svg";
import GoogleIcon from "@assets/icon/Google-icon.svg";
import { ButtonAuth } from "@/shared/ButtonsAuth/ButtonAuth";
import LogoIcon from "@assets/icon/Logo-icon.svg";
import { signIn, useSession } from "next-auth/react";
import {
  checkExistUser,
  registration,
  MessageError,
  isMessageError,
} from "@/features/api/service/user.service";
import { checkEmail, checkName, checkPassword } from "@/features/api/util";
import { useInput } from "@/features/hooks/customHook";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import ComplixityPassword from "@/widgets/ComplixityPassword";
import Image from "next/image";
import { userStore } from "@/features/store/user";
import { setCookie } from "cookies-next";

export default function Registration() {
  const [isShow, setShow] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { initTokens } = userStore();
  const [username, setInputName, setUsername] = useInput("");
  const [email, setInputEmail, setEmail] = useInput("");
  const [password, setInputPassword, setPassword] = useInput("");

  const { status, data } = useSession();
  const router = useRouter();
  const { pending } = useFormStatus();

  // useEffect(() => {
  //   const check = async () => {
  //     await checkExistUser(username)
  //       .then(() => {
  //         router.push("/");
  //       })
  //       .catch(() => {
  //         setUsername(data?.user?.name || "");
  //         setEmail(data?.user?.email || "");
  //         setPassword("");
  //       });
  //   };
  //   if (status === "authenticated") {
  //     check();
  //   }
  // }, [status]);

  const input = () => {
    if (Boolean(error) === true) setError("");
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = (formData.get("name") as string).trim();
    const email = (formData.get("email") as string).trim();
    const password = (formData.get("password") as string).trim();

    let resultCheck: string | boolean;

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

    const response = await registration({ email, username, password });

    if (response.message) {
      setError(response.message);
      return;
    }

    initTokens({
      accessToken: response.accessToken!,
      refreshToken: response.token!,
    });
    setCookie("accessToken", response.accessToken);
    router.push("/app");
  };

  return (
    <main
      className="flex items-center justify-center w-full h-full bg-FFFFFF"
      style={{ flex: 1 }}
    >
      <form
        onSubmit={submitForm}
        className="max-w-6xl w-650px px-20 py-[2.4%] bg-FFFFFF border-2 border-1E2E66 rounded-2xl
        tablet:max-h-[76%] tablet:py-[2%] 
        laptop:max-h-[80%] laptop:py-[1.4%]
        fourK:max-h-[80%] fourK:py-[2%] fourK:px-[5%] fourK:w-[50%] fourK:border-3px"
      >
        <div className="tablet:pb-1 laptop:pb-[4%] flex justify-center items-center">
          <Image
            width={"100"}
            height={"100"}
            src="assets/icon/Logo-icon.svg"
            alt="Logo"
            className=" tablet:w-[14%] tablet:min-h-12 laptop:w-[16%] laptop:min-h-20 fourK:w-[16%]"
          />
        </div>
        <div className="tablet:mb-1 laptop:mb-[2%] mb-4 text-center">
          <p className="pb-1 text-3xl text-2F50C3 fourK:pb-[3%] fourK:text-6xl">
            Welcome
          </p>
          <p className="fourK:text-3xl">
            Do you already have an account? <span>Login</span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-5 fourK:gap-7">
          <div className="flex items-center w-full relative gap-2 p-2 fourK:p-6 bg-DDE4FF border border-0A216F fourK:rounded-2xl fourK:border-2px rounded-lg">
            <div>
              <NameIcon />
            </div>
            <input
              value={username && username}
              name="name"
              onChange={setInputName}
              placeholder="Name"
              type="text"
              className="w-full rounded-lg bg-none fourK:text-4xl "
            />
          </div>
          <div className="flex items-center w-full relative gap-2 p-2 fourK:p-6 fourK:rounded-2xl fourK:border-2px bg-DDE4FF border border-0A216F rounded-lg">
            <div>
              <EmailIcon />
            </div>
            <input
              className="w-full fourK:text-4xl"
              onChange={setInputEmail}
              value={email && email}
              name="email"
              placeholder="Email"
              type="text"
            />
          </div>
          <div className="w-full">
            <div className="flex items-center w-full  relative gap-2 p-2 fourK:p-6 fourK:rounded-2xl fourK:border-2px bg-DDE4FF border border-0A216F rounded-lg">
              <div>
                <PasswordIcon />
              </div>
              <input
                value={password}
                onChange={setInputPassword}
                className="w-full fourK:text-4xl"
                name="password"
                placeholder="Create a password"
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
            <p className="text-0A216F h-4 tablet:h-2 text-xs fourK:text-2xl fourK:h-10 font-SegoeUIVariable ">
              The password must be at least 8 characters long
            </p>
            <div className="text-red-700">{error && error}</div>
          </div>
          <div className="flex items-center w-full gap-2 p-2 fourK:p-6 bg-DDE4FF fourK:rounded-2xl fourK:border-2px border border-0A216F rounded-lg">
            <div>
              <PasswordIcon />
            </div>
            <input
              className="w-full fourK:text-4xl"
              name="passwordCopy"
              onChange={input}
              placeholder="Repeat your password"
              type={!isShow ? "password" : "text"}
            />
          </div>
          <button
            disabled={pending}
            type="submit"
            className="w-full tablet:py-[1.4%] py-3 fourK:py-8 fourK:text-4xl text-center text-0A216F bg-7289D9 rounded-lg"
          >
            Sign Up
          </button>
          <div className="flex items-center">
            <hr className="w-full bg-0A216F" style={{ height: 2 }} />
            <span className="mx-2 text-lg fourK:text-4xl text-0A216F font-semibold">
              OR
            </span>
            <hr className="w-full bg-0A216F" style={{ height: 2 }} />
          </div>
          <div className="w-full">
            <ButtonAuth onClick={() => signIn("google")}>
              <div className="my-1 tablet:my-0 tablet:h-4 fourK:p-8 tablet:justify-center tablet:items-center tablet:flex">
                <GoogleIcon />
              </div>
            </ButtonAuth>
          </div>
        </div>
      </form>
    </main>
  );
}
