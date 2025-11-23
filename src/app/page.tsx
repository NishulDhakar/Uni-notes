"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);

  const years = [
    { label: "First Year", slug: "year1" },
    { label: "Second Year", slug: "year2" },
    { label: "Third Year", slug: "year3" },
    { label: "Fourth Year", slug: "year4" },
  ];

  const branches = [
    { label: "AIML", slug: "aiml" },
    { label: "Information Technology", slug: "it" },
    { label: "Electronics", slug: "ece" },
    { label: "Mechanical", slug: "me" },
    { label: "Civil", slug: "civil" },
    { label: "Electrical", slug: "ee" },
  ];

  const semesters = [
    { label: "Semester 1", slug: "sem1" },
    { label: "Semester 2", slug: "sem2" },
    { label: "Semester 3", slug: "sem3" },
    { label: "Semester 4", slug: "sem4" },
    { label: "Semester 5", slug: "sem5" },
    { label: "Semester 6", slug: "sem6" },
    { label: "Semester 7", slug: "sem7" },
    { label: "Semester 8", slug: "sem8" },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/bg.jpg"
        alt="Background"
        fill
        className="object-cover brightness-50"
        priority
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-4xl sm:text-6xl font-bold mb-10">
          Welcome to <span className="text-yellow-400">B.Tech</span>
        </h1>

        <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-2xl p-10 max-w-3xl w-full text-center">

          <p className="text-sm uppercase tracking-wide text-gray-200 font-semibold mb-3">
            Previous Year Question Paper
          </p>

          {/* STEP 1: Select Year */}
          {!selectedYear && (
            <>
              <h2 className="text-2xl sm:text-3xl mb-10 font-medium">Select Your Year</h2>

              <div className="flex flex-wrap justify-center gap-6">
                {years.map((year) => (
                  <button
                    key={year.slug}
                    onClick={() => setSelectedYear(year.slug)}
                    className="px-6 py-3 bg-black/60 hover:bg-black/80 rounded-lg 
                    text-white border border-white/20 transition"
                  >
                    {year.label}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* STEP 2: Select Branch */}
          {selectedYear && !selectedBranch && (
            <>
              <h2 className="text-2xl sm:text-3xl mb-8 font-medium">Select Your Branch</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
                {branches.map((branch) => (
                  <button
                    key={branch.slug}
                    onClick={() => setSelectedBranch(branch.slug)}
                    className="px-6 py-3 bg-black/60 hover:bg-black/80 rounded-lg 
                    text-white border border-white/20 transition"
                  >
                    {branch.label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setSelectedYear(null)}
                className="mt-6 text-sm text-gray-300 hover:text-white underline"
              >
                ← Back to Years
              </button>
            </>
          )}

          {/* STEP 3: Select Semester */}
          {selectedBranch && (
            <>
              <h2 className="text-2xl sm:text-3xl mb-8 font-medium">Select Semester</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
                {semesters.map((sem) => (
                  <Link
                    key={sem.slug}
                    href={`/courses/btech/${selectedBranch}/${sem.slug}`}
                    className="px-6 py-3 bg-black/60 hover:bg-black/80 rounded-lg 
                    text-white border border-white/20 transition text-center"
                  >
                    {sem.label}
                  </Link>
                ))}
              </div>

              <button
                onClick={() => setSelectedBranch(null)}
                className="mt-6 text-sm text-gray-300 hover:text-white underline"
              >
                ← Back to Branches
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
