import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import LoginPage from './routes/Login/login.js';
import PlatForm from './routes/AdminPlatform/platForm.js';
import Second1 from './routes/Daohang/Second1/Second1.js';
import Second2 from './routes/Daohang/Second2/Second2.js';
import Classify from './routes/Pagination/Classify/Classify.js';
import Pwd from './routes/System/Pwd/Pwd.js';
import Audio from './routes/UI/Audio/Audio.js';
import Editor from './routes/UI/Editor/Editor.js';
import Select from './routes/UI/Select/Select.js';
import Upload from './routes/UI/Upload/Upload.js';
import Admin from './routes/user/Admin/Admin.js';
import AdminRole from './routes/user/AdminRole/AdminRole.js';
import UserRole from './routes/user/UserRole/UserRole.js';

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/platform" exact component={PlatForm} />
        <Route path="/daohang" exact component={Second1} />
        <Route path="/daohang/second1" exact component={Second1} />
        <Route path="/daohang/second2" exact component={Second2} />
        <Route path="/pagination" exact component={Classify} />
        <Route path="/pagination/classify" exact component={Classify} />
        <Route path="/system" exact component={Pwd} />
        <Route path="/system/pwd" exact component={Pwd} />
        <Route path="/ui" exact component={Audio} />
        <Route path="/ui/audio" exact component={Audio} />
        <Route path="/ui/editor" exact component={Editor} />
        <Route path="/ui/select" exact component={Select} />
        <Route path="/ui/upload" exact component={Upload} />
        <Route path="/user" exact component={Admin} />
        <Route path="/user/admin" exact component={Admin} />
        <Route path="/user/adminRole" exact component={AdminRole} />
        <Route path="/user/userRole" exact component={UserRole} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;



