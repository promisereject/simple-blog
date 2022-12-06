import { DropdownDirection } from '../../../types/ui';
import classes from '../styles/popups.module.scss';

export const mapPropsToDirectionClass: Record<DropdownDirection, string> = {
    'top left': classes.itemsTopLeft,
    'top right': classes.itemsTopRight,
    'bottom left': classes.itemsBottomLeft,
    'bottom right': classes.itemsBottomRight,
};
