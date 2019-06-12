import React, {Component} from 'react';
import {Button, Form, Input} from 'antd';

class App extends Component {
  render() {
    return (
      <div className={"App"}>
        <Form>
          <Form.Item>
            <Input/>
          </Form.Item>
        </Form>
        <Button type={"primary"}>echart test buttom</Button>
      </div>
    );
  }
}

export default App;
