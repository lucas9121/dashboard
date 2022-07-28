import "./UserList.css"
import { DataGrid } from '@mui/x-data-grid';
import {MdOutlineDeleteOutline} from 'react-icons/md'
import {userRows} from '../../dummyData'

export default function UserList(){
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
                        <button>Edit</button>
                        <MdOutlineDeleteOutline/>
                    </div>
                )
            }
        }
    ];

    return(
        <div className="userList">
            <DataGrid
                rows={userRows}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}