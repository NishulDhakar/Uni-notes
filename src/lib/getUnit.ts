import fs from "fs";
import path from "path";
import type { CoursesData, Course, Semester, Subject, Unit, Branch } from "@/types/global";

export async function getUnit(courseSlug: string, branchSlug: string, semSlug: string, subjectSlug: string, unitSlug: string) {
  // read the JSON from src/data
  const dataPath = path.join(process.cwd(), "src", "data", "courses.json");
  if (!fs.existsSync(dataPath)) return null;
  const data = JSON.parse(fs.readFileSync(dataPath, "utf-8")) as CoursesData;

  const course = (data.courses || []).find((c: Course) => c.slug === courseSlug) as Course | undefined;
  if (!course) return null;

  const branch = (course.branches || []).find((b: Branch) => b.slug === branchSlug) as Branch | undefined;
  if (!branch) return null;

  const sem = (branch.semesters || []).find((s: Semester) => s.slug === semSlug) as Semester | undefined;
  if (!sem) return null;

  const sub = (sem.subjects || []).find((su) => su.slug === subjectSlug) as Subject | undefined;
  if (!sub) return null;

  const unit = (sub.units || []).find((u) => u.slug === unitSlug) as Unit | undefined;
  if (!unit) return null;

  // unit.path may be like "/content/..." or "content/..." or "src/content/..."
  let unitPath = (unit.path || "").replace(/^\/+/, "");
  if (!unitPath.startsWith("src/")) {
    unitPath = path.join("src", unitPath);
  }

  const mdxPath = path.join(process.cwd(), unitPath);
  const mdx = fs.existsSync(mdxPath) ? fs.readFileSync(mdxPath, "utf-8") : null;

  return { meta: unit, mdx };
}
