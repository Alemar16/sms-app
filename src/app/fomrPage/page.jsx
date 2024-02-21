"use client"
import React from 'react'

function FormPage() {
  const onSumit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target);

    const sms = {
      phone: formData.get("phone"),
      message: formData.get("message"),
    };
    const res = await fetch("/api/sms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sms),
    });

    const data = await res.json();
    console.log(data);
    alert(`Message sent to ${sms.phone} successfully!`);
  }
  
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={onSumit} className="bg-slate-900 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <h1 className="text-white text-center text-2xl font-bold mb-5">
          Send an SMS
        </h1>
        <div className="mb-5">
          <label
            htmlFor="phone" 
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Message
          </label>
          <textarea
            id="message" 
            name="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default FormPage
