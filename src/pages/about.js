import React from 'react';
import Test from '../components/Test';
import Layout from '../components/layout';

const about = () => (

    <main>
        <Layout pageTitle="Om">
            <Test name="Mia" age="61"/>
            <h1>Här är om-sidan</h1>
            <h2>Här kommer lite info om...</h2>
        </Layout>
        

    </main>


);

export default about;
