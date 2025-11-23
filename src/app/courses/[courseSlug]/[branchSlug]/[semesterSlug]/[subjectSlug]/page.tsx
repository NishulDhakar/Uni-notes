import React from 'react';
import coursesData from '@/data/courses.json';
import Link from 'next/link';
import type { CoursesData, Course, Semester, Subject, Unit, Branch } from '@/types/global';

type Props = { params: Promise<{ courseSlug: string; branchSlug: string; semesterSlug: string; subjectSlug: string }> };

export default async function SubjectPage({ params }: Props) {
  const { courseSlug, branchSlug, semesterSlug, subjectSlug } = await params;
  const course = ((coursesData as unknown as CoursesData).courses || []).find((c: Course) => c.slug === courseSlug) as Course | undefined;
  const branch = (course?.branches || []).find((b: Branch) => b.slug === branchSlug) as Branch | undefined;
  const sem = (branch?.semesters || []).find((s: Semester) => s.slug === semesterSlug) as Semester | undefined;
  const subject = (sem?.subjects || []).find((su: Subject) => su.slug === subjectSlug) as Subject | undefined;

  if (!course || !branch || !sem || !subject) return <div className="p-6">Subject not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{subject.title}</h1>
      <h2 className="text-lg font-semibold mt-4">Units</h2>
      <ul className="mt-2 space-y-2">
        {(subject.units || []).map((u: Unit) => (
          <li key={u.slug}>
            <Link href={`/courses/${courseSlug}/${branchSlug}/${semesterSlug}/${subjectSlug}/${u.slug}`} className="text-blue-600 hover:underline">
              {u.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
