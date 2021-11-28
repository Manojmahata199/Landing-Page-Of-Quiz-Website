import logo from './logo.svg';
import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownShortWide, faBarChart, faBars, faBell, faCircle, faCircleArrowDown, faCircleDot, faCoffee, faComment, faComments, faCross, faDiceThree, faDigitalTachograph, faGear, faLaptop, faMailBulk, faMobileButton, faMobileScreenButton, faMultiply, faPhone, faUser, faUsers, faVoicemail } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
  
       <div  className="div-1">
          <div>
            <a href="#WebMobi3devent">
              <div className="left-bar-link-1">
                <div className="left-bar-icon">
                  <FontAwesomeIcon icon={faCircleArrowDown}/>
                </div>
                <h6>WebMobi<br/>WebMobi 3d Event<br/>2021</h6>
              </div>
            </a>
            <a href="#AllEvent">
              <div className="left-bar-link">
                 <div className="left-bar-icon">
                  <FontAwesomeIcon icon={faBarChart}/>
                </div>
                <h6>Event</h6>
              </div>
            </a>
            <a href="#YourTeam">
              <div className="left-bar-link">
                <div className="left-bar-icon">
                  <FontAwesomeIcon icon={faUsers}/>
                </div>
                <h6>Team</h6>
              </div>
            </a>
            <a href="#AllAnalyticalResult">
              <div className="left-bar-link">
                <div className="left-bar-icon">
                  <FontAwesomeIcon icon={faDigitalTachograph}/>
                </div>
                <h6>Analytical</h6>
              </div>
            </a>
            <a href="#AllMail">
              <div className="left-bar-link">
                <div className="left-bar-icon">
                  <FontAwesomeIcon icon={faMailBulk}/>
                </div>
                <h6>Result</h6>
              </div>
            </a>
          </div>

       </div>
       <div className="div-2">
           
           <div className="div-4">
              <div className="admin-logo">
                <div className="dashboard-icon">
                <a href="">
                  <FontAwesomeIcon icon={faBars}/>
                </a>
                </div>
                <h1>Admin Dashboard</h1>

              </div>
              <div className="input-div">
                <div className="preview-btn">
                 <h6>previews on:</h6>
                 <a href="#OnMobileview">
                   <FontAwesomeIcon icon={faMobileScreenButton} />
                 </a>
                 <a href="#OnLaptopview">
                   <FontAwesomeIcon icon={faLaptop} />
                 </a>
                </div>
              </div>
           </div>
           <div className="div-5">
             
             <div className="navbar-main">
               <nav>
                  <div className="nav-head">
                      <h1>Event Setting</h1>
                  </div>
                  <hr/>
                  <div className="nav-list">
                    <a href="#general">General</a>
                    <a href="#privacy">Privacy</a>
                    <a href="#features">Features</a>
                    <a href="#customization">Customization</a>
                    <a href="#integration">Integration</a>
                    <a href="#seasion">Seasion Setting</a>
                    <a href="#myplan">My Plan</a>
                  </div>
                </nav>
              </div>
              
             
             <div className="middle-bar">
                  <div className="cross-mark"><button><FontAwesomeIcon icon={faMultiply} /></button></div>
                  <div className="middle-1">
                   <div className="middle-1-i">
                     <h2>Audience Q&A</h2>
                     

                   </div>
                   <div className="input-radio-middle-1">
                      <input type="radio" ></input>
                   </div>
                 </div>
                <hr className="hr-line"/>
                  <div className="middle-2">
                   <div className="middle-2-ii">
                     <h3>Moderation</h3>
                     <h6>Easily Review All question before they go live</h6>

                   </div>
                   <div className="input-radio">
                      <input type="radio" ></input>
                   </div>
                  </div>
                  <div className="middle-2">
                   <div className="middle-2-ii">
                     <h3>labels</h3>
                     <h6>Categorize and filter questions</h6>

                   </div>
                   <div className="input-radio">
                      <input type="radio" ></input>
                   </div>
                </div>
                <div className="middle-2">
                   <div className="middle-2-ii">
                     <h3>Downvotes</h3>
                     <h6>Enable downvoting of questions</h6>

                   </div>
                   <div className="input-radio">
                      <input type="radio" ></input>
                   </div>
                </div>
                <div className="middle-2">
                   <div className="middle-2-ii">
                     <h3>Replies</h3>
                     <h6>Allow participants to reply to or comment on questions</h6>

                   </div>
                   <div className="input-radio">
                      <input type="radio" ></input>
                   </div>
                </div>
                <div className="middle-2">
                   <div className="middle-2-ii">
                     <h3>Anonymous questions</h3>
                     <h6>Let your participants send Anonymous questions</h6>

                   </div>
                   <div className="input-radio">
                      <input type="radio" ></input>
                   </div>
                </div>
                <div className="middle-2-maxi">
                   <div className="middle-2-ii">
                     <h3>Maximum questions length</h3>
                     <h6>show number of votes instead of percentage</h6>
                     <div className="btn-maximum">
                       <button>160</button>
                       <button>240</button>
                       <button>300</button>
                     </div>
                     

                   </div>
                   <div className="input-radio">
                      <input type="radio" ></input>
                   </div>
                </div>
                <div className="middle-2">
                   <div className="middle-2-ii">
                     <h3>Close questions</h3>
                     <h6>prevent the participants from sending <br/>new questions to you event </h6>

                   </div>
                   <div className="input-radio">
                      <input type="radio" ></input>
                   </div>
                </div>
                <div className="submit-btn">
                   <input type="submit" >
                     
                   </input>
                </div>
             </div>

           </div>

       </div>
       <div className="div-3">
         <div className="div-3-list">
           <div className="div-3-icon">
             
              <div className="div-3-icon-link">
              <a href="#UserProfile">
              <FontAwesomeIcon icon={faUser} />
              </a>
              </div>
             
           </div>
           <div className="div-3-icon">
               <div className="div-3-icon-link">
                <a href="#AllNotification">
              
                   <FontAwesomeIcon icon={faBell}/>
                  
                </a>
               </div>
             
           </div>
           <div className="div-3-icon">
             
             <div className="div-3-icon-link">
               <a href="#AllComents">
               <FontAwesomeIcon icon={faComments}/>
               </a>
             </div>
            
           </div>
           <div className="div-3-icon">
             
               <div className="div-3-icon-link">
                <a href="#Setting">
                <FontAwesomeIcon icon={faGear}/>
                </a>
             
               </div>
            
           </div>
          </div>
           
       </div>


  
    </div>
  );
  }
  export default App;