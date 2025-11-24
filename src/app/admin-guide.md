# Admin Guide: Managing University Notes Content

This guide explains how to add new courses, branches, semesters, subjects, and units to the University Notes website.

## Overview

The website's structure is driven by two main components:
1.  **Structure Data**: `src/data/courses.json` - Defines the hierarchy (Course -> Branch -> Semester -> Subject -> Unit).
2.  **Content Files**: `src/content/**/*.mdx` - The actual note content written in Markdown/MDX.

## 1. Adding a New Branch or Semester

To add a new branch (e.g., "Electrical Engineering") or semester, you need to edit `src/data/courses.json`.

### Example: Adding a Subject to a Semester

Find the correct branch and semester in `courses.json`, then add a new subject object to the `subjects` array:

```json
{
  "slug": "computer-vision",
  "title": "Computer Vision",
  "units": [
    {
      "slug": "unit-1",
      "title": "Unit 1: Introduction",
      "path": "/content/courses/btech/aiml/sem7/computer-vision/unit-1.mdx"
    }
  ]
}
```

- **slug**: URL-friendly identifier (e.g., `computer-vision`).
- **title**: Display name (e.g., "Computer Vision").
- **units**: Array of units containing the note content mapping.

## 2. Adding Note Content (MDX)

Once you've defined the unit in `courses.json`, create the corresponding `.mdx` file.

1.  Navigate to `src/content/courses/`.
2.  Create folders matching your structure if they don't exist (e.g., `btech/aiml/sem7/computer-vision/`).
3.  Create the file (e.g., `unit-1.mdx`).

### MDX File Format

You can write standard Markdown and use React components.

```mdx
# Unit 1: Introduction to Computer Vision

## Overview
Computer vision is a field of artificial intelligence...

## Key Concepts
- Image Processing
- Feature Extraction
- Object Detection

> [!TIP]
> Remember to practice the algorithms!
```

## 3. Verifying Changes

1.  Save both `courses.json` and your `.mdx` file.
2.  The website should automatically update (if the dev server is running).
3.  Navigate to the new section in the dashboard to verify the content loads correctly.

## Troubleshooting

- **404 Error**: Check if the `slug` in `courses.json` matches the URL you are trying to access.
- **Content Not Loading**: Check if the `path` in `courses.json` exactly matches the file path in `src/content/`.
