interface UserEditViewProps {
    userId: string;
}

export default function UserEditView(props: UserEditViewProps) {
    const { userId } = props;
    return <div>Hello "/user-management/{userId}/edit"!</div>;
}
