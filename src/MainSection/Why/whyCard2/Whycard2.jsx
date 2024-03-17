import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Button, Typography } from '@mui/material';

const LatestNews = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Repeat the Card component for each news item */}
      </div>
    </div>
  );
}

export default LatestNews;
