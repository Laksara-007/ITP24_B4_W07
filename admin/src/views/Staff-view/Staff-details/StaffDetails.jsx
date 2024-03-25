// import List from "../../../components/Lists/List";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getAllStaff } from "../../../api/staff/staffServices";
// import { staffColumns } from "../../../data/dataTable";

// const StaffDetails = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     getAllStaff().then((res)=>{
//       if(!res.success) alert(res.message)
//       else setUsers(res.data)
//     })
//   }, []);

  
//   return (
//     <div className="flex">
//       <div className="flex-[7] w-full">
//         <div className="flex justify-end mt-5 mr-4">
//           <Link to="/staff/add">
//             <button className="w-36 h-10 rounded-sm text-white bg-primary">
//               Add Staff
//             </button>
//           </Link>
//         </div>

        
//           <List
//           response={users}
//           title={<strong style={{ color: 'red' }}>Staff Details</strong>}
//           dataCols={staffColumns}
//           />
        
//       </div>
//     </div>
//   );
// };

// export default StaffDetails;






// import List from "../../../components/Lists/List";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getAllStaff } from "../../../api/staff/staffServices";
// import { staffColumns } from "../../../data/dataTable";

// const StaffDetails = () => {
//   const [users, setUsers] = useState([]);
//   const [originalUsers, setOriginalUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     // Fetch all staff members
//     getAllStaff().then((res)=>{
//       if(!res.success) alert(res.message)
//       else {
//         setUsers(res.data);
//         setOriginalUsers(res.data); // Store original data
//       }
//     });
//   }, []);

//   // Function to filter users based on search term
//   const handleSearch = () => {
//     // If search term is empty, reset to original data
//     if (!searchTerm.trim()) {
//       setUsers(originalUsers);
//       return;
//     }

//     // Filter users based on search term
//     const filteredUsers = originalUsers.filter(user =>
//       user.name && user.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setUsers(filteredUsers);
//   };

//   // Function to clear search
//   const clearSearch = () => {
//     setSearchTerm('');
//     setUsers(originalUsers);
//   };

//   return (
//     <div className="flex">
//       <div className="flex-[7] w-full">
//         <div className="flex justify-end mt-5 mr-4">
//           {/* Search input */}
//           <input
//             type="text"
//             placeholder="Search by name"
//             value={searchTerm}
//             onChange={e => setSearchTerm(e.target.value)}
//           />
//           <button onClick={handleSearch}>Search</button>
//           <button onClick={clearSearch}>Clear</button> {/* Add clear button */}
//           <Link to="/staff/add">
//             <button className="w-36 h-10 rounded-sm text-white bg-primary">
//               Add Staff
//             </button>
//           </Link>
//         </div>

//         <List
//           response={users}
//           title={"Staff Details"}
//           dataCols={staffColumns}
//         />
//       </div>
//     </div>
//   );
// };

// export default StaffDetails;


import List from "../../../components/Lists/List";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllStaff } from "../../../api/staff/staffServices";
import { staffColumns } from "../../../data/dataTable";

const StaffDetails = () => {
  const [users, setUsers] = useState([]);
  const [originalUsers, setOriginalUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch all staff members
    getAllStaff().then((res)=>{
      if(!res.success) alert(res.message)
      else {
        console.log("Original data:", res.data); // Log the original data
        setUsers(res.data);
        setOriginalUsers(res.data); // Store original data
      }
    });
  }, []);

  // Function to filter users based on search term
  const handleSearch = () => {
    // If search term is empty, reset to original data
    if (!searchTerm.trim()) {
      setUsers(originalUsers);
      return;
    }

    // Filter users based on search term
    const filteredUsers = originalUsers.filter(user => {
      const name = user.name ? user.name.toLowerCase() : "";
      const searchTermLower = searchTerm.toLowerCase();
      return name.includes(searchTermLower);
    });
    setUsers(filteredUsers);
  };

  // Function to clear search
  const clearSearch = () => {
    setSearchTerm('');
    setUsers(originalUsers);
  };

  return (
    <div className="flex">
      <div className="flex-[7] w-full">
        <div className="flex justify-end mt-5 mr-4">
          <Link to="/staff/add">
            <button className="w-36 h-10 rounded-sm text-white bg-primary">
              Add Staff
            </button>
          </Link>
        </div>

        <div className="mt-4 mb-2 flex justify-end pr-4">
          {/* Search input within table header */}
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
          <button onClick={clearSearch}>Clear</button>
        </div>

        {/* List component with search functionality */}
        <List
          response={users}
          title={"Staff Details"}
          dataCols={staffColumns}
          searchTerm={searchTerm} // Pass search term to the List component
          setSearchTerm={setSearchTerm} // Pass setSearchTerm function to the List component
        />
      </div>
    </div>
  );
};

export default StaffDetails;
