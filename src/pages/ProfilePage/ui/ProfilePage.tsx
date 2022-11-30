import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('profile');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return <Text text={t('Профиль не найден')} />;
    }
    return (
        <Page className={classNames('classes.profilePage', {}, [className])}>
            <EditableProfileCard id={id} />
        </Page>
    );
});

export default ProfilePage;
