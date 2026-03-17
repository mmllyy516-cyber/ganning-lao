// 章节数据 - 在这里添加新章节
const chapters = [
    {
        id: 'chapter-010',
        title: '第十章：结局，也是开始',
        date: '2026-03-17',
        file: 'chapters/chapter-010.md'
    },
    {
        id: 'chapter-009',
        title: '第九章：见家长',
        date: '2026-03-17',
        file: 'chapters/chapter-009.md'
    },
    {
        id: 'chapter-008',
        title: '第八章：在一起',
        date: '2026-03-17',
        file: 'chapters/chapter-008.md'
    },
    {
        id: 'chapter-007',
        title: '第七章：王建国又来了',
        date: '2026-03-17',
        file: 'chapters/chapter-007.md'
    },
    {
        id: 'chapter-006',
        title: '第六章：她的脆弱',
        date: '2026-03-17',
        file: 'chapters/chapter-006.md'
    },
    {
        id: 'chapter-005',
        title: '第五章：暧昧的边界',
        date: '2026-03-17',
        file: 'chapters/chapter-005.md'
    },
    {
        id: 'chapter-004',
        title: '第四章：她的另一面',
        date: '2026-03-17',
        file: 'chapters/chapter-004.md'
    },
    {
        id: 'chapter-003',
        title: '第三章：海底捞的偶遇',
        date: '2026-03-17',
        file: 'chapters/chapter-003.md'
    },
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
