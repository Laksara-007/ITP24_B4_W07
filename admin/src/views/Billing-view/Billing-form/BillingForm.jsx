import Form from "../../../components/Forms/form";
import { useLocation } from "react-router-dom";
import { createBilling, updateBilling } from "../../../api/billing/billingServices";
import React from "react";

const formInfo = [
  { key: "Name", name: "billingName", type: "text", required: true },
  { key: "Email", name: "customerEmail", type: "email", required: true },
  { key: "Description", name: "description", type: "text", required: true },
  {
    key: "Phone number",
    name: "billingPhonenumber",
    type: "number",
    required: true,
  },
  { key: "Payment Date", name: "paymentDate", type: "date", required: true },
  { key: "Amount", name: "total", type: "number", required: true },

  //{ key: "Ranking", name: "billingRanking", options: ["LOYALTY", "REGULAR"], type: "select" },
];

const BillingForm = () => { 
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const route = location.pathname.split("/")[1];
    const id = location.pathname.split("/")[3];
    return (
        <div className="flex item-center justify-center">
            <Form
                formInfo={formInfo}
                title={path === "add" ? "CREATE BILLING" : "EDIT BILL"}
                func={
                    route === "billing"
                        ? path === "add"
                            ? createBilling
                            : updateBilling
                        : null
                }
                path={route === "billing" ? "/billing/view" : "/"}
                id={path === "edit" ? id : null}
            />
        </div>
    )
}

export default BillingForm
    


    

