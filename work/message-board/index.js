let articles = []; // 保存所有文章

// 格式化時間節點，轉變成可讀的時間
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
}

// 初始化文章
function outputArticles(articles) {
    const articleAll = document.querySelector('.article-all');
    articleAll.innerHTML = ''; // 清空文章
    articles.forEach(article => {
        let messagesHTML = ''; // 存文章的留言
        article.reply.forEach(reply => {
            messagesHTML += `
                <div class="message">
                    <span class="user-id">user: </span>
                    <span class="user-text">${reply.userText}</span>
                    <span class="message-time">${formatTimestamp(reply.timestamp)}</span>
                </div>`;
        });

        const noMessage = article.reply.length === 0 ? '' : 'hidden'; 
        // 判斷文章內是否有留言，有的話隱藏沒留言的提示
        articleAll.innerHTML += `
        <div class="article" data-article-id="${article.id}"> <!-- 文章ID -->
            <div class="article-top">
            <span class="text-h1">${article.title}</span>
            <span class="artical-time">${formatTimestamp(article.timestamp)}</span>
            </div>
            <div class="auther">發文者:</div>
            <hr>
            <div class="content">${article.content}</div>
            <hr>
            <div class="text-box">
                <input type="text" class="input-text" placeholder="留下心情...">
                <button class="add-text" data-article-id="${article.id}">送出</button>
            </div>
            <div class="message-all-box">
                <div class="text-h2">留言:</div>
                <div class="no-message ${noMessage}">目前還沒有任何留言ㄛ!</div>
                <div class="message-all">
                    ${messagesHTML} <!-- 留言渲染 -->
                </div>
            </div>
        </div>`;
    });
}

// 新增文章事件
const postItBtn = document.querySelector('.post-it');
postItBtn.addEventListener('click', () => {
    const titleInput = document.querySelector('.title');
    const newContentInput = document.querySelector('.new-content');
    const title = titleInput.value.trim();
    const content = newContentInput.value.trim();
    if (title !== '' && content !== '') {
        const id = articles.length + 1;
        const timestamp = Date.now(); // 目前時間建立
        const newArticle = {
            id: id,
            title: title,
            content: content,
            timestamp: timestamp, // 抓文章時間
            reply: [] // 初始化新文章的留言
        };

        articles.push(newArticle);
        outputArticles(articles);
        // 清空输入
        titleInput.value = '';
        newContentInput.value = '';
    }
});

// 新增留言事件
document.addEventListener('click', (event) => {
    printText(event);
});

// !!!重要，要先抓登入者的資訊，不然吃不到資料
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

function printText(event) {
    if (event.target.classList.contains('add-text')) {
        const articleId = event.target.dataset.articleId;
        const inputText = event.target.parentElement.querySelector('.input-text');
        const noMessage = event.target.parentElement.parentElement.querySelector('.no-message');
        const text = inputText.value.trim();
        
        if (text !== '' && loggedInUser) {
            // 找文章
            const article = articles.find(article => article.id == articleId);
            if (article) {
                const timestamp = Date.now(); // 目前時間建立
                // 新留言添加到文章留言群组中
                article.reply.push({
                    user: loggedInUser.username, 
                    userText: text,
                    timestamp: timestamp // 留言時間
                });

                const messageAll = event.target.parentElement.parentElement.querySelector('.message-all');
                // 添加留言
                messageAll.innerHTML += `
                <div class="message">
                    <span class="user-id">${loggedInUser.username}:</span>
                    <span class="user-text">${text}</span>
                    <span class="message-time">${formatTimestamp(timestamp)}</span>
                </div>`;
                // 清空
                inputText.value = '';
                noMessage.classList.add('hidden');
            }
        }
    }
};

//載入登入頁的使用資訊
const usernameId=document.querySelector('.username');
document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        const usernameget = document.querySelector('.username');
        usernameget.innerHTML = `${loggedInUser.username}`; 
        console.log(loggedInUser);
    }
});