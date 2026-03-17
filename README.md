# 猴王阿伯晨的小说网站

一个极简的小说展示网站。

## 如何添加新章节

1. 在 `chapters/` 文件夹中创建新的 `.md` 文件，例如 `chapter-002.md`
2. 打开 `script.js`，在 `chapters` 数组中添加新章节信息：

```javascript
const chapters = [
    {
        id: 'chapter-002',
        title: '第二章：标题',
        date: '2026-03-18',
        file: 'chapters/chapter-002.md'
    },
    // ... 其他章节
];
```

**注意：** 新章节要放在数组最前面，这样目录会按时间倒序显示。

## 部署到 GitHub Pages

1. 在 GitHub 创建新仓库，例如 `my-novel`
2. 上传 `novel-site` 文件夹中的所有文件
3. 进入仓库 Settings → Pages
4. Source 选择 `main` 分支，文件夹选择 `/ (root)`
5. 保存后等待几分钟，你的网站就可以通过 `https://你的用户名.github.io/my-novel/` 访问了

## 文件结构

```
novel-site/
├── index.html      # 首页（目录）
├── chapter.html    # 章节阅读页
├── style.css       # 样式
├── script.js       # 功能逻辑
├── chapters/       # 小说内容
│   ├── chapter-001.md
│   ├── chapter-002.md
│   └── ...
└── README.md       # 说明文档
```

## 写作格式

使用 Markdown 格式写作，支持：

- 标题：`# 一级标题` `## 二级标题`
- 段落：空行分隔
- 斜体：`*文字*`
- 粗体：`**文字**`
- 分隔线：`---`
