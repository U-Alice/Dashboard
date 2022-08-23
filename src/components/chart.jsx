import './main.css';
import MainChart from './mainChart';


export function Chart() {
  const data = [
    {
      id: "p12",
      name: 'User Profile',
      status: "Delivered",
      number: 3,
    },
    {
        id: "p12",
        name: 'User Profile',
        status: "Delivered",
        number: 3,
      },
      {
        id: "p12",
        name: 'User Profile',
        status: "Delivered",
        number: 3,
      },
      {
        id: "p12",
        name: 'User Profile',
        status: "Delivered",
        number: 3,
      },
      {
        id: "p12",
        name: 'User Profile',
        status: "Delivered",
        number: 3,
      },
      {
        id: "p12",
        name: 'User Profile',
        status: "Delivered",
        number: 3,
      },
  ];
  return (
    <div className="chartContainer">
      <div className="charts">
        <h3>Burndown Chart</h3>
        <div className="chart">
    <MainChart/>
        </div>
      </div>

      <div className="stories">
        <h3>Sprint Stories</h3>
        {data.map((item) => {
          return (
            <table cellSpacing={0}>
              <tbody>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.status}</td>
                  <td>{item.number}</td>
                  <td><i className="fa-solid fa-ellipsis"></i></td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    </div>
  );
}
