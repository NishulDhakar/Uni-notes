"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  Settings,
  Search,
  FileText,
  Folder
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data for the Tree
const navigationData = [
  {
    title: "B.Tech",
    icon: GraduationCap,
    items: [
      {
        title: "AIML",
        items: [
          {
            title: "First Year",
            items: [
              { title: "Semester 1", href: "/dashboard/btech/aiml/sem1" },
              { title: "Semester 2", href: "/dashboard/btech/aiml/sem2" },
            ],
          },
          {
            title: "Second Year",
            items: [
              { title: "Semester 3", href: "/dashboard/btech/aiml/sem3" },
              { title: "Semester 4", href: "/dashboard/btech/aiml/sem4" },
            ],
          },
          {
            title: "Third Year",
            items: [
              { title: "Semester 5", href: "/dashboard/btech/aiml/sem5" },
              { title: "Semester 6", href: "/dashboard/btech/aiml/sem6" },
            ],
          },
          {
            title: "Fourth Year",
            items: [
              { title: "Semester 7", href: "/dashboard/btech/aiml/sem7" },
              { title: "Semester 8", href: "/dashboard/btech/aiml/sem8" },
            ],
          },
        ]
      },
      {
        title: "CSE",
        items: [
          { title: "Semester 1", href: "/dashboard/btech/cse/sem1" },
          // ... other sems
        ]
      }
    ],
  },
  {
    title: "Projects",
    icon: Folder,
    items: [
      { title: "Final Year Project", href: "/dashboard/projects/final-year" },
      { title: "Mini Projects", href: "/dashboard/projects/mini" },
    ],
  },
];

interface SidebarItemProps {
  item: any;
  depth?: number;
}

const SidebarItem = ({ item, depth = 0 }: SidebarItemProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const hasChildren = item.items && item.items.length > 0;
  const isActive = item.href ? pathname === item.href : false;

  // Auto-expand if child is active
  React.useEffect(() => {
    if (hasChildren) {
      const isChildActive = (items: any[]): boolean => {
        return items.some(child =>
          child.href === pathname || (child.items && isChildActive(child.items))
        );
      };
      if (isChildActive(item.items)) {
        setIsOpen(true);
      }
    }
  }, [pathname, hasChildren, item.items]);

  return (
    <div className="select-none">
      {item.href ? (
        <Link
          href={item.href}
          className={cn(
            "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 relative group",
            "hover:text-sidebar-accent-foreground",
            isActive ? "text-sidebar-accent-foreground font-semibold" : "text-sidebar-foreground/70",
            depth > 0 && "ml-4"
          )}
        >
          {isActive && (
            <motion.div
              layoutId="active-indicator"
              className="absolute inset-0 bg-sidebar-accent/50 rounded-md -z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            />
          )}

          {item.icon && (
            <item.icon className={cn("w-4 h-4 transition-colors", isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
          )}
          <span>{item.title}</span>
        </Link>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex w-full items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors group",
            "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
            "text-sidebar-foreground/80",
            depth > 0 && "ml-4"
          )}
        >
          <div className="flex items-center gap-2">
            {item.icon && <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />}
            <span>{item.title}</span>
          </div>
          {hasChildren && (
            <ChevronRight
              className={cn(
                "w-4 h-4 transition-transform duration-200 text-muted-foreground",
                isOpen && "rotate-90"
              )}
            />
          )}
        </button>
      )}

      <AnimatePresence>
        {isOpen && hasChildren && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-l border-sidebar-border/50 ml-5 pl-1 my-1 space-y-1">
              {item.items.map((child: any, index: number) => (
                <SidebarItem key={index} item={child} depth={depth + 1} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function AppSidebar() {
  return (
    <aside className="w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col sticky top-0">
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2 font-bold text-lg text-sidebar-foreground">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
            <BookOpen className="w-5 h-5" />
          </div>
          UniNotes
        </div>
      </div>

      {/* Search (Mock) */}
      <div className="px-4 py-3">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search notes..."
            className="w-full pl-9 pr-4 py-2 bg-sidebar-accent/50 border border-sidebar-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-2 px-2 space-y-1">
        <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Platform
        </div>
        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
        >
          <LayoutDashboard className="w-4 h-4" />
          Dashboard
        </Link>

        <div className="mt-4 px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Library
        </div>
        {navigationData.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <button className="flex items-center gap-2 w-full px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent rounded-md transition-colors">
          <Settings className="w-4 h-4" />
          Settings
        </button>
      </div>
    </aside>
  );
}
