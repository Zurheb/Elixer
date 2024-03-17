import React from "react";
import { Button, Carousel } from "@material-tailwind/react";
import { SimpleCard2 } from "./WhyCard/WhuCard";
import { Input } from "@material-tailwind/react";
import { LeaderShip } from "./Ledership/LederShip";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
 
} from "@material-tailwind/react";

export const Why = () => {
  return (
    <section className="w-full">
      <h1 className="text-blue-900 font-bold text-center mt-10 md:mt-20 text-4xl md:text-5xl">
        Why Choose Elixir
      </h1>
      <div className="container flex flex-col md:flex-row justify-center md:gap-10 mt-10">
        <div className="max-w-[700px]">
          <img
            className="w-full rounded-lg shadow-xl"
            src="https://prium.github.io/elixir/v3.0.0/assets/img/why-choose-us.jpg"
            alt="Why Choose Elixir"
          />
        </div>
        <div className="flex flex-col justify-center gap-10 md:gap-28">
          <div className="w-full md:w-96">
            <div className="flex items-center gap-5">
              <img
                className="w-8"
                src="https://cdn-icons-png.flaticon.com/512/50/50011.png"
                alt="Professional Icon"
              />
              <h1 className="text-xl font-semibold">We Are Professional</h1>
            </div>
            <p className="text-gray-700">
              We resource, train, speak, mentor, and encourage marketplace
              leaders, business owners, and career professionals to be effective
              in the workplace.
            </p>
          </div>
          <div className="w-full md:w-96">
            <div className="flex items-center gap-5">
              <img
                className="w-8"
                src="https://cdn-icons-png.flaticon.com/512/50/50011.png"
                alt="Professional Icon"
              />
              <h1 className="text-xl font-semibold">We Are Professional</h1>
            </div>
            <p className="text-gray-700">
              We resource, train, speak, mentor, and encourage marketplace
              leaders, business owners, and career professionals to be effective
              in the workplace.
            </p>
          </div>
          <div className="w-full md:w-96">
            <div className="flex items-center gap-5">
              <img
                className="w-8"
                src="https://cdn-icons-png.flaticon.com/512/50/50011.png"
                alt="Professional Icon"
              />
              <h1 className="text-xl font-semibold">We Are Professional</h1>
            </div>
            <p className="text-gray-700">
              We resource, train, speak, mentor, and encourage marketplace
              leaders, business owners, and career professionals to be effective
              in the workplace.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-24 p-10 mt-10 bg-indigo-900 flex-col justify-center items-center lg:flex">
        <h1 className="text-white text-center text-3xl lg:text-5xl">
          If you have any query related investment... we are available 24/7
        </h1>
        <Button className="rounded-full flex m-auto mt-4 lg:mt-6" color="white">
          Contact us
        </Button>
      </div>

      <div className="mt-20">
        <h1 className="text-blue-900 font-bold text-center mt-10 md:mt-20 text-4xl md:text-5xl">
          Things You Get
        </h1>
        <div className=" flex justify-center ">
          <div className=" grid  grid-cols-1 gap-24   sm:grid-cols-2 lg:grid-cols-3 ">
            <SimpleCard2
              url="https://cdn1.iconfinder.com/data/icons/fillio-web-internet-and-social-media-technology/48/web_-_customer_service-512.png"
              text="Business Consulting"
              text2="Solution for every business related problems, readily and skillfully"
            />
            <SimpleCard2
              url="https://cdn1.iconfinder.com/data/icons/fillio-web-internet-and-social-media-technology/48/web_-_customer_service-512.png"
              text="Business Consulting"
              text2="Solution for every business related problems, readily and skillfully"
            />
            <SimpleCard2
              url="https://cdn1.iconfinder.com/data/icons/fillio-web-internet-and-social-media-technology/48/web_-_customer_service-512.png"
              text="Business Consulting"
              text2="Solution for every business related problems, readily and skillfully"
            />
            {/* Render the next three SimpleCard2 components */}
            <SimpleCard2
              url="https://cdn1.iconfinder.com/data/icons/fillio-web-internet-and-social-media-technology/48/web_-_customer_service-512.png"
              text="Business Consulting"
              text2="Solution for every business related problems, readily and skillfully"
            />
            <SimpleCard2
              url="https://cdn1.iconfinder.com/data/icons/fillio-web-internet-and-social-media-technology/48/web_-_customer_service-512.png"
              text="Business Consulting"
              text2="Solution for every business related problems, readily and skillfully"
            />
            <SimpleCard2
              url="https://cdn1.iconfinder.com/data/icons/fillio-web-internet-and-social-media-technology/48/web_-_customer_service-512.png"
              text="Business Consulting"
              text2="Solution for every business related problems, readily and skillfully"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 h-auto min-h-48 p-10 bg-indigo-900 flex flex-col md:flex-row justify-around items-center">
        <div className="border-solid border-yellow-600 border-2 flex flex-col text-center gap-5 w-full md:w-64 text-white p-5 md:mr-10">
          <h1 className="font-bold text-2xl pb-2">Request a call back</h1>
          <p className="pb-2">
            Would you like to speak to one of our financial advisers over the
            phone? Just submit your details and we’ll be in touch shortly. You
            can also email us if you would prefer
          </p>
        </div>
        <div className="text-white grid grid-cols-2 gap-5 mt-5">
          <Input className="w-full md:w-72" color="White" label="Username" />
          <Input className="w-full md:w-72" color="White" label="Your phone" />
          <Input className="w-full md:w-72" color="White" label="Subject" />
          <Button className="" color="amber">
            color amber
          </Button>
        </div>
      </div>

      <div className=" mx-auto">
        <h1 className="text-center mt-20 text-3xl font-bold mb-8">
          Global Leadership
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          <LeaderShip />
          <LeaderShip />
          <LeaderShip />
          <LeaderShip />
          <LeaderShip />
          <LeaderShip />
        </div>
      </div>

      <div className="mt-20 w-full h-[600px] bg-cover bg-center bg-[url('https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-phoenix-bird-in-flames-wallpapers-wallpapershd-image_2697352.jpg')]">
        <div className="flex flex-col md:flex-row px-10 py-12 ">
          <img
            className="w-20"
            src="https://prium.github.io/elixir/v3.0.0/assets/img/checkmark.png"
            alt=""
          />
          <p className="text-yellow-700 text-center text-5xl lg:text-7xl md:text-left">
            Take the right step, <br />{" "}
            <span className="text-white text-5xl  lg:text-7xl">
              do the big things.
            </span>
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-4 gap-8 mt-52">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">52</h1>
            <p>Cases Solved</p>
          </div>
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">164</h1>
            <p>Trained Experts</p>
          </div>
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">38</h1>
            <p>Branches</p>
          </div>
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">100</h1>
            <p>Satisfied Clients</p>
          </div>
        </div>
      </div>

      <Carousel
        loop={true}
        autoplay={true}
        transition={{ duration: 2 }}
        className="rounded-xl py-20 "
      >
        <div className="flex flex-col md:flex-row justify-center px-10 items-center md:gap-8">
          <div className="w-full md:w-64 mb-8 md:mb-0">
            <img
              src="https://masterpiecer-images.s3.yandex.net/d960d0ee6f5811ee886e3a7ca4cc1bdc:upscaled"
              alt=""
            />
          </div>
          <div className="w-full md:w-96">
            <p className="text-lg text-gray-700 mb-4">
              Their work on our website and Internet marketing has made a
              significant difference to our business. We’ve seen a 425% increase
              in quote requests from the website which has been pretty
              remarkable – but I’d always like to see more!
            </p>
            <div className="text-xl font-semibold text-blue-900 mb-2">
              Behruz Berdiev
            </div>
            <div className="text-gray-600">CEO, A.ET INSTITUTE</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center px-10 items-center md:gap-8">
          <div className="w-full md:w-64 mb-8 md:mb-0">
            <img
              src="https://masterpiecer-images.s3.yandex.net/d960d0ee6f5811ee886e3a7ca4cc1bdc:upscaled"
              alt=""
            />
          </div>
          <div className="w-full md:w-96">
            <p className="text-lg text-gray-700 mb-4">
              Their work on our website and Internet marketing has made a
              significant difference to our business. We’ve seen a 425% increase
              in quote requests from the website which has been pretty
              remarkable – but I’d always like to see more!
            </p>
            <div className="text-xl font-semibold text-blue-900 mb-2">
              Behruz Berdiev
            </div>
            <div className="text-gray-600">CEO, A.ET INSTITUTE</div>
          </div>
        </div>
      </Carousel>

      <div className="h-auto min-h-32 bg-gray-200 px-10 grid justify-center items-center  ">
        <div className="grid grid-cols-3 gap-4  lg:grid-cols-3  lg:gap-16  xl:grid-cols-6 ">
          <img
            className="w-32 mx-auto"
            src="https://prium.github.io/elixir/v3.0.0/assets/img/partner/logo2.png"
            alt=""
          />
          <img
            className="w-32 mx-auto"
            src="https://prium.github.io/elixir/v3.0.0/assets/img/partner/logo1.png"
            alt=""
          />
          <img
            className="w-32 mx-auto"
            src="https://prium.github.io/elixir/v3.0.0/assets/img/partner/logo6.png"
            alt=""
          />
          <img
            className="w-32 mx-auto"
            src="https://prium.github.io/elixir/v3.0.0/assets/img/partner/logo3.png"
            alt=""
          />
          <img
            className="w-32 mx-auto"
            src="https://prium.github.io/elixir/v3.0.0/assets/img/partner/logo5.png"
            alt=""
          />
          <img
            className="w-32 mx-auto"
            src="https://prium.github.io/elixir/v3.0.0/assets/img/partner/logo4.png"
            alt=""
          />
        </div>
      </div>

      <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center ">Latest News</h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Card className="max-w-md overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="ui/ux review check"
              className="w-full h-auto"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              Tax impacts of lease mean accounting change
            </Typography>
            <Typography>
              By Paul O'Sullivan
            </Typography>
            <Typography variant="lead" color="gray" className="mt-3 font-normal">
              HMRC released a consultation document to flag some potential tax impacts that a forthcoming change...
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="#" className="inline-block">
              <Button size="sm" variant="text" className="flex items-center gap-2">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardFooter>
        </Card>
        <Card className="max-w-md overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="ui/ux review check"
              className="w-full h-auto"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              Tax impacts of lease mean accounting change
            </Typography>
            <Typography>
              By Paul O'Sullivan
            </Typography>
            <Typography variant="lead" color="gray" className="mt-3 font-normal">
              HMRC released a consultation document to flag some potential tax impacts that a forthcoming change...
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="#" className="inline-block">
              <Button size="sm" variant="text" className="flex items-center gap-2">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardFooter>
        </Card>
        <Card className="max-w-md overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="ui/ux review check"
              className="w-full h-auto"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              Tax impacts of lease mean accounting change
            </Typography>
            <Typography>
              By Paul O'Sullivan
            </Typography>
            <Typography variant="lead" color="gray" className="mt-3 font-normal">
              HMRC released a consultation document to flag some potential tax impacts that a forthcoming change...
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="#" className="inline-block">
              <Button size="sm" variant="text" className="flex items-center gap-2">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
    </section>
  );
};
