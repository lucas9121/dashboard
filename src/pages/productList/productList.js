import './productList.css'
import { useState } from "react";
import { Link } from "react-router-dom"
import { DataGrid } from '@mui/x-data-grid';
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { productRows } from '../../dummyData'

export default function ProductList() {
    const [data, setData] = useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
            return(
                <div className="productListItem">
                    <img src={params.row.img} alt="" />
                    {params.row.name}
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return(
                    <div className="productListAction">
                        <Link to={`/product/${params.row.id}`} >
                            <button>Edit</button>
                        </Link>
                        <MdOutlineDeleteOutline onClick={() => handleDelete(params.row.id)} />
                    </div>
                )
            }
        }
    ];

    return(
        <div className='productList' >
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