import MainChart from './mainChart';
import './page3.css';
import { Sidebar } from './sidebar';
export default function Page3() {
  return (
    <div className="page3">
      <Sidebar />
      <div className="main3">
        <div className="header3">
          <div>
            <h1>Learn new skills </h1>
            <p>One simple Price, unlimited Skills</p>
          </div>
          <button>+ Explore More</button>
        </div>
        <div className="squares">
          <div>
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h4>PHP Devlopper</h4>
            <p>124 videos</p>
            <div>
              <h6>Learn More</h6>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h4>PHP Devlopper</h4>
            <p>124 videos</p>
            <div>
              <h6>Learn More</h6>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h4>PHP Devlopper</h4>
            <p>124 videos</p>
            <div>
              <h6>Learn More</h6>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h4>PHP Devlopper</h4>
            <p>124 videos</p>
            <div>
              <h6>Learn More</h6>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h4>PHP Devlopper</h4>
            <p>124 videos</p>
            <div>
              <h6>Learn More</h6>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h4>PHP Devlopper</h4>
            <p>124 videos</p>
            <div>
              <h6>Learn More</h6>
            </div>
          </div>
        </div>
        <div className="bottom3">
          <MainChart />
          <div>
            <div className="grid">
              <div>
                <i class="fa-solid fa-square-virus"></i>
                <p>Courses</p>
              </div>
              <div>
                <i class="fa-solid fa-square-virus"></i>
                <p>Courses</p>
              </div>
              <div>
                <i class="fa-solid fa-square-virus"></i>
                <p>Courses</p>
              </div>
              <div>
                <i class="fa-solid fa-square-virus"></i>
                <p>Courses</p>
              </div>
              <div>
                <i class="fa-solid fa-square-virus"></i>
                <p>Courses</p>
              </div>
              <div>
                <i class="fa-solid fa-square-virus"></i>
                <p>Courses</p>
              </div>
              <div>
                <i class="fa-solid fa-square-virus"></i>
                <p>Courses</p>
              </div>
              <div>
                <i class="fa-solid fa-square-virus"></i>
                <p>Courses</p>
              </div>
            </div>
            <button>Transfer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
