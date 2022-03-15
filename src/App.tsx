/* eslint-disable jsx-a11y/label-has-associated-control */
import "antd/dist/antd.css";
import { AgGridReact } from "ag-grid-react";
import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import { render } from "react-dom";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

function App() {
  const [rowData, setRowData] = useState([
    { id: "1", username: "John", password: "123" },
    { id: "2", username: "Felper", password: "123456" },
    { id: "3", username: "João", password: "123456" },
  ]);

  const [columnDefs] = useState([
    { field: "id", sorteable: true },
    { field: "username", sorteable: true, filter: true },
    { field: "password", sorteable: true },
  ]);

  const onFinish = (values: any) => {
    console.log("Success:", values);
    setRowData([...rowData, values]);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const [comentarios, setComentarios] = useState([]);

  return (
    <>
      <header>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 12 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
            <h1>CRUD using Formik, Antd, Ag-Grid and Typescript</h1>
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 6, span: 12 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </header>
      <div className="Content">
        <div
          className="ag-theme-alpine"
          style={{ height: 400, width: 650, margin: `auto` }}
        >
          <AgGridReact rowData={rowData} columnDefs={columnDefs} />
        </div>
      </div>
    </>
  );
}

export default App;
