import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const {
        className,
    } = props;

    const { id } = useParams<{id: string}>();

    return (
        <Page className={classNames('classes.profilePage', {}, [className])}>
            <EditableProfileCard id={id} />
        </Page>
    );
});

export default ProfilePage;
