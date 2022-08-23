import "./main.css"
export default function PopUp({setStatus}){
    const changeStatus= ()=>{
        setStatus(false)
    }
    return (
        <div className="popup">
         <div>
         <i class="fa-solid fa-xmark close" onClick={changeStatus}></i>
            <h3>Discover  more by joining Our community</h3>
            <button >Join now </button>
         </div>
        </div>
    )
}