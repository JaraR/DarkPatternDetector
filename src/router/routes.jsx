import Home from '@/views/home'
import Button from '@/views/button'
import Card from '@/views/card'

export default [
    {
        path: '/',
        element: <Card />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/button',
        element: <Button />,
    },
]
