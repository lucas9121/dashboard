import "./UserList.css"
import { DataGrid } from '@mui/x-data-grid';
import {MdOutlineDeleteOutline} from 'react-icons/md'

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
      
      const rows = [
        { id: 1, username: 'Jon', avatar: "https://img.pokemondb.net/sprites/trainers/heartgold-soulsilver/pryce.png", email: "Jon@gmail.com", status: "active", transaction: "$120.00" },
        { id: 2, username: 'Lannister', avatar: "https://img.pokemondb.net/sprites/trainers/ruby-sapphire/norman.png", email: "Lannister@gmail.com", status: "active", transaction: "$430.00"},
        { id: 3, username: 'Cheren', avatar: "https://img.pokemondb.net/sprites/trainers/black-white-2/cheren.png", email: "Cheren@gmail.com", status: "active", transaction: "$210.00"},
        { id: 4, username: 'Stark', avatar: "https://img.pokemondb.net/sprites/trainers/firered-leafgreen/giovanni.png", email: "Stark@gmail.com", status: "active", transaction: "$1530.00"},
        { id: 5, username: 'Targaryen', avatar: "https://img.pokemondb.net/sprites/trainers/black-white/clay.png", email: "Targaryen@gmail.com", status: "active", transaction: "$120.00"},
        { id: 6, username: 'Melisandre', avatar: "https://img.pokemondb.net/sprites/trainers/ruby-sapphire/glacia.png", email: "Melisandre@gmail.com", status: "active", transaction: "$1270.00"},
        { id: 7, username: 'Clifford', avatar: "https://img.pokemondb.net/sprites/trainers/diamond-pearl/flint.png", email: "Clifford@gmail.com", status: "active", transaction: "$90.00"},
        { id: 8, username: 'Frances', avatar: "https://img.pokemondb.net/sprites/trainers/firered-leafgreen/lorelei.png", email: "Frances@gmail.com", status: "active", transaction: "$31420.00"},
        { id: 9, username: 'Roxie', avatar: "https://img.pokemondb.net/sprites/trainers/diamond-pearl/candice.png", email: "Roxie@gmail.com", status: "active", transaction: "$6120.00"},
      ];

    return(
        <div className="userList">
            <DataGrid
                rows={rows}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}