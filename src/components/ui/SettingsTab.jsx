import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

// eslint-disable-next-line react/prop-types
export default function SettingsTab({ updateAutoplayStatus }) {
    const [isAutoplayChecked, setIsAutoplayChecked] = useState(true);
    const [isInfiniteScrolling, setIsInfiniteScrolling] = useState({});
    const [isReadingTimer, setReadingTimer] = useState({});
    const handleAutoplayToggle = () => {
        const newStatus = !isAutoplayChecked;
        setIsAutoplayChecked(newStatus);
        updateAutoplayStatus(newStatus);
    };
    const openInfiniteScrolling = (e) => {
        if (chrome.storage) {
            chrome.storage.sync.set({ infiniteScrolling: e });
        }
        setIsInfiniteScrolling(e);
    };
    const openReadingTimer = (e) => {
        if (chrome.storage) {
            chrome.storage.sync.set({ readingTimer: e });
        }
        setReadingTimer(e);
    };
    useEffect(() => {
        if (chrome.storage) {
            chrome.storage.sync.get(['infiniteScrolling'], (result) => {
                setIsInfiniteScrolling(result.infiniteScrolling);
            });
            chrome.storage.sync.get(['readingTimer'], (result) => {
                setReadingTimer(result.readingTimer);
            });
        }
    });
    return (
        <Card>
            <CardHeader>
                <CardTitle>Filter By Dark Pattern Types</CardTitle>
                <CardDescription>description</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center space-x-2">
                    <Checkbox id="autoplay" checked={isAutoplayChecked} onCheckedChange={handleAutoplayToggle} />
                    <Label htmlFor="autoplay">Autoplay</Label>
                </div>
            </CardContent>
            <CardContent>
                <div className="flex items-center space-x-2">
                    <Checkbox checked={isInfiniteScrolling} id="infinite-scrolling" onCheckedChange={openInfiniteScrolling} />
                    <Label htmlFor="infinite-scrolling">Infinite Scrolling</Label>
                </div>
            </CardContent>
            <CardContent>
                <div className="flex items-center space-x-2">
                    <Checkbox checked={isReadingTimer} id="reading-timer" onCheckedChange={openReadingTimer} />
                    <Label htmlFor="reading-timer">Reading Timer</Label>
                </div>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
}
