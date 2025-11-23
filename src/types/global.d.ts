export interface CoursesData {
  courses: Course[];
}

export interface Course {
  slug: string;
  title: string;
  branches: Branch[];
}

export interface Branch {
  slug: string;
  title: string;
  semesters: Semester[];
}

export interface Semester {
  slug: string;
  title: string;
  subjects: Subject[];
}

export interface Subject {
  slug: string;
  title: string;
  units: Unit[];
}

export interface Unit {
  slug: string;
  title: string;
  path: string; // MDX file path
}

export {};