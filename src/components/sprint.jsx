import "./main.css"
export function Overview(){
    const data = [
        {
            title: 'Team overview',
            number: 52
        },      {
            title: 'Team overview',
            number: 52
        },      {
            title: 'Team overview',
            number: 52
        },       {
            title: 'Team overview',
            number: 52
        },       {
            title: 'Team overview',
            number: 52
        }
    ]
    return (
        <div className="overview">
            <h3>Sprint Overview</h3>
            <div className="statContainer">

            {data.map((item)=>{return (
                
                <div className="stat">
            <i class="fa-solid fa-arrow-up-right-dots"></i>
              <h6>Team velocity</h6>
              <h1>52</h1>
            </div>
            )})}
            </div>
        </div>
    )
}