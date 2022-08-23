import { Sidebar } from './sidebar';
import './page1.css';
import { Side1 } from './side1';
export function Page1() {
  return (
    <div className="page1">
      <Sidebar />
      <div className="mainPage1">
        <div className='search'>
            <h4>Adventure Trek</h4>
            <input type="search" placeholder='search'/>
        </div>
        <div className='images'>
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />

        </div>
        <div className="header">
          <h1>Good evening Team</h1>
          <div className="messageBoxes">
            <div>
              <i></i>
              <p>Send Message</p>
            </div>
            <div>
              <i></i>
              <p>Export current</p>
            </div>
          </div>
        </div>
        <p>$44,750.00</p>

        <div className='section'>
          <div>
            <p>Title</p>
            <h3>274</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisici.</p>
          </div>
          <div>
            <p>Title</p>
            <h3>274</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisici.</p>
          </div>
          <div>
            <p>Title</p>
            <h3>274</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisici.</p>
          </div>
        </div>
        <div className="info">
          <div>
          <i class="fa-solid fa-arrow-trend-up"></i>
            <p>This Week</p>
            <p>+64%</p>
          </div>
          <div>
          <i class="fa-solid fa-arrow-trend-down"></i>
            <p>This Week</p>
            <p>+64%</p>
          </div>
          <div>
          <i class="fa-solid fa-arrows-to-dot"></i>
            <p>This Week</p>
            <p>+64%</p>
          </div>
        </div>
      </div>
      <Side1/>
    </div>
  );
}
