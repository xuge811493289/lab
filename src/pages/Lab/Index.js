import { Tabs } from 'antd';
import React, { Component, Suspense } from 'react';
import Template from './Template'
import TemplateCourse from './TemplateCourse'
import Environment from './Environment'

const TabPane = Tabs.TabPane;
function callback(key) {
  console.log(key);
}
class Lab extends Component{
  render(){
    return (
      <div className="Lab">
        <Tabs defaultActiveKey="template" onChange={callback}>
          <TabPane tab="实验模板" key="template">
            <Template/>
          </TabPane>
          <TabPane tab="实验课程" key="templatecourse">
            <TemplateCourse/>
          </TabPane>
          <TabPane tab="实验环境" key="environment">
            <Environment/>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Lab;

