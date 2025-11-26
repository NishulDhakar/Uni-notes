import * as React from "react";
import { NoteCard } from "@/components/note-card";
import { ResizableSplitView } from "@/components/resizable-split-view";
import { ChevronRight, FileText, Folder, Lock } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getCourseData, getNoteContent, Unit, Subject, Semester, Branch, Course } from "@/lib/course-utils";

import { redirect } from "next/navigation";
import { ClientSplitViewWrapper } from "./client-wrapper";
import { MDXRemote } from 'next-mdx-remote/rsc';

// Components for MDX
const components = {
    h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
    h2: (props: any) => <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />,
    p: (props: any) => <p className="leading-7 mb-4" {...props} />,
    ul: (props: any) => <ul className="list-disc list-inside mb-4" {...props} />,
    li: (props: any) => <li className="mb-1" {...props} />,
    pre: (props: any) => <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4" {...props} />,
    code: (props: any) => <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono" {...props} />,
};

interface PageProps {
    params: Promise<{ slug: string[] }>;
    searchParams: Promise<{ note?: string }>;
}

export default async function CoursePage(props: PageProps) {
    const params = await props.params;
    const searchParams = await props.searchParams;
    const slug = params.slug;
    const activeNoteSlug = searchParams.note;

    const courseData = getCourseData(slug);

    if (!courseData) {
        return (
            <div className="flex flex-col items-center justify-center h-[50vh]">
                <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
                <p className="text-muted-foreground mb-4">The requested course or section does not exist.</p>
                <Link href="/dashboard" className="text-primary hover:underline">
                    Return to Dashboard
                </Link>
            </div>
        );
    }

    const { type, data } = courseData;
    const title = data.title;
    const depth = slug.length;

    // Handle Note Content (Sliding Pane)
    let noteContent = null;
    let activeUnitTitle = "Untitled Note";

    if (activeNoteSlug && type === 'subject') {
        const subject = data as Subject;
        const unit = subject.units.find(u => u.slug === activeNoteSlug);

        if (unit) {
            activeUnitTitle = unit.title;
            const mdxSource = await getNoteContent(unit.path);

            if (mdxSource) {
                noteContent = (
                    <div className="space-y-6 animate-in fade-in duration-500">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium">UNIT</span>
                            <span>{unit.title}</span>
                        </div>

                        <h1 className="text-3xl font-bold tracking-tight mb-8">
                            {unit.title}
                        </h1>

                        {/* Copy Protection Wrapper */}
                        <div className="relative group select-none">
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <MDXRemote source={mdxSource} components={components} />
                            </div>
                        </div>
                    </div>
                );
            } else {
                noteContent = <div className="p-4 text-red-500">Error loading content. File not found at {unit.path}</div>;
            }
        }
    }

    // Main Content Logic
    let gridItems = null;

    if (type === 'stream') {
        const stream = data as Course;
        gridItems = stream.branches.map((branch, i) => (
            <NoteCard
                key={i}
                title={branch.title}
                description={`Access ${branch.title} semesters`}
                href={`/dashboard/${slug.join("/")}/${branch.slug}`}
                tag="Branch"
                color="blue"
            />
        ));
    } else if (type === 'branch') {
        const branch = data as Branch;
        gridItems = branch.semesters.map((sem, i) => (
            <NoteCard
                key={i}
                title={sem.title}
                description={`${sem.subjects.length} Subjects`}
                href={`/dashboard/${slug.join("/")}/${sem.slug}`}
                tag="Semester"
                color="green"
            />
        ));
    } else if (type === 'semester') {
        const semester = data as Semester;
        gridItems = semester.subjects.map((sub, i) => (
            <NoteCard
                key={i}
                title={sub.title}
                description={`${sub.units.length} Units`}
                href={`/dashboard/${slug.join("/")}/${sub.slug}`}
                tag="Subject"
                color="orange"
            />
        ));
    } else if (type === 'subject') {
        const subject = data as Subject;
        gridItems = subject.units.map((unit, i) => (
            // We need a client component wrapper to handle the onClick router push
            // For now, we'll use a Link with a query param which works with server components too
            // But to match the "Notion style" sliding pane without full reload, we ideally want client side navigation
            // Since this is a server component, we can pass data to a client wrapper
            <NoteCard
                key={i}
                title={unit.title}
                description={unit.desc || "View Unit Details"}
                href={`/dashboard/${slug.join("/")}?note=${unit.slug}`}
                tag="Unit"
                color="purple"
                scroll={false}
            />
        ));
    }

    // Breadcrumbs
    const breadcrumbs = (
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
            <Link href="/dashboard" className="hover:text-primary">Dashboard</Link>
            {slug.map((s, i) => (
                <React.Fragment key={i}>
                    <ChevronRight className="w-4 h-4" />
                    <Link
                        href={`/dashboard/${slug.slice(0, i + 1).join("/")}`}
                        className="hover:text-primary capitalize"
                    >
                        {s.replace(/-/g, " ")}
                    </Link>
                </React.Fragment>
            ))}
        </div>
    );

    const MainView = (
        <div className="space-y-8 animate-in fade-in duration-500 p-1">
            {breadcrumbs}

            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    {type === 'subject' ? <FileText className="w-6 h-6" /> : <Folder className="w-6 h-6" />}
                </div>
                <div>
                    <h1 className="text-3xl font-bold capitalize">{title}</h1>
                    <p className="text-muted-foreground">
                        {type === 'subject' ? "Select a unit to view details" : `Select a item to continue`}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gridItems}
            </div>
        </div>
    );

    if (type === 'subject') {
        // We need a client component to handle the ResizableSplitView state
        // But ResizableSplitView is already a client component.
        // We can pass the server-rendered content as children.
        // However, the "onClose" logic needs router.

        return (
            <ClientSplitViewWrapper
                isOpen={!!activeNoteSlug}
                sideContent={noteContent}
                basePath={`/dashboard/${slug.join("/")}`}
            >
                {MainView}
            </ClientSplitViewWrapper>
        );
    }

    return MainView;
}

// Client Wrapper for Split View
