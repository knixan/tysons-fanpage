
"use client";

import { forwardRef } from "react";
import { usePathname } from "next/navigation";
import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/utils";

type NavLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  LinkProps & {
    className?: string;
    activeClassName?: string;
  };

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, href, ...props }, ref) => {
    const pathname = usePathname();

    const hrefString =
      typeof href === "string" ? href : (href.pathname ?? "").toString();

    // "Aktiv" om exakt match, eller om du vill ha startsWith-beteende kan du ändra här.
    const isActive = pathname === hrefString;

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };