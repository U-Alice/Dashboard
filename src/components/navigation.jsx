import "./main.css"
export function Navigation() {
  const members = [
    {
      name: 'Mobile Odernsburg',
    },
    {
      name: 'Mobile Odernsburg',
    },
    {
      name: 'Mobile Odernsburg',
    },
    {
      name: 'Mobile Odernsburg',
    },
  ];
  return (
    <div className="navigation">
      <div className="epics">
        <h3>Epics</h3>
        {members.map((item) => {
          return (
            <div className="members">
              <h6>{item.name.split(' ')[0].substring(0, 1)}</h6>
              <div>
                <h2>{item.name}</h2>
                <p>{item.name}</p>
              </div>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
          );
        })}
      </div>
      <div className="statistic">
        <h3>Project Statistics</h3>
        {members.map((item) => {
          return (
            <div className="project">
              <p>Project Progress</p>
                <p>72</p>
              <p>Project</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
