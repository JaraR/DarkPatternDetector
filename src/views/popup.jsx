import { useState, useRef } from 'react'
import { BellIcon, Cross1Icon, RocketIcon, StopwatchIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Draggable from 'react-draggable'
import { observerScrollbar } from '@/utils/observerScrollbar'
import { observerReadingTime } from '@/utils/observerReadingTime'

const notifications = [
    {
        title: 'infinite Scrolling',
        code: 'infiniteScrolling',
        description: 'Enable infinite scrolling detection',
        icon: <RocketIcon />,
    },
    {
        title: 'Set the timer',
        code: 'readingTime',
        description: 'Contorl the scrolling by the timer',
        icon: <StopwatchIcon />,
    },
]

export function Popup() {
    const [state, setState] = useState(false)
    const [bounds, setBounds] = useState({
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    })
    const draggleRef = useRef(null)
    const onStart = (_event, uiData) => {
        const { clientWidth, clientHeight } = window.document.documentElement
        const targetRect = draggleRef.current?.getBoundingClientRect()
        if (!targetRect) {
            return
        }
        setBounds({
            left: -targetRect.left + uiData.x,
            right: clientWidth - (targetRect.right - uiData.x),
            top: -targetRect.top + uiData.y,
            bottom: clientHeight - (targetRect.bottom - uiData.y),
        })
    }

    // 监测脚本事件
    !(function () {
        let setMassage = (callback, state) => {
            callback(state, data => {
                console.log(data)
            })
        }

        function popupScript(fieldName, changes) {
            Object.keys(fieldName).forEach(key => {
                if (!Object.values(changes).some(item => item)) {
                    setMassage(fieldName[key], changes[key])
                    return setState(false)
                }
                if (changes[key]) {
                    setMassage(fieldName[key], changes[key])
                    return setState(true)
                }
            })
        }

        // 初始化 监测用户是否开启了监测模式
        !(function () {
            const fieldName = {
                infiniteScrolling: observerScrollbar,
                readingTime: observerReadingTime,
            }
            let newObj = {}
            // 监控用户是否启用了检测
            chrome.storage &&
                chrome.storage.sync.get(Object.keys(fieldName), function (result) {
                    popupScript(fieldName, result)
                    newObj = result
                })
            // 当存储的检测状态变化时更新
            chrome.storage.onChanged.addListener(function (changes) {
                Object.keys(changes).forEach(key => (newObj[key] = changes[key].newValue))
                popupScript(fieldName, newObj)
            })
        })()
    })()

    return (
        <>
            {state ? (
                <Draggable nodeRef={draggleRef} bounds={bounds} onStart={(event, uiData) => onStart(event, uiData)}>
                    <Card className="w-[350px] bg-gradient-to-r" ref={draggleRef}>
                        <div className="flex justify-end p-2 z-50">
                            <Cross1Icon className="m-2 cursor-pointer" onClick={() => document.getElementById('crx-root').remove()}></Cross1Icon>
                        </div>
                        <CardHeader className="pt-0">
                            <CardTitle>Create project</CardTitle>
                            <CardDescription>Deploy your new project in one-click.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            {notifications.map(({ title, description, code, icon }) => (
                                <div className=" flex items-center space-x-4 rounded-md border p-4" key={code}>
                                    {icon}
                                    <div className="flex-1 space-y-1 ml-2s">
                                        <p className="text-sm font-medium leading-none">{title}</p>
                                        <p className="text-sm text-muted-foreground">{description}</p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </Draggable>
            ) : (
                <></>
            )}
        </>
    )
}
