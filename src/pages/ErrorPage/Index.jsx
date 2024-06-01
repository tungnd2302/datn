import { Layout } from 'antd';
import React from 'react';
import AppHeader from '../../components/common/Header/Index';

const { Content } = Layout;

function ErrorPage(props) {
    return (
        <div>
            <AppHeader />
            <Layout>
                <Layout style={{ marginLeft: 200 }}>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <h1>404 - Not Found</h1>
                        <p>Sorry, the page you are looking for does not exist.</p>
                    </Content>
                </Layout>
            </Layout>
        </div>

    );
}

export default ErrorPage;