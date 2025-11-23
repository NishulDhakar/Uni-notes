import SplitReader from "@/app/components/Reader/SplitReader";
import { getUnit } from "@/lib/getUnit";
import coursesData from "@/data/courses.json";
import type { CoursesData } from "@/types/global";
import React from "react";

type Params = {
	courseSlug: string;
	branchSlug: string;
	semesterSlug: string;
	subjectSlug: string;
	unitSlug: string;
};

export async function generateStaticParams() {
	const out: Params[] = [];
	const data = (coursesData as unknown as CoursesData).courses || [];
	for (const c of data) {
		for (const b of c.branches || []) {
			for (const s of b.semesters || []) {
				for (const su of s.subjects || []) {
					for (const u of su.units || []) {
						out.push({
							courseSlug: c.slug,
							branchSlug: b.slug,
							semesterSlug: s.slug,
							subjectSlug: su.slug,
							unitSlug: u.slug,
						});
					}
				}
			}
		}
	}
	return out;
}

export default async function Page({ params }: { params: Promise<Params> }) {
	const { courseSlug, branchSlug, semesterSlug, subjectSlug, unitSlug } = await params;
	const result = await getUnit(courseSlug, branchSlug, semesterSlug, subjectSlug, unitSlug);

	if (!result) return <div className="p-6">Unit not found</div>;

	return (
		<div className="h-[calc(100vh-4rem)]">
			<header className="p-4 border-b">
				<h1 className="text-xl font-semibold">{result.meta.title || unitSlug}</h1>
			</header>
			<SplitReader mdx={result.mdx || ""} />
		</div>
	);
}
