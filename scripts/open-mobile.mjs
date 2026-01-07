/**
 * Mobile Development Preview Script
 * Opens Chrome with a mobile-sized viewport for development testing
 * 
 * Usage: npm run dev:mobile
 */

import { exec } from 'child_process';
import { platform } from 'os';

const MOBILE_WIDTH = 390;  // iPhone 14 width
const MOBILE_HEIGHT = 844; // iPhone 14 height
const DEV_URL = 'http://localhost:3001';

// Chrome paths for different OS
const CHROME_PATHS = {
    win32: [
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
        `${process.env.LOCALAPPDATA}\\Google\\Chrome\\Application\\chrome.exe`,
    ],
    darwin: ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'],
    linux: ['/usr/bin/google-chrome', '/usr/bin/chromium-browser'],
};

function getChromePath() {
    const os = platform();
    const paths = CHROME_PATHS[os] || [];

    // On Windows, just return the first path - exec will handle it
    if (os === 'win32') {
        return `"${paths[0]}"`;
    }
    return paths[0];
}

function openMobileBrowser() {
    const chromePath = getChromePath();

    // Chrome flags for mobile-like viewport
    // --app mode removes browser chrome for cleaner mobile preview
    // --window-size sets the viewport dimensions
    // --window-position positions the window
    const chromeArgs = [
        `--app=${DEV_URL}`,
        `--window-size=${MOBILE_WIDTH},${MOBILE_HEIGHT}`,
        '--window-position=100,50',
        '--disable-extensions',
        '--user-data-dir=./.chrome-mobile-profile', // Separate profile to avoid conflicts
    ].join(' ');

    const command = `${chromePath} ${chromeArgs}`;

    console.log('🚀 Opening mobile preview...');
    console.log(`📱 Viewport: ${MOBILE_WIDTH}x${MOBILE_HEIGHT} (iPhone 14)`);
    console.log(`🌐 URL: ${DEV_URL}`);
    console.log('');

    // Wait a moment for the dev server to start, then open browser
    setTimeout(() => {
        exec(command, (error) => {
            if (error) {
                console.error('❌ Failed to open Chrome. Make sure Chrome is installed.');
                console.error('   Expected path:', chromePath);
                console.error('');
                console.error('   Alternatively, manually open:', DEV_URL);
                console.error('   and use Chrome DevTools (F12) → Toggle Device Toolbar (Ctrl+Shift+M)');
            }
        });
    }, 2000); // 2 second delay to let dev server start
}

openMobileBrowser();
