import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Tables = () => {
  const rows = [];
  return (
    <TableContainer component={Paper} className="table relative">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Stock ID</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Requested by</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="w-10 object-cover" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell>{row.customer}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>
                <div
                  className={`${
                    row.status === "Approved"
                      ? "bg-[#28D006]"
                      : row.status === "Pending"
                      ? "bg-[#FFFF00]"
                      : "bg-[#D00610]"
                  } rounded-sm w-20 flex items-center justify-center`}
                >
                  <span className="text-sm font-medium text-white">
                    {row.status}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
