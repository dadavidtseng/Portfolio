//----------------------------------------------------------------------------------------------------
// main.js
//----------------------------------------------------------------------------------------------------

/*
重要概念：

createApp(): Vue 3 建立應用程式的新方式
    .use(): 安裝外掛到Vue應用程式
    .mount(): 將Vue應用程式掛載到DOM元素
 */

// Import Vue 3's createApp function for creating Vue application instance
// 匯入 Vue 3 的 createApp 函數用於建立 Vue 應用程式實例
import {createApp} from 'vue';

// Import the root component of our application
// 匯入我們應用程式的根組件
import App from './App.vue';

// Import router configuration for page navigation
// 匯入路由配置用於頁面導航
import router from './router';

// Import global CSS styles including TailwindCSS
// 匯入全域CSS樣式，包含TailwindCSS
import './assets/css/app.css';

// Import BackToTop plugin for scroll-to-top functionality
// 匯入回到頂部外掛用於滾動到頂部功能
import BackToTop from 'vue-backtotop';

// Import and initialize Feather Icons library
// 匯入並初始化 Feather Icons 圖示庫
const feather = require('feather-icons');
feather.replace();

// Create Vue application instance and configure it
// 建立 Vue 應用程式實例並配置
createApp(App)
    .use(router)                    // Enable Vue Router for navigation
    .use(BackToTop)                 // Enable BackToTop plugin
    .mount('#app');     // Mount the app to DOM element with id="app"

// Theme management: Check stored theme preference
// 主題管理：檢查儲存的主題偏好
const appTheme = localStorage.getItem('theme');

// Apply theme-specific background color to body element
// 將主題特定的背景顏色應用到 body 元素
// Check what is the active theme and change theme when user clicks on the theme button in header.
if (
    appTheme === 'dark' &&
    document.querySelector('body').classList.contains('app-theme')
) {
    document.querySelector('body').classList.add('bg-primary-dark');
} else {
    document.querySelector('body').classList.add('bg-secondary-light');
}
