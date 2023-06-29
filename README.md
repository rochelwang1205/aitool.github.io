# aitool.github.io
This is a solution to the [切版任務作業二 - AI 工具王](https://rpg.hexschool.com/task/342/show).

2023/06/09 revised LV.1

2023/05/30 LV.2

2023/05/25 LV.1

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [The following goals](#the-following-goals)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview
- 純手刻，並製作RWD、嘗試應用SASS pattern 7-1檔案分類系統、Swiper及jQuery
- 在課程期限前完成了首頁的切版(含RWD)，調整許多標籤結構上的問題
- 課後調整了定價頁面的結構、細部調整，以及利用jQuery製作收合欄位功能


### Links

- Solution URL: [repo](https://github.com/rochelwang1205/aitool.github.io)
- Live Site URL: [首頁](https://rochelwang1205.github.io/aitool.github.io/home-AI%E5%B7%A5%E5%85%B7%E7%8E%8B.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties, Flexbox
- SASS pattern 7-1
- Swiper,jQuery

### What I learned
- 用keyframe製作箭頭動畫
- 偽元素製作合作廠商滾動軸
- swiper製作推薦卡片之分頁
```css
@keyframes slideCover {
  0% {
      transform: translateY(110%);
  }
  50% {
      transform: translateY(0);
  }
  100% {
      transform: translateY(-100%);
  }
}
/* 隱藏 x 軸 */
/* Hide scrollbar for Chrome, Safari and Opera */
.partner .shadow-inset::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.partner .shadow-inset {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.partner .shadow-inset::after,
.partner .shadow-inset::before {
  content: "";
  position: sticky;
  width: 196px;
  height: 40px;
  top: 0;
}
.partner .shadow-inset::before {
  left: 0;
  padding-right: 196px;
  background: linear-gradient(
    90deg,
    #000000 0%,
    rgba(0, 0, 0, 0.991615) 11.79%,
    rgba(0, 0, 0, 0.967585) 21.38%,
    rgba(0, 0, 0, 0.9296) 29.12%,
    rgba(0, 0, 0, 0.879348) 35.34%,
    rgba(0, 0, 0, 0.818519) 40.37%,
    rgba(0, 0, 0, 0.7488) 44.56%,
    rgba(0, 0, 0, 0.671881) 48.24%,
    rgba(0, 0, 0, 0.589452) 51.76%,
    rgba(0, 0, 0, 0.5032) 55.44%,
    rgba(0, 0, 0, 0.414815) 59.63%,
    rgba(0, 0, 0, 0.325985) 64.66%,
    rgba(0, 0, 0, 0.2384) 70.88%,
    rgba(0, 0, 0, 0.153748) 78.62%,
    rgba(0, 0, 0, 0.0737185) 88.21%,
    rgba(0, 0, 0, 0) 100%
  );
}

.partner .shadow-inset::after {
  right: 0;
  padding-left: 196px;
  background: linear-gradient(
    90deg,
    #000000 0%,
    rgba(0, 0, 0, 0.991615) 11.79%,
    rgba(0, 0, 0, 0.967585) 21.38%,
    rgba(0, 0, 0, 0.9296) 29.12%,
    rgba(0, 0, 0, 0.879348) 35.34%,
    rgba(0, 0, 0, 0.818519) 40.37%,
    rgba(0, 0, 0, 0.7488) 44.56%,
    rgba(0, 0, 0, 0.671881) 48.24%,
    rgba(0, 0, 0, 0.589452) 51.76%,
    rgba(0, 0, 0, 0.5032) 55.44%,
    rgba(0, 0, 0, 0.414815) 59.63%,
    rgba(0, 0, 0, 0.325985) 64.66%,
    rgba(0, 0, 0, 0.2384) 70.88%,
    rgba(0, 0, 0, 0.153748) 78.62%,
    rgba(0, 0, 0, 0.0737185) 88.21%,
    rgba(0, 0, 0, 0) 100%
  );
  transform: rotate(-180deg);
}

.partner .shadow-inset li:not(:last-child) {
  margin-right: 20px;
}

.service .swiper-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
}

.service .swiper-pagination-bullet {
  background-color: #525252;
  opacity: 1;
  margin:0 5px;
}

.service .swiper-pagination-bullet-active {
  width: 12px;
  height: 12px;
  background-color: gray;
  margin:0 5px;
}

/* 讓分頁圓點移至下方 */
.service .swiper-pagination {
  position: static;
  margin-top: 20px;
}

```
```JS
const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 24,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    375: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
```

### The following goals
將商品選單區引入現有的各種小工具(串接API)。

### Useful resources

- [jQuery點擊展開收合](https://www.webdesigns.com.tw/jQuery_flip-panel.asp)
- [clear cache解決網頁無法顯示動畫效果的問題](https://chrome.google.com/webstore/detail/clear-cache/cppjkneekbjaeellbfkmgnhonkkjfpdn)
- [淺談 CSS 設計模式系列-Sass 7-1 Pattern 篇](https://israynotarray.com/css/20200523/116058774/)
## Author

- Website - [Rochel Wang](https://github.com/rochelwang1205)
- Frontend Mentor - [@Rochel Wang](https://www.frontendmentor.io/profile/rochelwang1205)
- Twitter - [@RochelWang4](https://twitter.com/RochelWang4)
