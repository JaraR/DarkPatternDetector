import { BellIcon, OpenInNewWindowIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { ModeToggle } from '@/components/mode-toggle'
import { useState, useEffect } from 'react'

const notifications = [
    {
        title: 'Detect infinite Scrolling',
        description: 'Enable infinite scrolling detection',
    },
    {
        title: 'Set the timer',
        description: 'Contorl the scrolling by the timer',
    },
    {
        title: 'tbc...',
        description: 'tbc....',
    },
]

function openDialog() {
    console.log('===>')
}

export default function CardDemo({ className, ...props }) {
    const [switchValue, setSwitchValue] = useState(false)

    function observeScroll(checked) {
        if (chrome.storage) chrome.storage.sync.set({ scrollCheckEnabled: checked })
        setSwitchValue(checked)
    }
    useEffect(() => {
        if (chrome.storage) {
            chrome.storage.sync.get(['scrollCheckEnabled'], ({ scrollCheckEnabled: checked }) => {
                setSwitchValue(checked)
            })
        }
    })

    return (
        <>
            <Card className={cn('w-[380px] card', className)} {...props}>
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
                    <div className=" flex items-center space-x-4 rounded-md border p-4">
                        <BellIcon />
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">Push Notifications</p>
                            <p className="text-sm text-muted-foreground">Send notifications to device.</p>
                        </div>
                        <Switch checked={switchValue} onCheckedChange={observeScroll} />
                    </div>
                    <div>
                        {notifications.map((notification, index) => (
                            <div key={index} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">{notification.title}</p>
                                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" onClick={openDialog}>
                        <OpenInNewWindowIcon /> Open Dialog
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}
