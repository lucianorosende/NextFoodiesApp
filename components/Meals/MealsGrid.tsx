import React, { JSX } from "react";
import styles from "./MealsGrid.module.css";
import MealItem from "./MealItem";
import { MealsGridProps } from "@/Interfaces/MealsGridProps";

const MealsGrid: React.FC<MealsGridProps> = ({ meals }): JSX.Element => {
    return (
        <ul className={styles.meals}>
            {meals.map((meal) => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    );
};

export default MealsGrid;
