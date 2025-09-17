"use client";

import { useLoginMutation } from "@/app/queryHandler/mutation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/store/hooks";
import { setUser } from "@/store/slice/userService/userService";
import { LoginFormData } from "@/types";
import { setCookie } from "@/utils/cookies";
import { zodResolver } from "@hookform/resolvers/zod";
import { addMilliseconds } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { LoginFormSchema } from "./validations";

const LoginPage = () => {
  const router = useRouter();
  const { mutate: loginMutation, data } = useLoginMutation();
  const dispatch = useAppDispatch();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (!data) return;

    if (data) {
      const { accessToken, refreshToken, expiresIn } = data?.data.data || {};
      // const {
      //   balance,
      //   firstName,
      //   lastName,
      //   businessEmailAddress,
      //   businessPhoneNumber,
      // } = data?.data.data?.UserBusinessDetail || {};
      dispatch(
        setUser({
          isAuthenticated: Boolean(accessToken),
          accessToken,
          refreshToken,
          email: form.getValues("email"),
        })
      );

      const tokenExpiration = addMilliseconds(new Date(), expiresIn);
      setCookie("expiresIn", tokenExpiration?.toISOString(), tokenExpiration);

      // setLoginSuccess(true);
      router.push("/change-password");
    } else {
      return;
    }
  }, [router, data, dispatch]);

  const onSubmit = async (data: LoginFormData) => {
    console.log(data);
    router.push("/dashboard");
    dispatch(
      setUser({
        email: form.getValues("email"),
      })
    );
  };
  return (
    <div className="flex flex-col items-center w-full">
      <Image
        src="/images/auth-avatar.png"
        alt="logo"
        width={100}
        height={100}
      />
      <h1 className="text-2xl font-bold mt-4">Welcome</h1>
      <p className="text-sm text-gray-500">
        Login to easily mangage your USSD Platform
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 mt-4 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    label="Email"
                    placeholder="Enter Email Address"
                    {...field}
                    className="border-b w-full border-text-primary"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    label="Password"
                    placeholder="Enter your Password"
                    className="border-b w-full border-text-primary"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full rounded-xl h-12 text-white" type="submit">
            Login
          </Button>
          <div className="flex items-center justify-end">
            <Link
              href="/forgot-password"
              className="text-base text-primary justify-end
              "
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginPage;
