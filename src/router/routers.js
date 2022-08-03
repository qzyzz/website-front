import { lazy } from "react"
const Home = lazy(() => import('@/pages/home/index'))
const Share = lazy(() => import('@/pages/share/index'))
const Projects = lazy(() => import('@/pages/projects/index'))
const Blogs = lazy(() => import('@/pages/blogs/index'))
const Resource = lazy(() => import('@/pages/resource/index'))
const About = lazy(() => import('@/pages/about/index'))
const NotFound=lazy(()=>import('@/components/notFound/index'))
const routers = [
    {
        path: '/home',
        component: Home,
        meta: {
            label: '首页', 
            key: 'home',
            icon:'icon-project-manage'
        }
    },
    {
        path: '/share',
        component: Share,
        meta: {
            label: '个人分享',
            key: 'share',
            icon:'icon-application'
        }
    },
    {
        path: '/projects',
        component: Projects,
        meta: {
            label: '个人项目', 
            key: 'projects',
            icon:'icon-stock-batch'
        }
    },
    {
        path: '/blogs',
        component: Blogs,
        meta: {
            label: '技术交流',
            key: 'blogs',
            icon:'icon-settlement'
        }
    },
    {
        path: '/resource',
        component: Resource,
        meta: {
            label: '资源下载', 
            key: 'resource',
            icon:'icon-srock-inquire'
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            label: '关于',
            key: 'about',
            icon:'icon-settlement'
        }
    },
    {
        path: '/',
        component: Home,
        exact: true,
        Redirect :'/home',
        meta: {
            label: '首页',
            key: 'default'
        }
    },
    {
        path: '*',
        component: NotFound,
        meta: {
            key: 'notFound'
        }
    }
]

export default routers