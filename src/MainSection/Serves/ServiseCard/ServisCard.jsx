import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function ServisCard({ url, text1, text2 }) {
  return (
    <Card className="flex flex-col md:flex-row gap-10 max-w-[768px] mx-auto">
      <CardHeader
        shadow={false}
        floated={false}
        className="w-full md:w-2/5 rounded-tr-none md:rounded-r-none"
      >
        <img
          src={url}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="flex flex-col justify-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {text1}
        </Typography>
        <Typography color="gray" className="max-w-[380px] mb-8 font-normal">
          {text2}
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
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
      </CardBody>
    </Card>
  );
}

export function ServisCard2({ url, text1, text2 }) {
  return (
    <Card className="flex flex-col md:flex-row-reverse gap-10 max-w-[768px] mx-auto ">
      <CardHeader
        shadow={false}
        floated={false}
        className="w-full md:w-2/5 rounded-tl-none md:rounded-l-none"
      >
        <img
          src={url}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="flex flex-col justify-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {text1}
        </Typography>
        <Typography color="gray" className="max-w-[380px] mb-8 font-normal">
          {text2}
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
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
      </CardBody>
    </Card>
  );
}
