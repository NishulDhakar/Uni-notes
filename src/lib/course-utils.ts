import fs from 'fs';
import path from 'path';
import coursesData from '@/data/courses.json';

// Types based on courses.json structure
export interface Unit {
    slug: string;
    title: string;
    path: string;
    desc?: string; // Optional description if we want to add it to JSON later
}

export interface Subject {
    slug: string;
    title: string;
    units: Unit[];
    color?: string; // For UI styling
}

export interface Semester {
    slug: string;
    title: string;
    subjects: Subject[];
}

export interface Branch {
    slug: string;
    title: string;
    semesters: Semester[];
}

export interface Course {
    slug: string;
    title: string;
    branches: Branch[];
}

export function getCourseHierarchy() {
    return coursesData.courses as Course[];
}

export function getCourseData(slugs: string[]) {
    const [streamSlug, branchSlug, semesterSlug, subjectSlug] = slugs;

    const stream = getCourseHierarchy().find(c => c.slug === streamSlug);
    if (!stream) return null;

    if (!branchSlug) return { type: 'stream', data: stream };

    const branch = stream.branches.find(b => b.slug === branchSlug);
    if (!branch) return null;

    if (!semesterSlug) return { type: 'branch', data: branch };

    const semester = branch.semesters.find(s => s.slug === semesterSlug);
    if (!semester) return null;

    if (!subjectSlug) return { type: 'semester', data: semester };

    const subject = semester.subjects.find(s => s.slug === subjectSlug);
    if (!subject) return null;

    return { type: 'subject', data: subject };
}

export async function getNoteContent(filePath: string) {
    try {
        // Remove leading slash if present to avoid absolute path issues relative to project root
        const relativePath = filePath.startsWith('/') ? filePath.slice(1) : filePath;
        const fullPath = path.join(process.cwd(), 'src', relativePath);

        if (!fs.existsSync(fullPath)) {
            return null;
        }

        const content = fs.readFileSync(fullPath, 'utf8');
        return content;
    } catch (error) {
        console.error("Error reading note content:", error);
        return null;
    }
}
