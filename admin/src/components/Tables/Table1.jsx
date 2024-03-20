import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const Table1 = ({rows}) => {

    return (
        <TableContainer component={Paper} className="table relative">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Staff ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>NIC</TableCell>
                <TableCell>Position</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows?.map((row) => (
                <TableRow key={row?._id}>
                <TableCell>{row?._id}</TableCell>
                <TableCell> {row?.firstName}</TableCell>
                <TableCell>{row?.nic}</TableCell>
                <TableCell>{row?.position}</TableCell>
                {/* <TableCell>
                    <div
                    className={`${
                        row?.requestStatus
                        === "Approved"
                        ? "bg-[#28D006]"
                        : row?.requestStatus
                        === "Pending"
                        ? "bg-[#FFFF00]"
                        : "bg-[#D00610]"
                    } rounded-sm w-20 flex items-center justify-center`}
                    >
                    <span className="text-sm font-medium text-white">
                        {row?.requestStatus
    }
                    </span>
                    </div>
                </TableCell> */}
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
    };

    export default Table1;