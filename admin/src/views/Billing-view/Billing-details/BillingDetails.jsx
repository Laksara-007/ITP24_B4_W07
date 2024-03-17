import List from "../../../components/Lists/List";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBilling } from "../../../api/billing/billingServices";
import { billingColumns } from "../../../data/dataTable";




const BillingDetails = () => {

    const [BillingDetails, setBillingDetails] = useState([]);

    useEffect(() => {
        getAllBilling().then((res) => {
            if (res.success === true) {
                setBillingDetails(res.data);
            }
            else alert(res.message)
        });
    }, []);

    return (
        <div className="flex">
            <div className="flex-[7] w-full">
                <div className="flex justify-end mt-5 mr-4">
                    <Link to="/billing/add">
                        <button className="w-36 h-10 rounded-sm text-white bg-primary">
                            Add New Expense
                        </button>
                    </Link>
                </div>

                <List
                    response={BillingDetails}
                    title={"Billing"}
                    dataCols={billingColumns}
                />
            </div>
        </div>
    );
};

export default BillingDetails;