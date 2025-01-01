import { Route } from "@/routes/_authenticated/users-management/$userId";

export default function UserDetailComponent() {
  const { userId } = Route.useParams();

  return <div>Hello "/user-management/{userId}/"!</div>;
}
