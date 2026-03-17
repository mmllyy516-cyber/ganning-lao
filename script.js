// 章节数据 - 在这里添加新章节
const chapters = [
    {
        id: 'chapter-002',
        title: '第二章：她的秘密',
        date: '2026-03-17',
        file: 'chapters/chapter-002.md'
    },
    {
        id: 'chapter-001',
        title: '第一章：她来了',
        date: '2026-03-17',
        file: 'chapters/chapter-001.md'
    }
];

// 点赞数据存储
const likes = JSON.parse(localStorage.getItem('novel-likes') || '{}');

// 渲染目录
function renderTOC() {
    const list = document.getElementById('chapter-list');
    if (!list) return;
    
    list.innerHTML = chapters.map(ch => `
        <li>
            <a href="chapter.html?id=${ch.id}">
                <span class="chapter-title">${ch.title}</span>
                <span class="chapter-date">${ch.date}</span>
            </a>
        </li>
    `).join('');
}

// 点赞功能
function toggleLike(chapterId) {
    if (!likes[chapterId]) {
        likes[chapterId] = { count: 0, liked: false };
    }
    
    if (likes[chapterId].liked) {
        likes[chapterId].count--;
        likes[chapterId].liked = false;
    } else {
        likes[chapterId].count++;
        likes[chapterId].liked = true;
    }
    
    localStorage.setItem('novel-likes', JSON.stringify(likes));
    updateLikeButton(chapterId);
}

function updateLikeButton(chapterId) {
    const btn = document.querySelector('.like-btn');
    if (!btn) return;
    
    const data = likes[chapterId] || { count: 0, liked: false };
    btn.classList.toggle('liked', data.liked);
    btn.querySelector('.like-count').textContent = data.count;
}

// 获取URL参数
function getUrlParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    renderTOC();
});
