// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TAB = "Xiesl";
export const SITE_TITLE = "Xiesl 💤";
export const SITE_DESCRIPTION = "Xiesl 的个人主页";
export const DATE_FORMAT = "YYYY-MM-DD";

// User profile information
export const USER_NAME = "Xiesl";
export const USER_AVATAR = "/profile.webp";

// Server and transition settings
export const SERVER_URL = "https://Xiesl-comment.netlify.app/.netlify/functions/comment";


// Some informative text on the site
export const infoTest = {
  tag: "标签：",
  noTag: "无标签",
  tagCard: "标签",
  tagPage: "标签：",
  noCategory: "其他",
  categoryCard: "分类",
  categoryPage: "分类：",
  prevPage: "上一页",
  nextPage: "下一页",
};

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "主页", href: "/", svg: "home", target: "_self" }, // Home page
  { id: "about", text: "关于", href: "/about", svg: "about", target: "_self" }, // About page
  {
    id: "blog",
    text: "博客",
    href: "/blog",
    svg: "blog",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "全部",
        href: "/blog",
        svg: "post",
        target: "_self",
      }, // All blog
      {
        id: "tech",
        text: "技术",
        href: "/blog/categories/技术",
        svg: "heart",
        target: "_self",
      }, // Technology category
      {
        id: "study",
        text: "学习",
        href: "/blog/categories/学习",
        svg: "book",
        target: "_self",
      }, // Study category
      {
        id: "life",
        text: "生活",
        href: "/blog/categories/生活",
        svg: "cube",
        target: "_self",
      }, // Life category
    ],
  }, // Blog page with sub-items
  {
    id: "project",
    text: "项目",
    href: "/project",
    svg: "project",
    target: "_self",
  }, // Projects page
  {
    id: "friend",
    text: "友情链接",
    href: "/friend",
    svg: "friend",
    target: "_self",
  }, // Friends page
  {
    id: "support",
    text: "友情赞助",
    href: "/support",
    svg: "support",
    target: "_self",
  }, // Friends page
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://github.com/Pomelo-Xsl",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "https://space.bilibili.com/535598912?spm_id_from=333.337.0.0",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "bilibili",
  },
  {
    href: "https://www.douyin.com/user/MS4wLjABAAAAS2pbeAfUlY1-k8T7H7B3l_lAls5kliEV21XBmLnh7N8?from_tab_name=main",
    ariaLabel: "Tiktok",
    title: "Tiktok",
    svg: "tiktok",
    target: "_self",
  },
  {
    href: "https://m.weibo.cn/u/7239212055?luicode=10000011&lfid=1076037239212055",
    ariaLabel: "WeiBo",
    title: "WeiBo",
    svg: "weibo",
  }
];