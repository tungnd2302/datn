import { Layout } from 'antd';
import React from 'react';
import AppHeader from '../../components/common/Header/Index';
import { Outlet } from 'react-router-dom';
import { Form, Formik } from 'formik';

const { Content } = Layout;

function AdminLayoutPage(props) {
    return (
        <Formik>
            <Form>
                <AppHeader />
                <Layout>
                    <Layout style={{ paddingLeft: 80, paddingRight: 80 }}>
                        <Content style={{ margin: '2px 8px 20px', overflow: 'initial' }}>
                            <Outlet />
                        </Content>
                    </Layout>
                </Layout>
            </Form>
        </Formik>
    );
}

export default AdminLayoutPage;