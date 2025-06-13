import Banner from "Components/Banner";
import { Outlet } from "react-router-dom";

export default function DefaultPage() {
    return (
        <>
            <Banner />
            <Outlet/>
        </>
    )
}