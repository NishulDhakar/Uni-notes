import Link from "next/link";
import coursesData from "@/data/courses.json";
import type { Course, Branch, Semester, CoursesData } from "@/types/global";

type Params = Promise<{
  courseSlug: string;
  branchSlug: string;
}>;

export default async function BranchPage({ params }: { params: Params }) {
  const { courseSlug, branchSlug } = await params;

  // Find the course
  const course = ((coursesData as unknown as CoursesData).courses || []).find(
    (c: Course) => c.slug === courseSlug
  ) as Course | undefined;

  if (!course) {
    return <div className="p-6 text-red-500">❌ Course not found</div>;
  }

  // Find the branch inside the course
  const branch = course.branches?.find(
    (b: Branch) => b.slug === branchSlug
  ) as Branch | undefined;

  if (!branch) {
    return <div className="p-6 text-red-500">❌ Branch not found</div>;
  }

  const semesters = branch.semesters || [];

  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold">
          {course.title} <span className="text-gray-400">/</span> {branch.title}
        </h1>
        <p className="text-gray-400 mt-1">
          Choose your semester to continue →
        </p>
      </div>

      {/* Semesters List */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {semesters.length === 0 && (
          <p className="text-gray-300">No semesters available.</p>
        )}

        {semesters.map((sem: Semester) => (
          <Link
            key={sem.slug}
            href={`/courses/${courseSlug}/${branchSlug}/${sem.slug}`}
            className="block p-4 bg-white/10 border border-white/20 rounded-xl 
                       hover:bg-white/20 transition text-white backdrop-blur-sm"
          >
            <h2 className="text-lg font-semibold">{sem.title}</h2>
          </Link>
        ))}
      </div>

      {/* Back */}
      <Link
        href={`/courses/${courseSlug}`}
        className="inline-block text-sm text-blue-400 hover:underline mt-4"
      >
        ← Back to Branches
      </Link>
    </div>
  );
}
