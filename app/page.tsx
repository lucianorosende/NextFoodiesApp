import Link from "next/link";
import { JSX } from "react";

const Home: React.FC = (): JSX.Element => {
    return (
        <main>
            <h1 style={{ color: "white", textAlign: "center" }}>
                Time to get started!
            </h1>
            <p>
                <Link href="/meals">Meals</Link>
            </p>
            <p>
                <Link href="/meals/share">Meals Share</Link>
            </p>
            <p>
                <Link href="/community">Community</Link>
            </p>
        </main>
    );
};

export default Home;
