import "./UserList.css"
import { useState } from "react";
import { Link } from "react-router-dom"
import { DataGrid } from '@mui/x-data-grid';
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { userRows } from '../../dummyData'

export default function UserList(){
    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'username', headerName: 'User', width: 200, renderCell: (params) => {
            return(
                <div className="userListInfo">
                    <img src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return(
                    <div className="userListAction">
                        <Link to={`/user/${params.row.id}`} >
                            <button>Edit</button>
                        </Link>
                        <MdOutlineDeleteOutline onClick={() => handleDelete(params.row.id)} />
                    </div>
                )
            }
        }
    ];

    return(
        <div className="userList">
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}