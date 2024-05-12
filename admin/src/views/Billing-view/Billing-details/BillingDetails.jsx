import List from "../../../components/Lists/List";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBilling } from "../../../api/billing/billingServices";
import { billingColumns } from "../../../data/dataTable";
import BillingSearch from "../Billing-search/BillingSearch";

const BillingDetails = () => {
    const [billingDetails, setBillingDetails] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        getAllBilling().then((res) => {
            if (res.success === true) {
                setBillingDetails(res.data);
            } else {
                alert(res.message);
            }
        });
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredBilling = billingDetails.filter((billing) =>
        Object.values(billing).some(
            (value) =>
                typeof value === "string" &&
                value.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <div className="flex">
            <div className="flex-[7] w-full">
                <div className="flex justify-end mt-5 mr-4">
                    <input
                        type="text"
                        placeholder="Search by Accountant"
                        value={searchQuery}
                        onChange={handleSearch}
                        className="w-64 h-10 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
                    <Link to="/billing/add">
                        <button className="w-36 h-10 rounded-sm text-white bg-primary mr-3 ml-2">
                            Add New Expense
                        </button>
                    </Link>
                    <Link to="/billing/customer-payments">
                        <button className="w-40 h-10 rounded-sm text-white bg-gray-500">
                            Customer Payments
                        </button>
                    </Link>
                </div>

                <List
                    response={filteredBilling}
                    title={"Internal Expenses"}
                    dataCols={billingColumns}
                />
            </div>
        </div>
    );
};

export default BillingDetails;
