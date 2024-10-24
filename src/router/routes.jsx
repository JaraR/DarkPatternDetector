import Home from '@/views/home'
import Button from '@/views/button'
import Card from '@/views/card'

export default [
    {
        path: '/card',
        element: <Card />,
    },
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/button',
        element: <Button />,
    },
]
