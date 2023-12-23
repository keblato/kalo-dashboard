import { KaloImages } from "@/constants/index";
import { AbstractIntlMessages, useMessages, useTranslations } from "next-intl";
import Link from "next/link";
import LoginForm from "./_components/LoginForm";

function LoginPage() {
  const t = useTranslations("Login");
  const messages = useMessages();

  return (
    <div className="bg-white flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src={KaloImages.loginImage}
          alt="Login image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className=" lg:px-30 md:p-52 sm:20 p-8 w-full lg:w-3/4">
        <h1 className="text-4xl font-semibold mb-6 text-blue-600">
          {t("title")}
        </h1>
        <LoginForm
          messages={messages!["Login"]! as AbstractIntlMessages}
          errors={messages!["ERROR"]! as AbstractIntlMessages}
        ></LoginForm>
        <hr className="border-t border-gray-300 mt-8" />
        <div className="flex justify-between mt-4 text-right">
          <div> {t("not_registered_yet")}</div>
          <Link href="/" className="hover:underline  text-blue-500">
            {t("register")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
