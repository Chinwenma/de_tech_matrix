"use client";
import { useForm, ValidationError } from "@formspree/react";

import { useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Contact() {
  const [state, handleSubmit] = useForm("mgokrvvw");
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully! 🚀");
      formRef.current?.reset();
    }
  }, [state.succeeded]);

  return (
    <section className="min-h-screen py-16" id="contact">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Contact Me</h2>
        <p className="text-center mb-10 max-w-2xl mx-auto">
          Have a project in mind or just want to connect? Drop a message and
          I’ll get back to you!
        </p>

        <section className="py-16">
          <div className="flex justify-center items-center px-4">
            <form
              ref={formRef}
              method="POST"
              onSubmit={handleSubmit}
              className="w-full max-w-2xl border shadow-lg rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block mb-1 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  className="text-red-500"
                  errors={state.errors}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-1 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  className="text-red-500"
                  errors={state.errors}
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block mb-1 font-semibold">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  className="text-red-500"
                  errors={state.errors}
                />
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-1 font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  className="text-red-500"
                  errors={state.errors}
                />
              </div>

              {/* Submit Button */}
              <div className="sm:col-span-2 text-center">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`transition-all duration-200 text-white font-semibold px-6 py-2 rounded shadow-2xl ${
                    state.submitting
                      ? "bg-[#8490ff] cursor-not-allowed"
                      : "bg-[#8490ff] hover:bg-gradient-to-br from-purple-600 to-blue-500"
                  }`}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
                <ValidationError errors={state.errors} />
              </div>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
}
