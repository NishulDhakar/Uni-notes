// src/lib/getCourse.ts
import coursesData from "@/data/courses.json";
import type { Course, CoursesData } from "@/types/global";

export function getCourse(courseSlug: string): Course {
  const list = (coursesData as unknown as CoursesData).courses || [];
  const course = list.find((c) => c.slug === courseSlug);

  if (!course) {
    throw new Error(`Course "${courseSlug}" not found`);
  }

  return course as Course;
}
