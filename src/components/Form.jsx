import React, { useState } from "react";
import client from "../lib/wix";

const Form = () => {
  const [newReview, setNewReview] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submissionPayload = {
        dataCollectionId: "Contact1",
        dataItem: {
          data: {
            ...newReview,
          },
        },
      };

      const result = await client.items.insertDataItem(submissionPayload);
      console.log("Wix API response:", result);

      setNewReview({
        name: "",
        email: "",
        phone: "",
      });

      alert("Data submitted successfully!");
    } catch (error) {
      console.error("Submission Error:", {
        message: error.message,
        name: error.name,
        response: error.response,
      });
      alert(`Submission failed: ${error.message}`);
    }
  };

  return (
    <div className=" h-[100vh] w-full flex items-center justify-center bg-black flex-col">
      <h1 className=" text-9xl text-white">TELL ME MORE</h1>
      <form
        onSubmit={handleSubmit}
        className="h-full w-full flex items-center justify-center flex-col space-y-4 "
      >
        <input
          name="name"
          className="h-20 w-1/2 bg-black border p-2 text-white"
          placeholder="Name"
          value={newReview.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          className="h-20 w-1/2 bg-black border p-2 text-white"
          placeholder="Email"
          value={newReview.email}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          type="tel"
          className="h-20 w-1/2 bg-black border p-2 hover:to-blue-400 text-white"
          placeholder="Phone"
          value={newReview.phone}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className=" py-2 px-6 bg-blue-600  rounded-full text-white "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
