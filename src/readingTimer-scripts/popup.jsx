import { useState, useRef, useEffect } from 'react';
import { BellIcon, Cross1Icon, RocketIcon, StopwatchIcon } from '@radix-ui/react-icons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Draggable from 'react-draggable';

const notifications = [
    {
        title: 'Set the timer',
        code: 'readingTimer',
        description: 'Contorl the scrolling by the timer',
        icon: <StopwatchIcon />,
    },
];

var timeId;

export default function Popup() {
    const [state, setState] = useState(false);
    const [tabsParams, setTabsParams] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [bounds, setBounds] = useState({
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    });
    const draggleRef = useRef(null);
    const onStart = (_event, uiData) => {
        const { clientWidth, clientHeight } = window.document.documentElement;
        const targetRect = draggleRef.current?.getBoundingClientRect();
        if (!targetRect) {
            return;
        }
        setBounds({
            left: -targetRect.left + uiData.x,
            right: clientWidth - (targetRect.right - uiData.x),
            top: -targetRect.top + uiData.y,
            bottom: clientHeight - (targetRect.bottom - uiData.y),
        });
    };

    const closeDialog = () => {
        if (chrome.storage) chrome.storage.sync.set({ readingTimer: false });
        setState(false);
    };
    clearInterval(timeId);
    timeId = setInterval(() => {
        setCurrentTime(new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds());
    }, 1000);

    useEffect(() => {
        // 监控用户是否启用了检测
        if (chrome.storage) {
            chrome.storage.sync.get('readingTimer', function (result) {
                if (result.readingTimer) {
                    chrome.runtime.sendMessage(
                        {
                            type: 'updateReadingTime',
                        },
                        (message) => {
                            const { title, favIconUrl, startTime } = message;
                            setTabsParams({ title, favIconUrl, startTime });
                        },
                    );
                    setState(result.readingTimer);
                }
            });
        }
        // 状态变化时更新
        chrome.storage.onChanged.addListener(function (changes) {
            if (changes.readingTimer) setState(changes.readingTimer.newValue);
        });
        // 接收消息
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            if (message && message.type === 'readingTimer') {
                const { title, favIconUrl, startTime } = message;
                setTabsParams({ title, favIconUrl, startTime });
            }
        });
    }, []);

    return (
        <>
            {state ? (
                <Draggable nodeRef={draggleRef} bounds={bounds} onStart={(event, uiData) => onStart(event, uiData)}>
                    <Card id="reading-timer-dialog" className="w-[350px] bg-gradient-to-r" ref={draggleRef}>
                        <div className="flex justify-end p-1">
                            <Cross1Icon className="m-2 cursor-pointer" onClick={closeDialog}></Cross1Icon>
                        </div>
                        <CardHeader className="pt-0">
                            <CardTitle>Observer Reading Time</CardTitle>
                            <CardDescription>Monitor reading time on Chrome</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            {notifications.map(({ title, description, code, icon }) => (
                                <div className=" flex items-center space-x-4 rounded-md border p-2" key={code}>
                                    {icon}
                                    <div className="flex-1 space-y-1 ml-2s">
                                        <p className="text-sm font-medium leading-none">{title}</p>
                                        <p className="text-sm text-muted-foreground">{description}</p>
                                        <p className="text-sm text-muted-foreground">
                                            <img src={tabsParams?.favIconUrl} alt="favIconUrl" width={64} height={64} />
                                            <span>
                                                Chrome Tabs title: <span className="text-orange-400"> {tabsParams?.title || '-'}</span>
                                            </span>
                                        </p>
                                        <p className="text-sm text-muted-foreground">开始时间：{tabsParams?.startTime || '-'}</p>
                                        <p className="text-sm text-muted-foreground">当前时间：{currentTime}</p>
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
    );
}
