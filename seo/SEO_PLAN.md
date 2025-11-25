# SEO Strategy & Implementation Plan for RGPVNotes.in

## 1. Executive Summary
**Opportunity:** RGPVNotes.in operates in a high-intent, low-competition niche (university specific resources). The current opportunity lies in structuring the massive amount of "long-tail" content (units, subjects, years) into a logical hierarchy that Google can crawl efficiently. By moving from a flat or chaotic structure to a strict "University > Course > Branch > Semester > Subject > Unit" hierarchy and treating PDFs as first-class citizens with dedicated HTML landing pages, we can capture thousands of specific queries like "RGPV BTech CS 3rd sem data structures notes". The primary goal is to become the "Wikipedia for RGPV" by leveraging authoritative schema and superior user experience (fast load, easy navigation) compared to the official RGPV site and generic competitors.

## 2. Measurable Goals (3-6 Months)
*   **Organic Sessions:** +150% growth (Baseline: Current traffic).
*   **Keyword Rankings:** 500+ keywords in Top 3 positions for "RGPV [Subject] Notes" and "RGPV [Subject] PYQ".
*   **Impressions:** 2x increase in Search Console impressions.
*   **Core Web Vitals:** Pass all metrics (LCP < 2.5s, CLS < 0.1, INP < 200ms) on mobile.
*   **Backlinks:** Earn 10+ backlinks from .edu or educational domains.

## 3. Site Audit (Automated + Manual)

### Automated Checks
**Lighthouse (CLI):**
```bash
npm install -g lighthouse
lighthouse https://www.rgpvnotes.in/ --output html --output-path ./seo/lighthouse-report.html --view --only-categories=seo,accessibility,performance,best-practices
```

**Screaming Frog Configuration:**
*   **Mode:** Spider
*   **Configuration > Spider > Crawl:** Check "Crawl All Subdomains" if applicable, uncheck "Crawl Outside Folder".
*   **Configuration > Spider > Extraction:** Enable "Structured Data" validation.
*   **Configuration > Content > Duplicates:** Enable "Near Duplicate" check.

**Common Regex Checks (for VS Code search):**
*   **Missing H1:** `^((?!<h1).)*$` (in .tsx/.mdx files)
*   **Duplicate Titles:** Search for `<title>` in layout files to ensure dynamic injection.

### Top SEO Errors Remediation
1.  **Thin Content:** Identify pages with < 300 words.
    *   *Fix:* Merge "Unit" pages into a single "Subject" page if units are short, or add "Key Concepts" and "FAQ" sections to unit pages.
2.  **Orphaned Pages:** Ensure every page is reachable via the Sidebar or Breadcrumbs.
    *   *Fix:* Verify `src/components/app-sidebar.tsx` covers all routes.
3.  **Slow LCP:** Large hero images or unoptimized fonts.
    *   *Fix:* Use `next/image` with `priority` and `next/font`.

## 4. Technical SEO

### Robots.txt & Sitemap
*   **Robots.txt:** See `seo/robots.txt`.
*   **Sitemap:** Use `next-sitemap` or a custom script. See `seo/sitemap-generator.ts`.

### Canonicalization & URL Structure
**Canonical Tag Template:**
```tsx
// In layout.tsx or head.tsx
<link rel="canonical" href={`https://www.rgpvnotes.in${pathname}`} />
```
**URL Rules:**
*   **Lowercase:** Always force lowercase.
*   **Trailing Slash:** Consistent handling (Next.js defaults to no trailing slash usually, stick to one).
*   **Pagination:** Use `?page=2` but ensure `rel="canonical"` points to the self (e.g., `?page=2`), OR if it's a "View All" page, point to that. For infinite scroll, ensure unique URLs for deep linking.

### Indexability & Crawl Budget
*   **PDFs:** Serve PDFs with `X-Robots-Tag: noindex` if you have a corresponding HTML landing page (Recommended). This forces Google to rank your HTML page (which has ads/CTAs/nav) instead of the raw PDF.
    *   *Nginx/Vercel Config:*
        ```json
        {
          "source": "/files/*.pdf",
          "headers": [
            { "key": "X-Robots-Tag", "value": "noindex" }
          ]
        }
        ```

### Structured Data (JSON-LD)
*   See `seo/schema/` for templates.
*   **Injection:** Use `next/script` or a simple `<script type="application/ld+json">` in your `layout.tsx` or `page.tsx`.

### Core Web Vitals
*   **LCP (Largest Contentful Paint):** Preload the LCP image.
    ```tsx
    <Image src="/hero.jpg" alt="..." priority />
    ```
*   **CLS (Cumulative Layout Shift):** Explicit width/height for all images/videos. Reserve space for ads.

### Mobile SEO
*   **Viewport:** `<meta name="viewport" content="width=device-width, initial-scale=1" />`
*   **Tap Targets:** Ensure buttons/links are at least 44x44px.

## 5. On-Page SEO

### H1/H2 Structure
*   **H1:** ONLY ONE per page. Matches the `<title>` tag closely.
*   **H2:** Main sections (e.g., "Unit 1: Introduction", "Download PDF", "Syllabus").
*   **H3:** Sub-topics.

### Internal Linking
*   **Hub Pages:** The "Subject" page (e.g., "Computer Vision") should link to all "Unit" pages.
*   **Cross-Linking:** "Unit 1" should link to "Unit 2" (Next/Prev) and related subjects (e.g., "Prerequisite: Linear Algebra").
*   **Anchor Text:** Descriptive. "Download Computer Vision Unit 1 PDF" instead of "Click here".

### PDF & Resource SEO
**Strategy:**
1.  **Raw PDF:** `/files/btech-cs-sem7-cv-unit1.pdf` (Noindex)
2.  **Landing Page:** `/btech/cs/sem7/cv/unit-1` (Indexable)
    *   Contains: Summary of the unit, Key topics list, Embedded PDF viewer (optional), "Download" button, Related notes.

## 6. Content Strategy

### Keyword Research
**Seed Keywords:**
*   "RGPV notes"
*   "RGPV [subject] notes" (e.g., "RGPV machine learning notes")
*   "RGPV [branch] [semester] notes" (e.g., "RGPV CSE 7th sem notes")
*   "RGPV previous year question papers [subject]"
*   "RGPV syllabus [branch]"

### Competitor Gap
*   **Tool:** Ahrefs "Content Gap" or manual Google search.
*   **Manual:** Search `site:rgpv.ac.in "machine learning"` vs `site:rgpvnotes.in "machine learning"`. If they have it and you don't, create it.

## 7. Link Building & PR

### Opportunities
*   **College Libraries:** Ask librarians to list your site as a resource.
*   **Student Clubs:** Coding clubs, technical societies pages.
*   **Medium/Dev.to:** Repurpose "How to study for [Subject]" guides and link back.

### Broken Link Building
*   Find broken links on `.edu` pages or student blogs pointing to old notes sites (e.g., `site:.edu "rgpv notes" 404`).
*   Reach out: "Hey, I saw you link to [Dead Site]. It's down. We have an updated version here: [Your Link]."

## 8. Monitoring
*   **GSC:** Check "Coverage" weekly for 5xx errors or "Crawled - currently not indexed".
*   **Rankings:** Track main keywords (Subject names) monthly.
