import { sidebar } from "vuepress-theme-hope";
import { getChildren } from "./auto-sidebar";
export const zhSidebar = sidebar({
  // 代码笔记的侧边栏
  "/notes/": [
    {
      text: "Java基础",
      icon: "java",
      collapsible: true,
      prefix: "/notes/java/",
      children: getChildren("src/notes/java/"),
    },
    {
      text: "Java虚拟机",
      icon: "engine",
      collapsible: true,
      prefix: "/notes/jvm/",
      children: getChildren("src/notes/jvm/"),
    },
    {
      text: "企业级框架",
      icon: "frame",
      collapsible: true,
      prefix: "/notes/framework/",
      children: getChildren("src/notes/framework/"),
    },
    {
      text: "算法和数据结构",
      icon: "ability",
      collapsible: true,
      prefix: "/notes/algdata/",
      children: getChildren("src/notes/algdata/"),
    },
    {
      text: "数据库",
      icon: "mysql",
      collapsible: true,
      prefix: "/notes/database/",
      children: [""],
    },
    {
      text: "开发必备",
      icon: "tool",
      collapsible: true,
      prefix: "/notes/devtool/",
      children: [""],
    },
    {
      text: "在线技术文档",
      icon: "read",
      collapsible: true,
      prefix: "/notes/cookbook/",
      children: [""],
    },
  ],

  // 读书笔记
  "/read/": [
    {
      text: "电子书单",
      icon: "read",
      collapsible: true,
      link: "/read/ebook/",
    },
    {
      text: "纸质书单",
      icon: "read",
      collapsible: true,
      link: "/read/book/",
    },
  ],

  // 开源项目的侧边栏
  "/projects/": [
    {
      text: "技术教程",
      icon: "guide",
      collapsible: true,
      link: "/projects/techguide/",
    },
    {
      text: "实战项目",
      icon: "workingDirectory",
      collapsible: true,
      link: "/projects/pracprojects/",
    },
    {
      text: "系统设计",
      icon: "shell",
      collapsible: true,
      link: "/projects/systemdesign/",
    },
    {
      text: "工具类库",
      icon: "module",
      collapsible: true,
      link: "/projects/toollibrary/",
    },
  ],
});
