import Link from "next/link";
import React, { JSX } from "react";
import logoImg from "../../public/images/logo.png";
import styles from "./MainHeader.module.css";
import Image from "next/image";
import MainHeaderBG from "./MainHeaderBg";
import NavLink from "../NavLink/NavLink";

const MainHeader: React.FC = (): JSX.Element => {
    return (
        <>
            <MainHeaderBG />
            <header className={styles.header}>
                <Link className={styles.logo} href="/">
                    <Image src={logoImg} alt="logo" priority />
                    NextLevel Food
                </Link>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">
                                Foodies Community
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default MainHeader;
