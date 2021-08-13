import Auth from "../components/Auth";
import Layout from "../components/Layout";

import Image from "next/image";

export default function Home() {
    return (
        <Layout title="Login">
            <Auth />
        </Layout>
    );
}
