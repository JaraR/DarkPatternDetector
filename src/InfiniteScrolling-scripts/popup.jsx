import { useState, useRef, useEffect } from 'react';
import { BellIcon, Cross1Icon, RocketIcon, StopwatchIcon } from '@radix-ui/react-icons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Draggable from 'react-draggable';

const notifications = [
    {
        title: 'infinite Scrolling',
        code: 'infiniteScrolling',
        description: 'Enable infinite scrolling detection',
        icon: <RocketIcon />,
    },
    // {
    //     title: 'Set the timer',
    //     code: 'readingTime',
    //     description: 'Contorl the scrolling by the timer',
    //     icon: <StopwatchIcon />,
    // },
];

export default function Popup() {
    const [state, setState] = useState(false);
    const [scrollData, setScrollData] = useState(null);
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
        if (chrome.storage) chrome.storage.sync.set({ infiniteScrolling: false });
        setState(false);
    };

    !(function () {
        // 监控用户是否启用了检测
        if (chrome.storage) {
            chrome.storage.sync.get('infiniteScrolling', function (result) {
                setState(result.infiniteScrolling ?? false);
            });
        }
        // 状态变化时更新
        chrome.storage.onChanged.addListener(function (changes) {
            if (changes.infiniteScrolling) {
                setState(changes.infiniteScrolling.newValue);
            }
        });
    })();

    // 滚动条监测
    let originBodyScrollHeight = document.body.scrollHeight;
    function observerScroll() {
        setScrollData({ message: '-', scrollY: window.scrollY });
        const bodyScrollHeight = document.body.scrollHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        // 检查用户是否接近页面底部
        if (scrollPosition >= bodyScrollHeight - 50) {
            setScrollData({ message: 'you have reached the bottom of the page', scrollY: window.scrollY });
            // 检测页面高度是否增加，表示加载了新内容
            if (bodyScrollHeight > originBodyScrollHeight) {
                originBodyScrollHeight = bodyScrollHeight;
                setScrollData({ message: 'Infinite Scrolling detected - new content loaded automatically', scrollY: window.scrollY });
            }
        }
    }

    useEffect(() => {
        if (!state) window.removeEventListener('scroll', observerScroll);
        if (state) window.addEventListener('scroll', observerScroll);
    }, [state]);

    return (
        <>
            {state ? (
                <Draggable nodeRef={draggleRef} bounds={bounds} onStart={(event, uiData) => onStart(event, uiData)}>
                    <Card id="infinite-scrolling-dialog" className="w-[350px] bg-gradient-to-r" ref={draggleRef}>
                        <div className="flex justify-end p-1">
                            <Cross1Icon className="m-2 cursor-pointer" onClick={closeDialog}></Cross1Icon>
                        </div>
                        <CardHeader className="pt-0">
                            <CardTitle>Observer Infinite Scrolling</CardTitle>
                            <CardDescription>Monitor unlimited scrolling on Chrome browser.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            {notifications.map(({ title, description, code, icon }) => (
                                <div className=" flex items-center space-x-4 rounded-md border p-2" key={code}>
                                    {icon}
                                    <div className="flex-1 space-y-1 ml-2s">
                                        <p className="text-sm font-medium leading-none">{title}</p>
                                        <p className="text-sm text-muted-foreground">{description}</p>
                                        <p className="text-sm text-muted-foreground">
                                            scrollY: <span className="text-orange-400">{scrollData?.scrollY || 0}</span>
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Message: <span className="text-orange-400">{scrollData?.message || '-'}</span>
                                        </p>
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
