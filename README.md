# Bess Zhang · 个人作品集

跨境电商视觉设计作品集，使用 React、Vite、GSAP 和 Motion。包含品牌项目、专题页面、产品详情、活动视觉与创意海报。

## 本地运行

安装 Node.js 22 和 pnpm 10 后，在仓库目录运行：

```sh
pnpm install --frozen-lockfile
pnpm dev
```

成功标志：打开终端显示的本地地址，进入作品集可以看到 PORTFOLIO 首屏。

## 构建和部署

```sh
pnpm exec tsc --noEmit
pnpm build
```

构建产物位于 `dist`。GitHub 仓库 Settings → Pages → Source 选择 GitHub Actions 后，推送 main 自动部署。

成功标志：Actions 中部署任务为绿色，Pages 显示可访问的网站地址。

网站使用相对资源路径和 hash 路由，支持 GitHub Pages 子目录。源码位于 `src`，网页实际使用的图片、视频、字体及简历位于 `public`；未上传原始设计工程、临时文件和依赖目录。

液态交互使用本地引擎，来源和许可见 `src/vendor`。作品素材版权归各自权利人所有。
