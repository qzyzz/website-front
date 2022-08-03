import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Spin } from 'antd'
import BlogLayout from '@/components/layouts'

function BlogRouter(props) {
    const { routers } = props
    return (
        <Router>
            <BlogLayout>
                <Suspense fallback={<Spin />}>
                    <Switch>
                        {routers.map(item => (
                            <Route
                                key={item.meta.key}
                                path={item.path}
                                component={item.component}
                                exact={item.exact}
                            />
                        ))}
                    </Switch>
                </Suspense>
            </BlogLayout>
        </Router >
    )
}

export default BlogRouter