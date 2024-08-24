"use client";
import { StatusError } from "@/features/api/exception/StatusError";
import { fetchWrapper } from "@/features/api/service";
import { error } from "console";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function TestPage() {
  const submit = async () => {
    console.log("click");

    try {
      const res = await fetchWrapper(
        "http://localhost:8081/micro-users/api/user/all",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        },
      );
      console.log(res);
    } catch (e) {
      const error: any = e as any;
      console.log("status", error.status, "error:", error);
    }
  };

  return (
    <div>
      <button onClick={submit}>sub</button>
    </div>
  );
}
