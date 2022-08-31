export default [

    {
        path: "/admin",
        redirect: "/admin/login",
    },
    {
        path: "/admin/login",
        name: "Login",
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/admin/Login.vue"),
    },
    {
        path: "/admin/dashboard",
        name: "dashboard",
        component: () =>
            import(/* webpackChunkName: "Dashboard" */ "@/views/admin/Dashboard.vue"),
        meta: { requiredAuth: true },

    },
    {
        path: "/admin/articles",
        name: "admin_articles",
        component: () =>
            import(/* webpackChunkName: "Articles" */ "@/views/admin/Articles.vue"),
        meta: { requiredAuth: true },

    },
    {
        path: "/admin/articles/new/:id?",
        name: "new_article",
        component: () =>
            import(/* webpackChunkName: "CreateArticle" */ "@/views/admin/CreateArticle.vue"),
        meta: {
            requiredAuth: true,
            sitemap: {
                // For dynamic routes with multiple parameters,
                // each slug must be an object with a key for
                // each parameter
                slugs: [
                    {
                        id: 1,
                        title: 'Create',
                        category: 'General',
                    },
                ]
            }
        },

    },
    {
        path: "/admin/projects",
        name: "admin_projects",
        component: () =>
            import(/* webpackChunkName: "Projects" */ "@/views/admin/Projects.vue"),
        meta: { requiredAuth: true },

    },
    {
        path: "/admin/projects/new/:id?",
        name: "new_project",
        component: () =>
            import(/* webpackChunkName: "CreateProject" */ "@/views/admin/CreateProject.vue"),
        meta: {
            requiredAuth: true,
            sitemap: {
                // For dynamic routes with multiple parameters,
                // each slug must be an object with a key for
                // each parameter
                slugs: [
                    {
                        id: 1,
                        title: 'Create Project',
                        category: 'General',
                    },
                ]
            }
        },

    },
    {
        path: "/admin/category",
        name: "allcategory",
        component: () =>
            import(/* webpackChunkName: "Categories" */ "@/views/admin/Categories.vue"),
        meta: { requiredAuth: true },

    },
    {
        path: "/admin/category/new/:id?",
        name: "newcategory",
        component: () =>
            import(/* webpackChunkName: "CreateCategory" */ "@/views/admin/CreateCategory.vue"),
        meta: {
            requiredAuth: true,
            sitemap: {
                // For dynamic routes with multiple parameters,
                // each slug must be an object with a key for
                // each parameter
                slugs: [
                    {
                        id: 1,
                        title: 'Create Category',
                        category: 'General',
                    },
                ]
            }
        },

    },
]


