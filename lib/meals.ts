import sql from "better-sqlite3";
import { Meal } from "@/Interfaces/Meal";

const db = sql("meals.db");

export const getMeals = (): Meal[] => {
    return db.prepare("SELECT * FROM meals").all() as Meal[];
};
