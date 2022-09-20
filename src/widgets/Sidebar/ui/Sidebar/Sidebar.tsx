import {classNames} from "shared/lib/classNames/classNames";
import classes from './Sidebar.module.scss';
import {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LanguageSwitcher} from "shared/ui/LanguageSwitcher/LanguageSwitcher";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prevState => !prevState);
    }
    return (
        <div className={classNames(classes.sidebar, {[classes.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>TOGGLE</button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};