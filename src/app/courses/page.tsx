import coursesData from '@/data/courses.json';
import Link from 'next/link';
import React from 'react';
import type { CoursesData, Course } from '@/types/global';

export default function CoursesPage() {
  const list = (coursesData as unknown as CoursesData).courses || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <ul className="space-y-2">
        {list.map((c: Course) => (
          <li key={c.slug}>
            <Link href={`/courses/${c.slug}`} className="text-blue-600 hover:underline">
              {c.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
