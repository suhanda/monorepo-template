import { Route } from "@/routes/_authenticated/users-management/$userId.edit";

export default function UserEditView() {
  const { userId } = Route.useParams();
  return <div>Hello "/user-management/{userId}/edit"!</div>;
}
