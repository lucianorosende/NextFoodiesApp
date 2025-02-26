import React, { JSX } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/Meals/MealsGrid";
import { getMeals } from "@/lib/meals";

const MealsPage: React.FC = async (): Promise<JSX.Element> => {
    const meals = await getMeals();
    return (
        <>
            <header className={styles.header}>
                <h1>
                    Delicious meals, created
                    <span className={styles.highlight}> by you </span>
                </h1>
                <p>
                    Choose your favorite meal and then share it with our
                    community!
                </p>
                <p className={styles.cta}>
                    <Link href="/meals/share"> Share your meals </Link>
                </p>
            </header>
            <main className={styles.main}>
                <MealsGrid meals={meals} />
            </main>
        </>
    );
};

export default MealsPage;
