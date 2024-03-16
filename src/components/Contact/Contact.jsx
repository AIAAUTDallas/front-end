import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
  };  
  return (
    <section class="bg-slate-900 dark:bg-gray-900">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg ">
        <form action="https://formspree.io/f/mdoqdqor" method="POST" class="space-y-8">
          <div>
            <label
              htmlFor="name"
              class="block mb-2 text-sm font-medium text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
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
              name="_replyto"
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
              name="subject"
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
              type="text"
              name="message"
              id="message"
              rows="10"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className="flex justify-center items-center">
            <Button
              type="submit"
              className="py-2 px-4 rounded text-sm font-medium text-center text-white rounded-lg bg-black-900 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-black-900 dark:hover:bg-primary-700 dark:focus:ring-primary-800"            >
          Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
