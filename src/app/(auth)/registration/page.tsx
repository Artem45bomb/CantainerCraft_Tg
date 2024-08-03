"use client";
import { FormEvent, useState, useEffect } from "react";
import NameIcon from "@assets/Nick-icon.svg";
import PasswordIcon from "@assets/Password-icon.svg";
import EmailIcon from "@assets/Email-icon.svg";
import GoogleIcon from "@assets/icon/Google-icon.svg";
import { ButtonAuth } from "@/shared/ButtonsAuth/ButtonAuth";
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

  useEffect(() => {
    const check = async () => {
      await checkExistUser(username)
        .then(() => {
          router.push("/");
        })
        .catch(() => {
          setUsername(data?.user?.name || "");
          setEmail(data?.user?.email || "");
          setPassword("");
        });
    };
    if (status === "authenticated") {
      check();
    }
  }, [status]);

  const input = () => {
    if (Boolean(error) === true) setError("");
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = (formData.get("name") as string).trim();
    const email = (formData.get("email") as string).trim();
    const password = (formData.get("password") as string).trim();

    // let resultCheck: string | boolean;

    // resultCheck = checkName(username);

    // if (resultCheck !== true && typeof resultCheck === "string") {
    //   setError(resultCheck);
    //   return;
    // }

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
    router.push("/");
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
          <div className="flex items-center w-full relative gap-2 p-2 bg-msu-green border border-desaturated-cyan rounded-lg">
            <div>
              <NameIcon />
            </div>
            <input
              value={username && username}
              name="name"
              onChange={setInputName}
              placeholder="Name"
              type="text"
              className="w-full rounded-lg bg-none"
            />
          </div>
          <div className="flex items-center w-full relative gap-2 p-2 bg-msu-green border border-desaturated-cyan rounded-lg">
            <div>
              <EmailIcon />
            </div>
            <input
              className="w-full"
              onChange={setInputEmail}
              value={email && email}
              name="email"
              placeholder="Email"
              type="text"
            />
          </div>
          <div className="w-full">
            <div className="flex items-center w-full  relative gap-2 p-2 bg-msu-green border border-desaturated-cyan rounded-lg">
              <div>
                <PasswordIcon />
              </div>
              <input
                value={password}
                onChange={setInputPassword}
                className="w-full"
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
          <div className="flex items-center w-full gap-2 p-2 bg-msu-green border border-desaturated-cyan rounded-lg">
            <div>
              <PasswordIcon />
            </div>
            <input
              className="w-full"
              name="passwordCopy"
              onChange={input}
              placeholder="Repeat your password"
              type={!isShow ? "password" : "text"}
            />
          </div>
          <div className="w-full mb-6">
            <ComplixityPassword password={password} />
          </div>
          <button
            disabled={pending}
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
          <div className="w-full">
            <ButtonAuth onClick={() => signIn("google")}>
              <div className="my-1">
                <GoogleIcon />
              </div>
            </ButtonAuth>
          </div>
        </div>
      </form>
    </main>
  );
}
