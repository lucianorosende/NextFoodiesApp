"use client";
import React, { JSX } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.css";
import { NavLinkProps } from "@/Interfaces/NavLinkProps";

const NavLink: React.FC<NavLinkProps> = ({ href, children }): JSX.Element => {
    const path = usePathname();
    return (
        <Link
            href={href}
            className={
                path.startsWith(href)
                    ? `${styles.active} ${styles.link}`
                    : styles.link
            }
        >
            {children}
        </Link>
    );
};

export default NavLink;
