import Link from "next/link";
import React, { JSX } from "react";
import logoImg from "../../public/images/logo.png";
import styles from "./MainHeader.module.css";
import Image from "next/image";

const MainHeader: React.FC = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <Link className={styles.logo} href="/">
                <Image src={logoImg} alt="logo" priority />
                NextLevel Food
            </Link>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
