import { Tabs } from 'antd';
import React, { Component, Suspense } from 'react';
import School from './School';
import Clazz from './Clazz';
import Teacher from './Teacher';
import Student from './Student';
import Manager from './Manager';

const TabPane = Tabs.TabPane;
function callback(key) {
  console.log(key);
}
class Lab extends Component{
  render(){
    return (
      <div className="Lab">
        <Tabs defaultActiveKey="school" onChange={callback}>
          <TabPane tab="校区管理" key="school">
            <School/>
          </TabPane>
          <TabPane tab="班级管理" key="clazz">
            <Clazz/>
          </TabPane>
          <TabPane tab="教师管理" key="teacher">
            <Teacher/>
          </TabPane>
          <TabPane tab="学生管理" key="student">
            <Student/>
          </TabPane>
          <TabPane tab="管理员管理" key="manager">
            <Manager/>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Lab;

