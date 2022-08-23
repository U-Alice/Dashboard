import "./main.css"
export function Team() {
  const data = [
    {
      imgUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'Daniel',
      nbr: '32 participants',
    },
    {
      imgUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'Daniel',
      nbr: '32 participants',
    },
    {
      imgUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'Daniel',
      nbr: '32 participants',
    },
    {
      imgUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'Daniel',
      nbr: '32 participants',
    },
    {
      imgUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'Daniel',
      nbr: '32 participants',
    },
  ];
  return (
    <div>
      <h3>Team Members</h3>
      <div className="team">
        {data.map((item) => {
          return (
            <div className="person">
              <img src={item.imgUrl} alt="profile" />
              <div>
                <h4>{item.name}</h4>
                <p>{item.nbr}</p>
              </div>
              <i className="fa-solid fa-ellipsis"></i>
            </div>
          );
        })}
      </div>
    </div>
  );
}
