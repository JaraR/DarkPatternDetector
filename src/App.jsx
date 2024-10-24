import { router } from '@/router'
import { RouterProvider } from 'react-router-dom'
import Card from '@/views/card'
import { ThemeProvider } from '@/components/theme-provider'

export default function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Card></Card>
                {/* <RouterProvider router={router} /> */}
            </ThemeProvider>
        </>
    )
}
