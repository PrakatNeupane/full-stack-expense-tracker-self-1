import React, { useEffect, useState } from "react";
import { Alert, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CustomTable } from "../components/custom-table/CustomTable";
import { ExpensesForm } from "../components/expenses-form/ExpensesForm";
import { MainLayout } from "../components/layout/MainLayout";
import { postExpense } from "../helpers/axiosHelper";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [resp, setResp] = useState({
    status: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user?._id) {
      navigate("/");
    }
  }, [navigate]);

  const handleOnPost = async (frmDt) => {
    console.log("submit", frmDt);
    setIsLoading(true);
    const data = await postExpense(frmDt);
    console.log(data);
    setIsLoading(false);
    setResp(data);
    // call the api
  };

  return (
    <MainLayout>
      <div>Dashboard</div>
      <hr />
      <Row className="mb-5">
        {isLoading && <Spinner variant="primary" animation="border"></Spinner>}
        {resp?.message && (
          <Alert variant={resp.status === "success" ? "success" : "danger"}>
            {" "}
            {resp?.message}{" "}
          </Alert>
        )}
      </Row>

      <ExpensesForm handleOnPost={handleOnPost}></ExpensesForm>
      <CustomTable />
    </MainLayout>
  );
};
