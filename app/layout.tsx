import MainHeader from "@/components/MainHeader/MainHeader";
import "./globals.css";
import { JSX, ReactNode } from "react";

export const metadata = {
    title: "NextLevel Food",
    description: "Delicious meals, shared by a food-loving community.",
};

type RootLayoutProps = {
    children: ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }): JSX.Element => {
    return (
        <html lang="en">
            <body>
                <MainHeader />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
