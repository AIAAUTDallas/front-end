import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <section class="bg-slate-900 dark:bg-gray-900">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg ">
      <h1 class="text-3xl font-bold text-center">
          Contact Us
        </h1>
        <h3 class="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          3000 Waterview Parkway Richardson, TX
        </h3>
        <h3 class="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">aiaautdallas@gmail.com</h3>
        <h3 class="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">(469) 644 1661</h3>
        <form action="#" class="space-y-8 ">
          <div>
            <label
              htmlFor="email"
              class="block mb-2 text-sm font-medium text-white"
            >
              Your Name
            </label>
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Your Name here"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              class="block mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              class="block mb-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label
              htmlFor="message"
              class="block mb-2 text-sm font-medium text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="16"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className="flex justify-center items-center">
          <button
            type="submit"
            class="py-2 px-4 rounded text-sm font-medium text-center text-white rounded-lg bg-black-900 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-black-900 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;