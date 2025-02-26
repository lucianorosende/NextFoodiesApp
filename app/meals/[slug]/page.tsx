import React, { JSX } from "react";
import { MealsDynamicRouteProps } from "@/Interfaces/MealsDynamicRouteProps";

const MealsDynamicRoute: React.FC<MealsDynamicRouteProps> = async ({
    params,
}): Promise<JSX.Element> => {
    const { slug } = await params;
    return <div>{slug}</div>;
};

export default MealsDynamicRoute;
