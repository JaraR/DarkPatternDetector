import Card from '@/views/card'
import { ThemeProvider } from '@/components/theme-provider'

export default function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Card></Card>
            </ThemeProvider>
        </>
    )
}
