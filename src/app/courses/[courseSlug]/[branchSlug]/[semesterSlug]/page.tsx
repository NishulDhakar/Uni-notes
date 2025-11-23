import React from 'react';
import coursesData from '@/data/courses.json';
import Link from 'next/link';
import type { CoursesData, Course, Semester, Subject, Branch } from '@/types/global';

type Props = { params: Promise<{ courseSlug: string; branchSlug: string; semesterSlug: string }> };

export default async function SemesterPage({ params }: Props) {
  const { courseSlug, branchSlug, semesterSlug } = await params;
  const course = ((coursesData as unknown as CoursesData).courses || []).find((c: Course) => c.slug === courseSlug) as Course | undefined;
  const branch = (course?.branches || []).find((b: Branch) => b.slug === branchSlug) as Branch | undefined;
  const sem = (branch?.semesters || []).find((s: Semester) => s.slug === semesterSlug) as Semester | undefined;

  if (!course || !branch || !sem) return <div className="p-6">Semester not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{course.title} — {branch.title} — {sem.title}</h1>

      <h2 className="text-lg font-semibold mt-4">Subjects</h2>
      <ul className="mt-2 space-y-2">
        {(sem.subjects || []).map((su: Subject) => (
          <li key={su.slug}>
            <Link href={`/courses/${courseSlug}/${branchSlug}/${semesterSlug}/${su.slug}`} className="text-blue-600 hover:underline">
              {su.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
