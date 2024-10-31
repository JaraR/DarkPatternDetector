"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignInPage = SignInPage;
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));
var _Alert = _interopRequireDefault(require("@mui/material/Alert"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Checkbox2 = _interopRequireDefault(require("@mui/material/Checkbox"));
var _Container = _interopRequireDefault(require("@mui/material/Container"));
var _Divider = _interopRequireDefault(require("@mui/material/Divider"));
var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _Typography2 = _interopRequireDefault(require("@mui/material/Typography"));
var _LoadingButton = _interopRequireDefault(require("@mui/lab/LoadingButton"));
var _LockOutlined = _interopRequireDefault(require("@mui/icons-material/LockOutlined"));
var _GitHub = _interopRequireDefault(require("@mui/icons-material/GitHub"));
var _Password = _interopRequireDefault(require("@mui/icons-material/Password"));
var _Fingerprint = _interopRequireDefault(require("@mui/icons-material/Fingerprint"));
var _Apple = _interopRequireDefault(require("@mui/icons-material/Apple"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _Google = _interopRequireDefault(require("./icons/Google"));
var _Facebook = _interopRequireDefault(require("./icons/Facebook"));
var _Twitter = _interopRequireDefault(require("./icons/Twitter"));
var _Instagram = _interopRequireDefault(require("./icons/Instagram"));
var _TikTok = _interopRequireDefault(require("./icons/TikTok"));
var _LinkedIn = _interopRequireDefault(require("./icons/LinkedIn"));
var _Slack = _interopRequireDefault(require("./icons/Slack"));
var _Spotify = _interopRequireDefault(require("./icons/Spotify"));
var _Twitch = _interopRequireDefault(require("./icons/Twitch"));
var _Discord = _interopRequireDefault(require("./icons/Discord"));
var _Line = _interopRequireDefault(require("./icons/Line"));
var _Auth = _interopRequireDefault(require("./icons/Auth0"));
var _MicrosoftEntra = _interopRequireDefault(require("./icons/MicrosoftEntra"));
var _Cognito = _interopRequireDefault(require("./icons/Cognito"));
var _GitLab = _interopRequireDefault(require("./icons/GitLab"));
var _Keycloak = _interopRequireDefault(require("./icons/Keycloak"));
var _Okta = _interopRequireDefault(require("./icons/Okta"));
var _FusionAuth = _interopRequireDefault(require("./icons/FusionAuth"));
var _context = require("../shared/context");
var _context2 = require("../internal/context");
var _jsxRuntime = require("react/jsx-runtime");
var _LockOutlinedIcon, _Typography, _Checkbox;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const IconProviderMap = new Map([['github', /*#__PURE__*/(0, _jsxRuntime.jsx)(_GitHub.default, {}, "github")], ['credentials', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Password.default, {}, "credentials")], ['google', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Google.default, {}, "google")], ['facebook', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Facebook.default, {}, "facebook")], ['passkey', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Fingerprint.default, {}, "passkey")], ['twitter', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Twitter.default, {}, "twitter")], ['apple', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Apple.default, {}, "apple")], ['instagram', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Instagram.default, {}, "instagram")], ['tiktok', /*#__PURE__*/(0, _jsxRuntime.jsx)(_TikTok.default, {}, "tiktok")], ['linkedin', /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkedIn.default, {}, "linkedin")], ['slack', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Slack.default, {}, "slack")], ['spotify', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Spotify.default, {}, "spotify")], ['twitch', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Twitch.default, {}, "twitch")], ['discord', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Discord.default, {}, "discord")], ['line', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Line.default, {}, "line")], ['auth0', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Auth.default, {}, "auth0")], ['microsoft-entra-id', /*#__PURE__*/(0, _jsxRuntime.jsx)(_MicrosoftEntra.default, {}, "microsoft-entra-id")], ['cognito', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Cognito.default, {}, "cognito")], ['gitlab', /*#__PURE__*/(0, _jsxRuntime.jsx)(_GitLab.default, {}, "gitlab")], ['keycloak', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Keycloak.default, {}, "keycloak")], ['okta', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Okta.default, {}, "okta")], ['fusionauth', /*#__PURE__*/(0, _jsxRuntime.jsx)(_FusionAuth.default, {}, "fusionauth")]]);
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
  const branding = React.useContext(_context.BrandingContext);
  const docs = React.useContext(_context2.DocsContext);
  const router = React.useContext(_context.RouterContext);
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
    component: "main",
    maxWidth: "xs",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      children: [branding?.logo ?? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
        sx: {
          my: 1,
          mb: 2,
          bgcolor: 'primary.main'
        },
        children: _LockOutlinedIcon || (_LockOutlinedIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_LockOutlined.default, {}))
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography2.default, {
        variant: "h5",
        color: "textPrimary",
        gutterBottom: true,
        textAlign: "center",
        children: ["Sign in ", branding?.title ? `to ${branding.title}` : null]
      }), _Typography || (_Typography = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography2.default, {
        variant: "body2",
        color: "textSecondary",
        gutterBottom: true,
        textAlign: "center",
        children: "Welcome, please sign in to continue"
      })), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
        sx: {
          mt: 2
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Stack.default, {
          spacing: 1,
          children: [error && selectedProviderId !== 'credentials' && selectedProviderId !== 'passkey' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.default, {
            severity: "error",
            children: error
          }) : null, Object.values(providers ?? {}).map(provider => {
            if (provider.id === 'credentials' || provider.id === 'passkey') {
              return null;
            }
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("form", {
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
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LoadingButton.default, {
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
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                  children: ["Sign in with ", provider.name]
                })
              }, provider.id)
            }, provider.id);
          })]
        }), passkeyProvider ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
          children: [singleProvider ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.default, {
            sx: {
              mt: 2,
              mx: 0,
              mb: 1
            },
            children: "or"
          }), error && selectedProviderId === 'passkey' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.default, {
            sx: {
              my: 2
            },
            severity: "error",
            children: error
          }) : null, /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
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
            children: [slots?.emailField ? /*#__PURE__*/(0, _jsxRuntime.jsx)(slots.emailField, {
              ...slotProps?.emailField
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
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
            }), slots?.submitButton ? /*#__PURE__*/(0, _jsxRuntime.jsx)(slots.submitButton, {
              ...slotProps?.submitButton
            }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_LoadingButton.default, {
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
        }) : null, credentialsProvider ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
          children: [singleProvider ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.default, {
            sx: {
              mt: 2,
              mx: 0,
              mb: 1
            },
            children: "or"
          }), error && selectedProviderId === 'credentials' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.default, {
            sx: {
              my: 2
            },
            severity: "error",
            children: error
          }) : null, /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
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
            children: [slots?.emailField ? /*#__PURE__*/(0, _jsxRuntime.jsx)(slots.emailField, {
              ...slotProps?.emailField
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
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
            }), slots?.passwordField ? /*#__PURE__*/(0, _jsxRuntime.jsx)(slots.passwordField, {
              ...slotProps?.passwordField
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
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
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
              control: _Checkbox || (_Checkbox = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox2.default, {
                value: "remember",
                color: "primary"
              })),
              label: "Remember me",
              slotProps: {
                typography: {
                  color: 'textSecondary'
                }
              }
            }), slots?.submitButton ? /*#__PURE__*/(0, _jsxRuntime.jsx)(slots.submitButton, {
              ...slotProps?.submitButton
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_LoadingButton.default, {
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
            }), slots?.forgotPasswordLink || slots?.signUpLink ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
              sx: {
                display: 'flex',
                justifyContent: 'space-between',
                mt: 2
              },
              children: [slots?.forgotPasswordLink ? /*#__PURE__*/(0, _jsxRuntime.jsx)(slots.forgotPasswordLink, {
                ...slotProps?.forgotPasswordLink
              }) : null, slots?.signUpLink ? /*#__PURE__*/(0, _jsxRuntime.jsx)(slots.signUpLink, {
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
  providers: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.oneOf(['apple', 'auth0', 'cognito', 'credentials', 'discord', 'facebook', 'fusionauth', 'github', 'gitlab', 'google', 'instagram', 'keycloak', 'line', 'linkedin', 'microsoft-entra-id', 'okta', 'passkey', 'slack', 'spotify', 'tiktok', 'twitch', 'twitter']).isRequired,
    name: _propTypes.default.string.isRequired
  })),
  /**
   * Callback fired when a user signs in.
   * @param {AuthProvider} provider The authentication provider.
   * @param {FormData} formData The form data if the provider id is 'credentials'.\
   * @param {string} callbackUrl The URL to redirect to after signing in.
   * @returns {void|Promise<AuthResponse>}
   * @default undefined
   */
  signIn: _propTypes.default.func,
  /**
   * The props used for each slot inside.
   * @default {}
   * @example { emailField: { autoFocus: false } }
   * @example { passwordField: { variant: 'outlined' } }
   * @example { emailField: { autoFocus: false }, passwordField: { variant: 'outlined' } }
   */
  slotProps: _propTypes.default.shape({
    emailField: _propTypes.default.object,
    forgotPasswordLink: _propTypes.default.object,
    passwordField: _propTypes.default.object,
    signUpLink: _propTypes.default.object,
    submitButton: _propTypes.default.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   * @example { forgotPasswordLink: <Link href="/forgot-password">Forgot password?</Link> }
   * @example { signUpLink: <Link href="/sign-up">Sign up</Link> }
   */
  slots: _propTypes.default.shape({
    emailField: _propTypes.default.elementType,
    forgotPasswordLink: _propTypes.default.elementType,
    passwordField: _propTypes.default.elementType,
    signUpLink: _propTypes.default.elementType,
    submitButton: _propTypes.default.elementType
  })
} : void 0;