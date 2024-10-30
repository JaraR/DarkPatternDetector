import { createBrowserRouter } from 'react-router-dom'
import routes from './routes'

export const router = createBrowserRouter(routes, {
    basename: '/',
    future: {
        // Normalize `useNavigation()`/`useFetcher()` `formMethod` to uppercase
        v7_normalizeFormMethod: true,
    },
})
