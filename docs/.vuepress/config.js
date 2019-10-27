module.exports = {
    title: 'vuepress exam',
    description: 'react vuperess exam',
    themeConfig: {
        tags:"/tags",
        /*sidebarDepth: 2,*/
        lastUpdated: 'Last Updated',
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        /*repo: 'git@github.com:yangmi0829/vuepress.git',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',*/

        // 以下为可选的编辑链接选项
/*
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',*/
        nav: [
            {
                text:"文章分类",
                link:'/tags/',
                tags:true
            },
            { text: '主页', link: '/' },
            { text: 'css', link: '/css/' },
            { text: 'markdown', link: '/markdown/' },
        ],
        sidebar: [
            {
                title:'css',
                children: [
                    '/css/'
                ]
            },
            {
                title:'markdown',
                children: [
                    '/markdown/'
                ]
            }
        ]
    }
}
