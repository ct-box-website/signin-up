import { ButtonWithIcon, Button } from "@/components/Button";
import DividerWithLabel from "@/components/Divider";
import SliderCompo from "@/components/Slider";
import TextInput from "@/components/TextInput";
import Image from "next/image";
import Link from "next/link";
import { SiNintendogamecube } from "react-icons/si";
export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-12">
      <div className="col-span-6 flex items-center justify-center p-24 px-36">
        <div className="w-full h-full flex flex-col space-y-5">

          <div className="flex items-center space-x-2">
            <SiNintendogamecube size={24} className="text-sky-500" />
            <p className="font-semibold text-slate-800 text-lg">dotwork</p>
          </div>

          <div className="flex flex-col space-y-1">
            <p className="text-xl font-semibold text-sky-800">Log in to Your Account</p>
            <p className="text-sm font-light text-slate-500">Welcome back! select method to log in.</p>
          </div>

          <div className="flex items-center gap-3">
            <ButtonWithIcon label="Google" icon="google" href="" />
            <ButtonWithIcon label="Facebook" icon="facebook" href="" />
          </div>

          <DividerWithLabel label="or continue with email" className="py-5" />

          <div className="flex flex-col space-y-5">
            <TextInput label="Email" type="email" placeholder="Email" />
            <TextInput label="Password" type="password" placeholder="Password" />
          </div>

          <div className="flex items-center justify-between w-full">

            <div className="flex items-center space-x-1">
              <input type="checkbox" name="" id="checkbox" className="" />
              <label htmlFor="checkbox" className="text-sm font-light text-slate-500">Remember me</label>
            </div>

            <Link href={''} className="text-sky-600 text-sm font-medium">Forgot password?</Link>
          </div>

          <div className="w-full flex items-center justify-center">
            <Button
              label="Log in"
              href="www.google.com"
            />
          </div>

          <div className="flex items-center justify-center gap-x-2 text-sm font-light">
            <p>Don&apos;t have account? </p>
            <Link href={''} className="text-sky-600 font-medium">Create account</Link>
          </div>

        </div>
      </div>
      <div className="col-span-6 bg-sky-500 p-20">
        <SliderCompo />
      </div>
    </main>
  );
}
