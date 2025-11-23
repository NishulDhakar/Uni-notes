import coursesData from "@/data/courses.json";
import type { CoursesData, Course, Branch } from "@/types/global";

/**
 * Get a branch inside a course
 * Example path:
 *   /courses/btech/cse
 */
export function getBranch(
  courseSlug: string,
  branchSlug: string
): { course: Course; branch: Branch } | null {
  const data = coursesData as CoursesData;

  // Find course
  const course = data.courses.find((c) => c.slug === courseSlug);
  if (!course) return null;

  // Find branch
  const branch = course.branches?.find((b) => b.slug === branchSlug);
  if (!branch) return null;

  return {
    course,
    branch,
  };
}
