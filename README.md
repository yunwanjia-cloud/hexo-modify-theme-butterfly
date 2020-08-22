# hexo-modify-theme-butterfly

Demo:  [云玩家](https://yunist.cn)

一款基于 [hexo-theme-butterfly](https://github.com/jerryc127/hexo-theme-butterfly) 魔改的主題

## 新特性

 所有魔改均可关闭, 并且与原主题兼容. 如果你之前的主题也是 butterfly 然后想要启用魔改主题, 可以直接下载并且添加魔改配置进入原主题 `config`, 即可平滑启用.

* 分类折叠
* 文章图片 CDN 加速
* 设置透明度
* 页脚动态颜色
* 侧边栏分类能够直达文章
* 首次进站弹窗
* ....

## 安装

在你的主题目录下安装

```
git clone https://github.com/cnyist/hexo-modify-theme-butterfly.git
```

## 启用主題

把下载的主题文件夹名字改为 `Butterfly` , 同时修改hexo配置文件`_config.yml`，把主題改为`Butterfly`

```
theme: Butterfly
```

> 如果你没有 pug 以及stylus的渲染器, 请下载安装: npm install hexo-renderer-pug hexo-renderer-stylus --save or yarn add hexo-renderer-pug hexo-renderer-stylus

## 文档

可查看 [hexo-theme-butterfly docs](https://docs.jerryc.me) (原 butterfly 文档) 以及 [hexo-modify-theme-butterfly](https://yunist.cn/hexo/hexo_modify_theme_butterfly/) (魔改 butterfly 文档).