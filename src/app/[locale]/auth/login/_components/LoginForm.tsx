"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faLock } from "@fortawesome/free-solid-svg-icons";
import { AbstractIntlMessages } from "next-intl";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ErrorForm, LoginInput } from "@/components";

function LoginForm({
  messages,
  errors,
}: {
  messages: AbstractIntlMessages;
  errors: AbstractIntlMessages;
}) {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (res?.error) setError(res.error as string);

    if (res?.ok) return router.push("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      {error && <ErrorForm error={errors[error]}></ErrorForm>}
      <div className="mb-4">
        <LoginInput
          id="email"
          name="email"
          label={messages["email"].toString()}
          placeholder={messages["email_placeholder"].toString()}
          leading={<FontAwesomeIcon icon={faEnvelope} className="w-4" />}
        ></LoginInput>
      </div>
      <div className="mb-1">
        <LoginInput
          id="password"
          name="password"
          inpuType="password"
          label={messages["password"].toString()}
          placeholder={messages["password_placeholder"].toString()}
          leading={<FontAwesomeIcon icon={faLock} className="w-4" />}
          trailing={
            <button>
              <FontAwesomeIcon icon={faEye} className="w-4" />
            </button>
          }
        ></LoginInput>
      </div>
      <div className="text-gray-900 text-right">
        <a href="#" className="hover:underline">
          {messages["forgot_password"].toString()}
        </a>
      </div>
      <div className="text-center mt-16 ">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md py-3 px-4 w-2/3"
        >
          {messages["login"].toString()}
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
