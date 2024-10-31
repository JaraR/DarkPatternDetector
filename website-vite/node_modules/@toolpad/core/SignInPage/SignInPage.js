'use client';

var _LockOutlinedIcon, _Typography, _Checkbox;
import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import PasswordIcon from '@mui/icons-material/Password';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import AppleIcon from '@mui/icons-material/Apple';
import Stack from '@mui/material/Stack';
import GoogleIcon from "./icons/Google.js";
import FacebookIcon from "./icons/Facebook.js";
import TwitterIcon from "./icons/Twitter.js";
import InstagramIcon from "./icons/Instagram.js";
import TikTokIcon from "./icons/TikTok.js";
import LinkedInIcon from "./icons/LinkedIn.js";
import SlackIcon from "./icons/Slack.js";
import SpotifyIcon from "./icons/Spotify.js";
import TwitchIcon from "./icons/Twitch.js";
import DiscordIcon from "./icons/Discord.js";
import LineIcon from "./icons/Line.js";
import Auth0Icon from "./icons/Auth0.js";
import MicrosoftEntraIdIcon from "./icons/MicrosoftEntra.js";
import CognitoIcon from "./icons/Cognito.js";
import GitLabIcon from "./icons/GitLab.js";
import KeycloakIcon from "./icons/Keycloak.js";
import OktaIcon from "./icons/Okta.js";
import FusionAuthIcon from "./icons/FusionAuth.js";
import { BrandingContext, RouterContext } from "../shared/context.js";
import { DocsContext } from "../internal/context.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const IconProviderMap = new Map([['github', /*#__PURE__*/_jsx(GitHubIcon, {}, "github")], ['credentials', /*#__PURE__*/_jsx(PasswordIcon, {}, "credentials")], ['google', /*#__PURE__*/_jsx(GoogleIcon, {}, "google")], ['facebook', /*#__PURE__*/_jsx(FacebookIcon, {}, "facebook")], ['passkey', /*#__PURE__*/_jsx(FingerprintIcon, {}, "passkey")], ['twitter', /*#__PURE__*/_jsx(TwitterIcon, {}, "twitter")], ['apple', /*#__PURE__*/_jsx(AppleIcon, {}, "apple")], ['instagram', /*#__PURE__*/_jsx(InstagramIcon, {}, "instagram")], ['tiktok', /*#__PURE__*/_jsx(TikTokIcon, {}, "tiktok")], ['linkedin', /*#__PURE__*/_jsx(LinkedInIcon, {}, "linkedin")], ['slack', /*#__PURE__*/_jsx(SlackIcon, {}, "slack")], ['spotify', /*#__PURE__*/_jsx(SpotifyIcon, {}, "spotify")], ['twitch', /*#__PURE__*/_jsx(TwitchIcon, {}, "twitch")], ['discord', /*#__PURE__*/_jsx(DiscordIcon, {}, "discord")], ['line', /*#__PURE__*/_jsx(LineIcon, {}, "line")], ['auth0', /*#__PURE__*/_jsx(Auth0Icon, {}, "auth0")], ['microsoft-entra-id', /*#__PURE__*/_jsx(MicrosoftEntraIdIcon, {}, "microsoft-entra-id")], ['cognito', /*#__PURE__*/_jsx(CognitoIcon, {}, "cognito")], ['gitlab', /*#__PURE__*/_jsx(GitLabIcon, {}, "gitlab")], ['keycloak', /*#__PURE__*/_jsx(KeycloakIcon, {}, "keycloak")], ['okta', /*#__PURE__*/_jsx(OktaIcon, {}, "okta")], ['fusionauth', /*#__PURE__*/_jsx(FusionAuthIcon, {}, "fusionauth")]]);
/**
 *
 * Demos:
 *
 * - [Sign-in Page](https://mui.com/toolpad/core/react-sign-in-page/)
 *
 * API:
 *
 * - [SignInPage API](https://mui.com/toolpad/core/api/sign-in-page)
 */
