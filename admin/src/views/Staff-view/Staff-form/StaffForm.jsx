import Form from "../../../components/Forms/form";
import { useLocation } from "react-router-dom";
import { createStaff, updateStaff } from "../../../api/staff/staffServices";

const formInfo = [
    { key: "firstName", name: "firstName", type: "text" },
    { key: "lastname", name: "lastname", type: "text" },
    { key: "dateOfBirth", name: "dateOfBirth", type: "date" },
    { key: "phoneNumber", name: "phoneNumber", type: "number" },
    { key: "address", name: "address", type: "text" },
    { key: "position", name: "position", options: ["ACCOUNTANT","INVENTORY MANAGER","CUSTOMER CARE MANAGER","GUEST SERVICE AGENT","SECURITY"], type: "select" },
    { key: "nic", name: "nic", type: "text" },
];

const StaffForm = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const route = location.pathname.split("/")[1];
    const id = location.pathname.split("/")[3];
    return (
        <div className="flex item-center justify-center">
            <Form
                formInfo={formInfo}
                title={path === "add" ? "CREATE STAFF" : "EDIT STAFF"}
                func={
                    route === "staff"
                        ? path === "add"
                            ? createStaff
                            : updateStaff
                        : null
                }
                path={route === "staff" ? "/staff/view" : "/"}
                id={path === "edit" ? id : null}
            />
        </div>
    )
}

export default StaffForm