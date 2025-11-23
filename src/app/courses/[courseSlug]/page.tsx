import React from "react";
import coursesData from "@/data/courses.json";
import Link from "next/link";
import type { CoursesData, Course, Branch } from "@/types/global";

type Props = {
  params: Promise<{ courseSlug: string }>;
};

export default async function CoursePage({ params }: Props) {
  const { courseSlug } = await params;

  const course = (coursesData as CoursesData).courses.find(
    (c) => c.slug === courseSlug
  ) as Course | undefined;

  if (!course) return <div className="p-6">Course not found</div>;

  const branches = course.branches || [];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>

      <h2 className="text-lg font-semibold mt-4">Select Branch</h2>

      <ul className="mt-3 space-y-2">
        {branches.map((b: Branch) => (
          <li key={b.slug}>
            <Link
              href={`/courses/${courseSlug}/${b.slug}`}
              className="text-blue-600 hover:underline"
            >
              {b.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