function SignInPage(props) {
  const {
    providers,
    signIn,
    slots,
    slotProps
  } = props;
  const branding = React.useContext(BrandingContext);
  const docs = React.useContext(DocsContext);
  const router = React.useContext(RouterContext);
  const passkeyProvider = providers?.find(provider => provider.id === 'passkey');
  const credentialsProvider = providers?.find(provider => provider.id === 'credentials');
  const [{
    loading,
    selectedProviderId,
    error
  }, setFormStatus] = React.useState({
    selectedProviderId: undefined,
    loading: false,
    error: ''
  });
  const callbackUrl = router?.searchParams.get('callbackUrl') ?? '/';
  const singleProvider = React.useMemo(() => providers?.length === 1, [providers]);
  return /*#__PURE__*/_jsx(Container, {
    component: "main",
    maxWidth: "xs",
    children: /*#__PURE__*/_jsxs(Box, {
      sx: {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      children: [branding?.logo ?? /*#__PURE__*/_jsx(Avatar, {
        sx: {
          my: 1,
          mb: 2,
          bgcolor: 'primary.main'
        },
        children: _LockOutlinedIcon || (_LockOutlinedIcon = /*#__PURE__*/_jsx(LockOutlinedIcon, {}))
      }), /*#__PURE__*/_jsxs(Typography, {
        variant: "h5",
        color: "textPrimary",
        gutterBottom: true,
        textAlign: "center",
        children: ["Sign in ", branding?.title ? `to ${branding.title}` : null]
      }), _Typography || (_Typography = /*#__PURE__*/_jsx(Typography, {
        variant: "body2",
        color: "textSecondary",
        gutterBottom: true,
        textAlign: "center",
        children: "Welcome, please sign in to continue"
      })), /*#__PURE__*/_jsxs(Box, {
        sx: {
          mt: 2
        },
        children: [/*#__PURE__*/_jsxs(Stack, {
          spacing: 1,
          children: [error && selectedProviderId !== 'credentials' && selectedProviderId !== 'passkey' ? /*#__PURE__*/_jsx(Alert, {
            severity: "error",
            children: error
          }) : null, Object.values(providers ?? {}).map(provider => {
            if (provider.id === 'credentials' || provider.id === 'passkey') {
              return null;
            }
            return /*#__PURE__*/_jsx("form", {
              onSubmit: async event => {
                event.preventDefault();
                setFormStatus({
                  error: '',
                  selectedProviderId: provider.id,
                  loading: true
                });
                const oauthResponse = await signIn?.(provider, undefined, callbackUrl);
                setFormStatus(prev => ({
                  ...prev,
                  loading: oauthResponse?.error || docs ? false : prev.loading,
                  error: oauthResponse?.error
                }));
              },
              children: /*#__PURE__*/_jsx(LoadingButton, {
                variant: "contained",
                type: "submit",
                fullWidth: true,
                size: "large",
                disableElevation: true,
                name: 'provider',
                color: singleProvider ? 'primary' : 'inherit',
                loading: loading && selectedProviderId === provider.id,
                value: provider.id,
                startIcon: IconProviderMap.get(provider.id),
                sx: {
                  textTransform: 'capitalize',
                  filter: 'opacity(0.9)',
                  transition: 'filter 0.2s ease-in',
                  '&:hover': {
                    filter: 'opacity(1)'
                  }
                },
                children: /*#__PURE__*/_jsxs("span", {
                  children: ["Sign in with ", provider.name]
                })
              }, provider.id)
            }, provider.id);
          })]
        }), passkeyProvider ? /*#__PURE__*/_jsxs(React.Fragment, {
          children: [singleProvider ? null : /*#__PURE__*/_jsx(Divider, {
            sx: {
              mt: 2,
              mx: 0,
              mb: 1
            },
            children: "or"
          }), error && selectedProviderId === 'passkey' ? /*#__PURE__*/_jsx(Alert, {
            sx: {
              my: 2
            },
            severity: "error",
            children: error
          }) : null, /*#__PURE__*/_jsxs(Box, {
            component: "form",
            onSubmit: async event => {
              setFormStatus({
                error: '',
                selectedProviderId: passkeyProvider.id,
                loading: true
              });
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const passkeyResponse = await signIn?.(passkeyProvider, formData, callbackUrl);
              setFormStatus(prev => ({
                ...prev,
                loading: false,
                error: passkeyResponse?.error
              }));
            },
            children: [slots?.emailField ? /*#__PURE__*/_jsx(slots.emailField, {
              ...slotProps?.emailField
            }) : /*#__PURE__*/_jsx(TextField, {
              margin: "dense",
              required: true,
              slotProps: {
                htmlInput: {
                  sx: {
                    paddingTop: '12px',
                    paddingBottom: '12px'
                  }
                },
                inputLabel: {
                  sx: {
                    lineHeight: '1rem'
                  }
                }
              },
              fullWidth: true,
              id: "email-passkey",
              label: "Email Address",
              name: "email",
              type: "email",
              autoComplete: "email-webauthn",
              autoFocus: docs ? false : singleProvider,
              ...slotProps?.emailField
            }), slots?.submitButton ? /*#__PURE__*/_jsx(slots.submitButton, {
              ...slotProps?.submitButton
            }) : /*#__PURE__*/_jsxs(LoadingButton, {
              type: "submit",
              fullWidth: true,
              size: "large",
              variant: "contained",
              disableElevation: true,
              startIcon: IconProviderMap.get(passkeyProvider.id),
              color: singleProvider ? 'primary' : 'inherit',
              loading: loading && selectedProviderId === passkeyProvider.id,
              sx: {
                mt: 3,
                mb: 2,
                textTransform: 'capitalize',
                filter: 'opacity(0.9)',
                transition: 'filter 0.2s ease-in',
                '&:hover': {
                  filter: 'opacity(1)'
                }
              },
              ...slotProps?.submitButton,
              children: ["Sign in with ", passkeyProvider.name || 'Passkey']
            })]
          })]
        }) : null, credentialsProvider ? /*#__PURE__*/_jsxs(React.Fragment, {
          children: [singleProvider ? null : /*#__PURE__*/_jsx(Divider, {
            sx: {
              mt: 2,
              mx: 0,
              mb: 1
            },
            children: "or"
          }), error && selectedProviderId === 'credentials' ? /*#__PURE__*/_jsx(Alert, {
            sx: {
              my: 2
            },
            severity: "error",
            children: error
          }) : null, /*#__PURE__*/_jsxs(Box, {
            component: "form",
            onSubmit: async event => {
              setFormStatus({
                error: '',
                selectedProviderId: credentialsProvider.id,
                loading: true
              });
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const credentialsResponse = await signIn?.(credentialsProvider, formData, callbackUrl);
              setFormStatus(prev => ({
                ...prev,
                loading: false,
                error: credentialsResponse?.error
              }));
            },
            children: [slots?.emailField ? /*#__PURE__*/_jsx(slots.emailField, {
              ...slotProps?.emailField
            }) : /*#__PURE__*/_jsx(TextField, {
              margin: "dense",
              required: true,
              slotProps: {
                htmlInput: {
                  sx: {
                    paddingTop: '12px',
                    paddingBottom: '12px'
                  }
                },
                inputLabel: {
                  sx: {
                    lineHeight: '1rem'
                  }
                }
              },
              fullWidth: true,
              id: "email",
              label: "Email Address",
              name: "email",
              type: "email",
              autoComplete: "email",
              autoFocus: docs ? false : singleProvider,
              ...slotProps?.emailField
            }), slots?.passwordField ? /*#__PURE__*/_jsx(slots.passwordField, {
              ...slotProps?.passwordField
            }) : /*#__PURE__*/_jsx(TextField, {
              margin: "dense",
              required: true,
              fullWidth: true,
              slotProps: {
                htmlInput: {
                  sx: {
                    paddingTop: '12px',
                    paddingBottom: '12px'
                  }
                },
                inputLabel: {
                  sx: {
                    lineHeight: '1rem'
                  }
                }
              },
              name: "password",
              label: "Password",
              type: "password",
              id: "password",
              autoComplete: "current-password",
              ...slotProps?.passwordField
            }), /*#__PURE__*/_jsx(FormControlLabel, {
              control: _Checkbox || (_Checkbox = /*#__PURE__*/_jsx(Checkbox, {
                value: "remember",
                color: "primary"
              })),
              label: "Remember me",
              slotProps: {
                typography: {
                  color: 'textSecondary'
                }
              }
            }), slots?.submitButton ? /*#__PURE__*/_jsx(slots.submitButton, {
              ...slotProps?.submitButton
            }) : /*#__PURE__*/_jsx(LoadingButton, {
              type: "submit",
              fullWidth: true,
              size: "large",
              variant: "contained",
              disableElevation: true,
              color: singleProvider ? 'primary' : 'inherit',
              loading: loading && selectedProviderId === credentialsProvider.id,
              sx: {
                mt: 3,
                mb: 2,
                textTransform: 'capitalize',
                filter: 'opacity(0.9)',
                transition: 'filter 0.2s ease-in',
                '&:hover': {
                  filter: 'opacity(1)'
                }
              },
              ...slotProps?.submitButton,
              children: "Sign in"
            }), slots?.forgotPasswordLink || slots?.signUpLink ? /*#__PURE__*/_jsxs(Box, {
              sx: {
                display: 'flex',
                justifyContent: 'space-between',
                mt: 2
              },
              children: [slots?.forgotPasswordLink ? /*#__PURE__*/_jsx(slots.forgotPasswordLink, {
                ...slotProps?.forgotPasswordLink
              }) : null, slots?.signUpLink ? /*#__PURE__*/_jsx(slots.signUpLink, {
                ...slotProps?.signUpLink
              }) : null]
            }) : null]
          })]
        }) : null]
      })]
    })
  });
}
process.env.NODE_ENV !== "production" ? SignInPage.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The list of authentication providers to display.
   * @default []
   */
  providers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOf(['apple', 'auth0', 'cognito', 'credentials', 'discord', 'facebook', 'fusionauth', 'github', 'gitlab', 'google', 'instagram', 'keycloak', 'line', 'linkedin', 'microsoft-entra-id', 'okta', 'passkey', 'slack', 'spotify', 'tiktok', 'twitch', 'twitter']).isRequired,
    name: PropTypes.string.isRequired
  })),
  /**
   * Callback fired when a user signs in.
   * @param {AuthProvider} provider The authentication provider.
   * @param {FormData} formData The form data if the provider id is 'credentials'.\
   * @param {string} callbackUrl The URL to redirect to after signing in.
   * @returns {void|Promise<AuthResponse>}
   * @default undefined
   */
  signIn: PropTypes.func,
  /**
   * The props used for each slot inside.
   * @default {}
   * @example { emailField: { autoFocus: false } }
   * @example { passwordField: { variant: 'outlined' } }
   * @example { emailField: { autoFocus: false }, passwordField: { variant: 'outlined' } }
   */
  slotProps: PropTypes.shape({
    emailField: PropTypes.object,
    forgotPasswordLink: PropTypes.object,
    passwordField: PropTypes.object,
    signUpLink: PropTypes.object,
    submitButton: PropTypes.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   * @example { forgotPasswordLink: <Link href="/forgot-password">Forgot password?</Link> }
   * @example { signUpLink: <Link href="/sign-up">Sign up</Link> }
   */
  slots: PropTypes.shape({
    emailField: PropTypes.elementType,
    forgotPasswordLink: PropTypes.elementType,
    passwordField: PropTypes.elementType,
    signUpLink: PropTypes.elementType,
    submitButton: PropTypes.elementType
  })
} : void 0;
export { SignInPage };