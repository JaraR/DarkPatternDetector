import React, { useState, useEffect } from 'react';
import * as Switch from '@radix-ui/react-switch';
import './styles.css';

function setChecked(callback) {
    if (!chrome.storage) return callback(false);
    // 从存储中获取状态，设置 Checkbox 初始状态
    chrome.storage.sync.get(['scrollCheckEnabled'], function (result) {
        callback(result.scrollCheckEnabled || false);
    });
}

const SwitchDemo = () => {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        if (chrome.storage) {
            // 从存储中获取状态，设置 Checkbox 初始状态
            chrome.storage.sync.get(['scrollCheckEnabled'], function (result) {
                setChecked(result.scrollCheckEnabled || false);
            });
        }
    });
    return (
        <form>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <label className="Label" htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
                    Infinite Scrolling
                </label>
                <Switch.Root
                    className="SwitchRoot"
                    checked={checked}
                    id="airplane-mode"
                    onCheckedChange={(e) => {
                        chrome.storage && chrome.storage.sync.set({ scrollCheckEnabled: e });
                        setChecked(e);
                    }}>
                    <Switch.Thumb className="SwitchThumb" />
                </Switch.Root>
            </div>
        </form>
    );
};

export default SwitchDemo;
