/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable jsx-a11y/label-has-associated-control */
import "antd/dist/antd.css";
import { AgGridReact } from "ag-grid-react";
import { Formik, useFormik } from "formik";
import {
  Form,
  Input,
  InputNumber,
  Checkbox,
  SubmitButton,
  ResetButton,
} from "formik-antd";
import { useEffect, useState } from "react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

interface gridValues {
  username: string;
  password: string;
}

function App() {
  const [rowData, setRowData] = useState([]);
  const [columnDefs] = useState([
    { field: "username", filter: true, width: 200 },
    { field: "email", width: 200 },
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

  useEffect(() => {
    console.log("rowData", rowData);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(function (respostaDaPagina) {
        return respostaDaPagina.json();
      })
      .then(function (respostaDaPaginaCompleta) {
        setRowData(respostaDaPaginaCompleta);
      });
  }, []);

  const handleSubmit = (values: any) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <>
      <header>
        <Formik
          initialValues={{ firstName: "", age: 20, newsletter: false }}
          render={() => (
            <Form>
              {/* every formik-antd component must have the 'name' prop set: */}
              <Input name="firstName" placeholder="First Name" />
              {/* the rest of the api stays as is */}
              <InputNumber name="age" min={0} />
              <Checkbox name="newsletter">Newsletter</Checkbox>
              <SubmitButton>Enviar</SubmitButton>
              <ResetButton>Limpar</ResetButton>
            </Form>
          )}
          onSubmit={handleSubmit}
        />
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
