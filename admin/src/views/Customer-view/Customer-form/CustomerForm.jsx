import Form from "../../../components/Forms/form";
import { useLocation } from "react-router-dom";
import { createCustomer, updateCustomer } from "../../../api/user/userServices";

const formInfo = [
  { key: "Customer Name", name: "customertName", type: "text" ,required:true},
  { key: "Email", name: "customerEmail", type: "text",required:true },
  { key: "Phone number", name: "customerPhonenumber", type: "number",required:true },
  { key: "Address", name: "customerAddress", type: "text",required:true },
  { key: "Ranking", name: "customerRanking", options: ["LOYAL", "REGULAR"], type: "select" },
];

const CustomerForm = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const route = location.pathname.split("/")[1];
  const id = location.pathname.split("/")[3];
  return (
    <div className="flex item-center justify-center">
      <Form
        formInfo={formInfo}
        title={path === "add" ? "CREATE CUSTOMER" : "EDIT CUSTOMER"}
        func={
          route === "customer"
            ? path === "add"
              ? createCustomer
              : updateCustomer
            : null
        }
        path={route === "customer" ? "/customer/view" : "/"}
        id={path === "edit" ? id : null}
      />
    </div>
  )
}

export default CustomerForm