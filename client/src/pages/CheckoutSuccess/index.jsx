import React from "react";
import "./style.scss";
const index = () => {
  return (
    <div>
      <div className="success-container">
        <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div class="text-center">
            <p class="text-base font-semibold text-indigo-600">
              <img src="/icons/success.png" alt="" />
            </p>
            <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Your Payment is Successful
            </h1>
            <p class="mt-6 text-base leading-7 text-gray-600">
              Your payment will be proceed in 30 mins. If any problem please
              chat to customer service. Detail information will included below.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a
                href={"/home"}
                class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Back to home
              </a>
              <a href="#" class="text-sm check-detail font-semibold text-gray-900">
                Check Detail <span aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default index;
