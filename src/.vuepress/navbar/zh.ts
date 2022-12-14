import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "快速导航", icon: "navigation", link: "/nav/" },
  { text: "个人博客", icon: "blog", link: "/blog/" },
  { text: "源码阅读", icon: "code", link: "/notes/" },
  { text: "读书笔记", icon: "note", link: "/read/" },
  { text: "问题记录", icon: "ask", link: "/projects/" },
  {
    text: "资源宝库",
    icon: "advance",
    prefix: "/resources/",
    children: [
      {
        text: "书籍资源",
        icon: "animation",
        link: "books/",
      },
      {
        text: "影音资源",
        icon: "play",
        link: "videos/",
      },
    ],
  },
]);
