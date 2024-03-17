import { Button, Input } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";

export const Footer = () => {
  return (
    <footer className="w-full bg-indigo-900 text-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10">
        <div className="w-full lg:w-[400px] bg-blue-gray-900 rounded-3xl flex flex-col justify-center items-center text-center lg:text-left px-8 py-6 lg:py-8">
          <h1 className="text-xl font-bold mb-2">Sign up for email alerts</h1>
          <h5 className="text-sm">Stay current with our insights</h5>
          <div className="flex gap-3 mt-3"> 
            <Input color="white" label="Enter Email Here" />
            <Button color="amber">Submit</Button>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <nav>
            <ul className="flex flex-col gap-2 lg:gap-4">
              <li className="hover:border-b-2"><a href="#">Contact Us</a></li>
              <li className="hover:border-b-2"><a href="#">FAQ</a></li>
              <li className="hover:border-b-2"><a href="#">Privacy Policy</a></li>
              <li className="hover:border-b-2"><a href="#">Terms of Use</a></li>
              <li className="hover:border-b-2"><a href="#">Global Office</a></li>
              <li className="hover:border-b-2"><a href="#">Local Office</a></li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-10">
          <div className="flex flex-col items-center gap-3">
            <IconButton className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
              <i className="fab fa-google text-lg" />
            </IconButton>
            <IconButton className="rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
              <i className="fab fa-twitter text-lg" />
            </IconButton>
            <IconButton className="rounded bg-[#ea4c89] hover:shadow-[#ea4c89]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10">
              <i className="fab fa-dribbble text-lg" />
            </IconButton>
            <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
              <i className="fab fa-github text-lg" />
            </IconButton>
          </div>
          <div>
            <nav>
                <ul className="flex flex-col gap-8 text-center lg:text-left">
                    <li>Google</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>GitHub</li>
                </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="w-full min-h-16 border-t-2 my-10 flex justify-center items-center">
        <div className="container mx-auto flex justify-between items-center">
          <img
            src="https://prium.github.io/elixir/v3.0.0/assets/img/logo-light.png"
            alt=""
            className="w-24"
          />
          <div className="text-center lg:text-left">
            <p>Copyright 2021 Elixir Inc</p>
            <p>Designed by Zurheb</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
