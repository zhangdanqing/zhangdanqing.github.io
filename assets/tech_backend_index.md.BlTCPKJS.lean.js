import{_ as i,c as a,a1 as n,o as t}from"./chunks/framework.DpGibytC.js";const o=JSON.parse('{"title":"使用 NestJS 搭建后端项目","description":"","frontmatter":{},"headers":[],"relativePath":"tech/backend/index.md","filePath":"tech/backend/index.md"}'),l={name:"tech/backend/index.md"};function h(e,s,p,k,r,d){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="使用-nestjs-搭建后端项目" tabindex="-1">使用 NestJS 搭建后端项目 <a class="header-anchor" href="#使用-nestjs-搭建后端项目" aria-label="Permalink to &quot;使用 NestJS 搭建后端项目&quot;">​</a></h1><p>NestJS 是一个用于构建高效、可靠和可扩展的服务端应用程序的渐进式 Node.js 框架。其模块化架构和对 TypeScript 的广泛使用，使其成为现代后端开发的理想选择。本指南提供了分步骤的教程，帮助您使用 NestJS 搭建一个后端管理系统，涵盖从安装到高级配置的所有内容。</p><hr><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ol><li><a href="#nestjs-简介">NestJS 简介</a></li><li><a href="#搭建-nestjs-项目">搭建 NestJS 项目</a></li><li><a href="#项目结构概览">项目结构概览</a></li><li><a href="#创建模块控制器和服务">创建模块、控制器和服务</a></li><li><a href="#连接数据库">连接数据库</a><ul><li><a href="#使用-typeorm">使用 TypeORM</a></li></ul></li><li><a href="#认证和授权">认证和授权</a></li><li><a href="#api-开发与验证">API 开发与验证</a></li><li><a href="#实现中间件和守卫">实现中间件和守卫</a></li><li><a href="#部署应用">部署应用</a></li><li><a href="#最佳实践">最佳实践</a></li></ol><hr><h2 id="nestjs-简介" tabindex="-1">NestJS 简介 <a class="header-anchor" href="#nestjs-简介" aria-label="Permalink to &quot;NestJS 简介&quot;">​</a></h2><p>NestJS 基于 Express（或可选的 Fastify）构建，默认使用 TypeScript，提供强类型和现代编程范式。它采用了类似 Angular 的模块化架构，使代码高度组织化且易于扩展。</p><h3 id="为什么选择-nestjs" tabindex="-1">为什么选择 NestJS？ <a class="header-anchor" href="#为什么选择-nestjs" aria-label="Permalink to &quot;为什么选择 NestJS？&quot;">​</a></h3><ul><li><strong>TypeScript 支持</strong>：完全支持 TypeScript，包括装饰器和元数据。</li><li><strong>模块化架构</strong>：便于组织和扩展应用。</li><li><strong>内置功能</strong>：包括依赖注入、认证和数据库集成的解决方案。</li><li><strong>广泛的生态系统</strong>：支持 WebSockets、GraphQL、REST API、微服务等。</li></ul><hr><h2 id="搭建-nestjs-项目" tabindex="-1">搭建 NestJS 项目 <a class="header-anchor" href="#搭建-nestjs-项目" aria-label="Permalink to &quot;搭建 NestJS 项目&quot;">​</a></h2><h3 id="前置要求" tabindex="-1">前置要求 <a class="header-anchor" href="#前置要求" aria-label="Permalink to &quot;前置要求&quot;">​</a></h3><p>确保您已安装以下工具：</p><ul><li>Node.js (&gt;= 16.x)</li><li>npm 或 yarn</li></ul><h3 id="安装步骤" tabindex="-1">安装步骤 <a class="header-anchor" href="#安装步骤" aria-label="Permalink to &quot;安装步骤&quot;">​</a></h3><ol><li>全局安装 NestJS CLI：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @nestjs/cli</span></span></code></pre></div><ol start="2"><li>创建新项目：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-backend-project</span></span></code></pre></div><ol start="3"><li>进入项目目录：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-backend-project</span></span></code></pre></div><ol start="4"><li>启动开发服务器：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start:dev</span></span></code></pre></div><p>访问 <code>http://localhost:3000</code> 查看运行中的应用。</p><hr><h2 id="项目结构概览" tabindex="-1">项目结构概览 <a class="header-anchor" href="#项目结构概览" aria-label="Permalink to &quot;项目结构概览&quot;">​</a></h2><p>NestJS 遵循模块化结构，保持代码库的组织性和可扩展性。以下是默认结构的简要说明：</p><div class="language-plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>src/</span></span>
<span class="line"><span>├── app.controller.ts       # 主控制器</span></span>
<span class="line"><span>├── app.module.ts           # 根模块</span></span>
<span class="line"><span>├── app.service.ts          # 主服务</span></span>
<span class="line"><span>├── main.ts                 # 应用程序入口</span></span>
<span class="line"><span>├── modules/                # 自定义模块</span></span>
<span class="line"><span>│   ├── users/              # 示例模块</span></span>
<span class="line"><span>│   │   ├── users.controller.ts</span></span>
<span class="line"><span>│   │   ├── users.module.ts</span></span>
<span class="line"><span>│   │   ├── users.service.ts</span></span></code></pre></div><ul><li><strong>模块</strong>：组织应用功能。</li><li><strong>控制器</strong>：定义端点并处理请求。</li><li><strong>服务</strong>：包含业务逻辑并与数据库交互。</li></ul><hr><h2 id="创建模块、控制器和服务" tabindex="-1">创建模块、控制器和服务 <a class="header-anchor" href="#创建模块、控制器和服务" aria-label="Permalink to &quot;创建模块、控制器和服务&quot;">​</a></h2><h3 id="第一步-生成模块" tabindex="-1">第一步：生成模块 <a class="header-anchor" href="#第一步-生成模块" aria-label="Permalink to &quot;第一步：生成模块&quot;">​</a></h3><p>使用 CLI 生成新模块：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> generate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> users</span></span></code></pre></div><p>这将在 <code>src/modules</code> 目录下创建一个 <code>users</code> 模块文件。</p><h3 id="第二步-生成控制器" tabindex="-1">第二步：生成控制器 <a class="header-anchor" href="#第二步-生成控制器" aria-label="Permalink to &quot;第二步：生成控制器&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> generate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> controller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> users</span></span></code></pre></div><p><code>users.controller.ts</code> 文件将处理传入的 HTTP 请求并将其路由到相应的服务方法。</p><h3 id="第三步-生成服务" tabindex="-1">第三步：生成服务 <a class="header-anchor" href="#第三步-生成服务" aria-label="Permalink to &quot;第三步：生成服务&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> generate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> users</span></span></code></pre></div><p><code>users.service.ts</code> 文件将包含 <code>users</code> 模块的业务逻辑。</p><hr><h2 id="连接数据库" tabindex="-1">连接数据库 <a class="header-anchor" href="#连接数据库" aria-label="Permalink to &quot;连接数据库&quot;">​</a></h2><p>NestJS 可以无缝集成流行的 ORM，如 TypeORM、Sequelize、Prisma 和 Mongoose。</p><h3 id="使用-typeorm" tabindex="-1">使用 TypeORM <a class="header-anchor" href="#使用-typeorm" aria-label="Permalink to &quot;使用 TypeORM&quot;">​</a></h3><h4 id="第一步-安装-typeorm-和数据库驱动" tabindex="-1">第一步：安装 TypeORM 和数据库驱动 <a class="header-anchor" href="#第一步-安装-typeorm-和数据库驱动" aria-label="Permalink to &quot;第一步：安装 TypeORM 和数据库驱动&quot;">​</a></h4><p>对于 MySQL：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @nestjs/typeorm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> typeorm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mysql2</span></span></code></pre></div><h4 id="第二步-配置-typeorm" tabindex="-1">第二步：配置 TypeORM <a class="header-anchor" href="#第二步-配置-typeorm" aria-label="Permalink to &quot;第二步：配置 TypeORM&quot;">​</a></h4><p>编辑 <code>app.module.ts</code> 以包含 TypeORM 配置：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Module } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@nestjs/common&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { TypeOrmModule } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@nestjs/typeorm&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  imports: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    TypeOrmModule.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forRoot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mysql&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      host: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;localhost&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      port: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3306</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      username: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;root&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      password: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;password&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      database: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;my_database&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      autoLoadEntities: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      synchronize: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 生产环境请设置为 false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AppModule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre></div><h4 id="第三步-定义实体" tabindex="-1">第三步：定义实体 <a class="header-anchor" href="#第三步-定义实体" aria-label="Permalink to &quot;第三步：定义实体&quot;">​</a></h4><p>为 <code>User</code> 表创建一个实体：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Entity, Column, PrimaryGeneratedColumn } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;typeorm&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Entity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> User</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PrimaryGeneratedColumn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Column</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Column</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  email</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="第四步-集成-repository" tabindex="-1">第四步：集成 Repository <a class="header-anchor" href="#第四步-集成-repository" aria-label="Permalink to &quot;第四步：集成 Repository&quot;">​</a></h4><p>将 Repository 注入到 <code>users.service.ts</code> 中：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Injectable } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@nestjs/common&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { InjectRepository } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@nestjs/typeorm&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Repository } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;typeorm&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { User } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./user.entity&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Injectable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UsersService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">InjectRepository</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(User)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> readonly</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> userRepository</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Repository</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">User</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ) {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> findAll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">User</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]&gt; {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.userRepository.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><hr><h2 id="认证和授权" tabindex="-1">认证和授权 <a class="header-anchor" href="#认证和授权" aria-label="Permalink to &quot;认证和授权&quot;">​</a></h2><h3 id="安装所需包" tabindex="-1">安装所需包 <a class="header-anchor" href="#安装所需包" aria-label="Permalink to &quot;安装所需包&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @nestjs/passport</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> passport</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> passport-local</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @types/passport-local</span></span></code></pre></div><h3 id="实现认证模块" tabindex="-1">实现认证模块 <a class="header-anchor" href="#实现认证模块" aria-label="Permalink to &quot;实现认证模块&quot;">​</a></h3><ol><li>创建 <code>auth</code> 模块：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> generate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> auth</span></span></code></pre></div><ol start="2"><li><p>使用 Passport.js 创建策略和守卫以保护路由。</p></li><li><p>将策略注入到应用的认证工作流中。</p></li></ol><hr><h2 id="api-开发与验证" tabindex="-1">API 开发与验证 <a class="header-anchor" href="#api-开发与验证" aria-label="Permalink to &quot;API 开发与验证&quot;">​</a></h2><p>NestJS 使用 <code>class-validator</code> 和 <code>class-transformer</code> 库内置验证功能。</p><h3 id="第一步-安装验证库" tabindex="-1">第一步：安装验证库 <a class="header-anchor" href="#第一步-安装验证库" aria-label="Permalink to &quot;第一步：安装验证库&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> class-validator</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> class-transformer</span></span></code></pre></div><h3 id="第二步-应用验证" tabindex="-1">第二步：应用验证 <a class="header-anchor" href="#第二步-应用验证" aria-label="Permalink to &quot;第二步：应用验证&quot;">​</a></h3><p>定义带有验证规则的 DTO（数据传输对象）：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { IsString, IsEmail } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;class-validator&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CreateUserDto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IsString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IsEmail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  email</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在控制器中应用 DTO：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Post</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() createUserDto: CreateUserDto) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.usersService.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(createUserDto);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><hr><h2 id="实现中间件和守卫" tabindex="-1">实现中间件和守卫 <a class="header-anchor" href="#实现中间件和守卫" aria-label="Permalink to &quot;实现中间件和守卫&quot;">​</a></h2><h3 id="中间件" tabindex="-1">中间件 <a class="header-anchor" href="#中间件" aria-label="Permalink to &quot;中间件&quot;">​</a></h3><p>中间件用于在请求到达控制器之前处理请求。例如：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Injectable, NestMiddleware } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@nestjs/common&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Injectable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LoggerMiddleware</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NestMiddleware</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">req</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">next</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`Request...\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="守卫" tabindex="-1">守卫 <a class="header-anchor" href="#守卫" aria-label="Permalink to &quot;守卫&quot;">​</a></h3><p>守卫决定请求是否可以继续到路由处理程序。例如：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Injectable, CanActivate, ExecutionContext } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@nestjs/common&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Injectable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AuthGuard</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CanActivate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  canActivate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">context</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ExecutionContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> request</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> context.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">switchToHttp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> request.headers.authorization </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;my-secret-token&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><hr><h2 id="部署应用" tabindex="-1">部署应用 <a class="header-anchor" href="#部署应用" aria-label="Permalink to &quot;部署应用&quot;">​</a></h2><h3 id="使用-docker-部署" tabindex="-1">使用 Docker 部署 <a class="header-anchor" href="#使用-docker-部署" aria-label="Permalink to &quot;使用 Docker 部署&quot;">​</a></h3><ol><li>创建一个 <code>Dockerfile</code>：</li></ol><div class="language-dockerfile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node:16</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WORKDIR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /app</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">COPY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> package*.json ./</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RUN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> npm install</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">COPY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> . .</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CMD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;npm&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;run&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;start:prod&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><ol start="2"><li>构建并运行 Docker 镜像：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-nest-app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3000:3000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-nest-app</span></span></code></pre></div><hr><h2 id="最佳实践" tabindex="-1">最佳实践 <a class="header-anchor" href="#最佳实践" aria-label="Permalink to &quot;最佳实践&quot;">​</a></h2><ul><li>使用 DTO 进行数据验证和转换。</li><li>在生产环境中避免使用 <code>synchronize: true</code>。</li><li>使用环境变量管理敏感配置。</li><li>使用 <code>@nestjs/common</code> 的 Logger 类实现适当的日志记录。</li><li>为控制器和服务编写单元测试。</li></ul><hr><p>本指南涵盖了使用 NestJS 创建后端管理系统的基础步骤。如需进一步了解，请参考 <a href="https://docs.nestjs.com" target="_blank" rel="noreferrer">NestJS 官方文档</a>。</p>`,96)]))}const g=i(l,[["render",h]]);export{o as __pageData,g as default};