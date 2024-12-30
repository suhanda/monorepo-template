import { Outlet } from "@tanstack/react-router";

export default function UserManagementLayout() {
    return (
        <>
            <div>Hello "/user-management Layout"!</div>
            <Outlet />
        </>
    );
}
