import MainHeader from "@/components/MainHeader/MainHeader";
import "./globals.css";
import { JSX } from "react";
import { RootLayoutProps } from "@/Interfaces/RootLayoutProps";

export const metadata = {
    title: "NextLevel Food",
    description: "Delicious meals, shared by a food-loving community.",
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
