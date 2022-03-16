/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable jsx-a11y/label-has-associated-control */
import "antd/dist/antd.css";
import { AgGridReact } from "ag-grid-react";
import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import { render } from "react-dom";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

interface gridValues {
  username: string;
  password: string;
}

function App() {
  const [rowData, setRowData] = useState([
    { username: "John", password: "123" },
    { username: "Felper", password: "123456" },
  ]);

  const [columnDefs] = useState([
    { field: "username", filter: true, width: 200 },
    { field: "password", width: 200 },
  ]);

  const defaultColDef = {
    // set every column width
    // width: 200,
    // make every column editable
    editable: true,
    // make every column use 'text' filter by default
    filter: "agTextColumnFilter",
    resizable: true,
  };

  const onFinish = (Felper: gridValues) => {
    const inventory = [...rowData];

    function hasUser(Usuarios: gridValues) {
      return Felper.username === "Felper" && Felper.password === "123456";
    }
    // console.log(inventory.find(isCherries));
    console.log(inventory.find(hasUser));
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
          initialValues={{ remember: false }}
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

          {/* <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 6, span: 12 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}

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
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
          />
        </div>
      </div>
    </>
  );
}

export default App;
