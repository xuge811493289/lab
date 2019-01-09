import { Tabs } from 'antd';
import React, { Component, Suspense } from 'react';
import CourseGuide from './CourseGuide';
import Video from './Video';

const TabPane = Tabs.TabPane;
function callback(key) {
  console.log(key);
}
class Learninginfos extends Component{
  render(){
    return (
      <div className="Lab">
        <Tabs defaultActiveKey="guide" onChange={callback}>
          <TabPane tab="实验教程" key="guide">
            <CourseGuide/>
          </TabPane>
          <TabPane tab="技术视频" key="video">
            <Video/>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Learninginfos;
