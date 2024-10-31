import * as React from 'react';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import { SignInButton } from './SignInButton';
import { AccountPreviewProps } from './AccountPreview';
import { useLocaleText } from '../shared/locales/LocaleContext';
export interface AccountSlots {
    /**
     * The component used for the account preview
     * @default AccountPreview
     */
    preview?: React.ElementType;
    /**
     * The component used for the account popover menu
     * @default Popover
     */
    popover?: React.ElementType;
    /**
     * The component used for the content of account popover
     * @default Stack
     */
    popoverContent?: React.ElementType;
    /**
     * The component used for the sign in button.
     * @default Button
     */
    signInButton?: React.ElementType;
    /**
     * The component used for the sign out button.
     * @default Button
     */
    signOutButton?: React.ElementType;
}
export interface AccountProps {
    /**
     * The components used for each slot inside.
     */
    slots?: AccountSlots;
    /**
     * The props used for each slot inside.
     */
    slotProps?: {
        preview?: AccountPreviewProps;
        popover?: React.ComponentProps<typeof Popover>;
        popoverContent?: React.ComponentProps<typeof Stack>;
        signInButton?: React.ComponentProps<typeof SignInButton>;
        signOutButton?: React.ComponentProps<typeof Button>;
    };
    /**
     * The labels for the account component.
     */
    localeText?: Partial<ReturnType<typeof useLocaleText>>;
}
/**
 *
 * Demos:
 *
 * - [Account](https://mui.com/toolpad/core/react-account/)
 * - [Dashboard Layout](https://mui.com/toolpad/core/react-dashboard-layout/)
 * - [Sign-in Page](https://mui.com/toolpad/core/react-sign-in-page/)
 *
 * API:
 *
 * - [Account API](https://mui.com/toolpad/core/api/account)
 */
declare function Account(props: AccountProps): React.JSX.Element | null;
declare namespace Account {
    var propTypes: any;
}
export { Account };
