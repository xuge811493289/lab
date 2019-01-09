import { Tabs } from 'antd';
import React, { Component, Suspense } from 'react';
import ConfigureManger from './ConfigureManger';
import TaocanManger from './TaocanManger';

const TabPane = Tabs.TabPane;
function callback(key) {
  console.log(key);
}
class Lab extends Component{
  render(){
    return (
      <div className="System">
        <Tabs defaultActiveKey="ConfigureManger" onChange={callback}>
          <TabPane tab="实验教程" key="ConfigureManger">
            <ConfigureManger/>
          </TabPane>
          <TabPane tab="技术视频" key="TaocanManger">
            <TaocanManger/>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Lab;
