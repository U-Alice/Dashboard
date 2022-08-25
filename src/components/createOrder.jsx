import axios from "axios"
import { useState } from "react"
export default function CreateOrder(){
    const [data, setData] = useState({
        "item":"", 
        "quantity": "", 
        "transporterName": ""
    })
    const handleChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }
    const createOrder = async()=>{
        const api = await axios.post("http://localhost:5000/orders/createOrder/1", {
        data
        })
        const response = await api.data
        console.log(response)
    }
    return (
        <div className="team">

        <form className="form" onSubmit={createOrder}>
        
            <input type="text" placeholder="Item"    onChange={handleChange} name="item" required/>
            <input type="text" placeholder="Quantity"   onChange={handleChange} name="quantity" required/>
            <input type="text" placeholder="cargo Company"   onChange={handleChange} name="transporterName" required/>
             <button type="submit">Create Order</button>
        </form>
        </div>
    )
}