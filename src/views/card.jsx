import { BellIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { ModeToggle } from '@/components/mode-toggle'
import { useState, useEffect } from 'react'

const notifications = [
    {
        title: 'Detect infinite Scrolling',
        code: 'infiniteScrolling',
        description: 'Enable infinite scrolling detection',
    },
    {
        title: 'Set the timer',
        code: 'readingTime',
        description: 'Contorl the scrolling by the timer',
    },
]

export default function CardDemo({ className, ...props }) {
    const [switchModule, setSwitchValue] = useState({})

    function onChangeSwitch(checked, code) {
        if (chrome.storage) chrome.storage.sync.set({ [code]: checked })
        setSwitchValue(prevState => ({
            ...prevState,
            [code]: checked,
        }))
    }
    useEffect(() => {
        if (chrome.storage) {
            const fieldName = ['infiniteScrolling', 'readingTime']
            chrome.storage.sync.get(fieldName, result => {
                fieldName.forEach(code => {
                    setSwitchValue(prevState => ({
                        ...prevState,
                        [code]: result[code] || false,
                    }))
                })
            })
        }
    })

    return (
        <>
            <Card className={cn('w-[400px] card', className)} {...props}>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <div className="flex-1 space-y-1">
                            <CardTitle>Notifications</CardTitle>
                            <CardDescription>You have 3 unread messages.</CardDescription>
                        </div>
                        <div className="flex justify-end">
                            <ModeToggle></ModeToggle>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="grid gap-4">
                    {notifications.map(({ title, description, code }) => (
                        <div className=" flex items-center space-x-4 rounded-md border p-4" key={code}>
                            <BellIcon />
                            <div className="flex-1 space-y-1">
                                <p className="text-sm font-medium leading-none">{title}</p>
                                <p className="text-sm text-muted-foreground">{description}</p>
                            </div>
                            <Switch checked={switchModule[code]} onCheckedChange={checked => onChangeSwitch(checked, code)} />
                        </div>
                    ))}
                </CardContent>
            </Card>
        </>
    )
}
