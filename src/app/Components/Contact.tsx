import { useState } from "react";
import Swal from 'sweetalert2'
import {motion} from "framer-motion"

function Page() {

  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };


  async function handleSubmit(e: any) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "467e3c21-c076-4ec8-afc6-095d47378503",
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        message: formData.message,
      }),
    });
    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Success",
        text: "Massage sent Successfully ",
        icon: "success"
      });

        // Reset form fields
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          message: ''
        });
    }
  }
  return (
      <div className="isolate bg-[#f7f7f7] px-6 py-20 sm:py-28 lg:px-8 lg:py-14">

        {/* Heading and Subheading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bold-18 uppercase tracking-[1rem] text-blue-500 pb-20 lg:pb-4">Contact Me</h2>
        </div>

        {/* Form */}
        <motion.form
         initial={{y:50,opacity:0}}
         animate={{y:0,opacity:1}}
         transition={ {duration:0.8,delay:0.2,ease:"easeInOut"}}
        onSubmit={handleSubmit} className="mx-auto  max-w-xl sm:mt-20">
          <p className="pb-6 text-lg  leading-8 text-gray-600">
            Need to get in touch with me? Fill out the From...
          </p>
          <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
            {/* First Name */}
            <div>
              <label className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  autoComplete="off"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  autoComplete="off"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>

            {/* Agreement to Policies */}
            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <button
                  type="button"
                  role="switch"
                  aria-checked={isChecked}
                  className={`flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${isChecked ? 'bg-indigo-600 ring-indigo-600' : 'bg-gray-200 ring-gray-900/5'}`}
                  aria-labelledby="switch-1-label"
                  onClick={handleToggle}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden={true}
                    className={`h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 transition duration-200 ease-in-out ${isChecked ? 'translate-x-4' : 'translate-x-0'} ring-gray-900/5`}
                  ></span>
                </button>
              </div>
              <label className="text-sm leading-6 text-gray-600" id="switch-1-label">
                By selecting this, you agree to our
                <a href="#" className="font-semibold text-indigo-600"> privacy &amp; policy</a>.
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-10 mb-14">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let&apos;s talk
            </button>
          </div>
        </motion.form>
      </div>
  );
}

export default Page;
