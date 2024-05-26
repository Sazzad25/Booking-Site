import React from "react";
// import MessengerCustomerChat from "react-messenger-customer-chat";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col items-center bg-neutral-200 text-center text-white dark:bg-neutral-600 dark:text-neutral-200">
        <div className="container p-6">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            <div className="mb-6 lg:mb-0">
              <img
                src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
                alt=""
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://tecdn.b-cdn.net/img/new/fluid/city/111.webp"
                alt=""
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://tecdn.b-cdn.net/img/new/fluid/city/112.webp"
                alt=""
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://tecdn.b-cdn.net/img/new/fluid/city/114.webp"
                alt=""
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://tecdn.b-cdn.net/img/new/fluid/city/115.webp"
                alt=""
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://tecdn.b-cdn.net/img/new/fluid/city/116.webp"
                alt=""
                className="w-full rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="w-full bg-neutral-900 p-4 text-center text-white dark:bg-neutral-700 dark:text-neutral-200">
          <a className="dark:text-neutral-400" href="/">
            Welcome To Cars & Pricing Field
          </a>
        </div>
      </footer>
      {/* <MessengerCustomerChat
        pageId="<PAGE_ID>"
        appId="<APP_ID>"
      /> */}
    </div>
  );
};

export default Footer;
