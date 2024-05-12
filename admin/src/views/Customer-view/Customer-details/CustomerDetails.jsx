import List from "../../../components/Lists/List";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCustomers } from "../../../api/user/userServices";
import { customerColumns } from "../../../data/dataTable";

const CustomerDetails = () => {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        getAllCustomers().then((res) => {
            if (res.success) {
                setUsers(res.data);
            }
        });
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredUsers = users.filter((user) =>
        Object.values(user).some(
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
                        placeholder="Search Customers"
                        value={searchQuery}
                        onChange={handleSearch}
                        className="w-64 h-10 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
                    <Link to="/customer/add">
                        <button className="w-36 h-10 rounded-sm text-white bg-primary ml-2">
                            Create New
                        </button>
                    </Link>
                </div>

                <List
                    response={filteredUsers}
                    title={"Customers"}
                    dataCols={customerColumns}
                />
            </div>
        </div>
    );
};

export default CustomerDetails;
