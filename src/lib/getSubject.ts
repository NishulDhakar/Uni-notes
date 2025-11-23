// src/lib/getSubject.ts
import coursesData from "@/data/courses.json";
import type { Course, CoursesData, Semester, Subject, Branch } from "@/types/global";

export function getSubject(courseSlug: string, branchSlug: string, semesterSlug: string, subjectSlug: string) {
  const list = (coursesData as unknown as CoursesData).courses || [];
  const course = list.find((c: Course) => c.slug === courseSlug) as Course | undefined;
  if (!course) throw new Error("Course not found");

  const branch = (course.branches || []).find((b: Branch) => b.slug === branchSlug) as Branch | undefined;
  if (!branch) throw new Error("Branch not found");

  const semester = (branch.semesters || []).find((s: Semester) => s.slug === semesterSlug) as Semester | undefined;
  if (!semester) throw new Error("Semester not found");

  const subject = (semester.subjects || []).find((su) => su.slug === subjectSlug) as Subject | undefined;
  if (!subject) throw new Error("Subject not found");

  return {
    course,
    branch,
    semester,
    subject,
  };
}
