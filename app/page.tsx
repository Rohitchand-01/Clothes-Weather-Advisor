"use client"; // Add this line at the top of the file

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [gender, setGender] = useState("");
  const [style, setStyle] = useState("");

  function handleSubmit() {
    if (gender && style) {
      localStorage.setItem("gender", gender);
      localStorage.setItem("style", style);
      router.push("/dashboard");
    } else {
      alert("Please select both gender and style.");
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-blue-100 via-white to-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">
          Clothes Weather Advisor
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Get outfit recommendations based on live weather!
        </p>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Select Gender:
          </label>
          <select
            onChange={(e) => setGender(e.target.value)}
            value={gender}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Select Style:
          </label>
          <select
            onChange={(e) => setStyle(e.target.value)}
            value={style}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Style</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
            <option value="sporty">Sporty</option>
          </select>
        </div>

        <Button
          onClick={handleSubmit}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
          size="lg"
        >
          Submit Preferences
        </Button>
      </div>
    </main>
  );
}
