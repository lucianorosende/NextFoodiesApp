import React, { JSX } from "react";

type MealsDynamicRouteProps = {
    params: {
        slug: string;
    };
};

const MealsDynamicRoute: React.FC<MealsDynamicRouteProps> = async ({
    params,
}): Promise<JSX.Element> => {
    const { slug } = await params;
    return <div>{slug}</div>;
};

export default MealsDynamicRoute;
