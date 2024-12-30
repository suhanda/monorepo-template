interface UserDetailComponentProps {
    userId: string;
}

export default function UserDetailComponent(props: UserDetailComponentProps) {
    const { userId } = props;

    return <div>Hello "/user-management/{userId}/"!</div>;
}
