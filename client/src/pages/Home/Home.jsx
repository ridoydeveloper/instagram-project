import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import AuthContext from '../../context/AuthContext';
import Authtemp from '../AuthTemp/Authtemp';
import Cookies from 'js-cookie';
import './Home.scss';

const Home = () => {
  

  // use context

   const { dispatch , user } = useContext(AuthContext);



   


  return (
    <div>
      {/* <Authtemp/> */}

      <TopBar/>


    <div className="home-container">
    <div className="home-wraper">

    <div className="time-line">
        
        <div className="post-card">
        
        <div className="psot-card-header">
            
            <div className="post-user-info">
              <img src="https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-1/297473876_1475083396296780_3259742847252025083_n.jpg?stp=c216.424.1427.1427a_cp0_dst-jpg_s40x40&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGt5zpiv94nDEjrsg9lN62OYGnVpUnPnutgadWlSc-e6zfPFbA6yWB8Yo58o0q0-DMiWVQ4MyUlcOy3zLjgEKmN&_nc_ohc=lz6Rga4hOc0AX-kOt1j&_nc_ht=scontent.fcgp3-2.fna&oh=00_AT99g9Q7RWZVhM9TKgqb3hI7IkU2xrpvXSK3hGcl6OISVQ&oe=62FD5F4D" alt="" />
              <div className="user-details">
                <a href='#' className="user-name">{user.name}</a>
                <span className='location'>Raozan,Chittagong</span>
              </div>

              </div>
            <div className="post-opt-btn">
            <button><svg aria-label="More options" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg></button>

            </div>
            
        </div>


        <div className="post-image">

          <img src="https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/297473876_1475083396296780_3259742847252025083_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGt5zpiv94nDEjrsg9lN62OYGnVpUnPnutgadWlSc-e6zfPFbA6yWB8Yo58o0q0-DMiWVQ4MyUlcOy3zLjgEKmN&_nc_ohc=lz6Rga4hOc0AX-kOt1j&_nc_ht=scontent.fcgp3-2.fna&oh=00_AT96r5GawGnA4VLqO_-cPgYmekah49jXXNMtlV5wEFV8-w&oe=62FEE80F" alt="" />


        </div>

        <div className="timeline-icons">
         <div className="icons-left">

         <a href="#">
          <svg aria-label="Like" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
          </a>

          <a href="#">
          <svg aria-label="Comment" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
          </a>
          <a href="#">
          <svg aria-label="Share Post" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
          </a>
         </div>


         <div className="icon-right">

            <a href="#">
            <svg aria-label="Save" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
            </a>
         </div>


        </div>

        <div className="post-details">
          
          <span className='likes'>250 likes</span>

          <div className="post-content">
           <a href="#">Ridoy</a> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio nemo nam velit ad eum esse voluptatum quas accusamus, laboriosam aliquam!
          </div>

          <div className="post-comments">
            <span>view all 25 comments</span>
          </div>
            
            <div className="post-time">
             <span>2 day ago</span>
            </div>



        </div>

        <div className="post-comments-area">
          <a href="#">
          <svg aria-label="Emoji" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
          </a>
          <input type="text"  placeholder=' Add a comment... '/><button>Post</button>
        </div>
         
        </div>



        <div className="post-card">
        
        <div className="psot-card-header">
            
            <div className="post-user-info">
              <img src="https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/287813754_1164872290978039_6607788903580036256_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGKNLaQbNzDL1CZfoqfDdlOMgbstxVyV-AyBuy3FXJX4ApBPPcMOdJMVUp2jZ6qsoJjk2NRteIm5c1sMQmIcwA9&_nc_ohc=tlrfdSGIgMYAX_I9fCi&_nc_ht=scontent.fcgp3-1.fna&oh=00_AT8Maz_VxkkTUuQZOTvP53sp1tZuum1fNq0idveJ8VzQOQ&oe=62F2859E" alt="" />
              <div className="user-details">
                <a href='#' className="user-name">Ridoy</a>
                <span className='location'>Raozan,Chittagong</span>
              </div>

              </div>
            <div className="post-opt-btn">
            <button><svg aria-label="More options" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg></button>

            </div>
            
        </div>


        <div className="post-image">

          <img src="https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/247390338_1283463572125431_8366245741316628821_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGuNSj-nO2CnTGSZGzGtHpsefyIA8cBPbV5_IgDxwE9tXGw_-hzJou_IlqoCyoi8i14qRGhgZUHehN03KIrH9TV&_nc_ohc=RHOBOnzQeW0AX_A3S1q&_nc_ht=scontent.fcgp3-1.fna&oh=00_AT-IrbgQ7fdR9kWptPjwE1PDq7Rrrchgz79IwyNJy7br9w&oe=62F1808A" alt="" />


        </div>

        <div className="timeline-icons">
         <div className="icons-left">

         <a href="#">
          <svg aria-label="Like" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
          </a>

          <a href="#">
          <svg aria-label="Comment" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
          </a>
          <a href="#">
          <svg aria-label="Share Post" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
          </a>
         </div>


         <div className="icon-right">

            <a href="#">
            <svg aria-label="Save" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
            </a>
         </div>


        </div>

        <div className="post-details">
          
          <span className='likes'>220 likes</span>

          <div className="post-content">
           <a href="#">Ridoy</a> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio nemo nam velit ad eum esse voluptatum quas accusamus, laboriosam aliquam!
          </div>

          <div className="post-comments">
            <span>view all 20 comments</span>
          </div>
            
            <div className="post-time">
             <span>5 day ago</span>
            </div>



        </div>

        <div className="post-comments-area">
          <a href="#">
          <svg aria-label="Emoji" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
          </a>
          <input type="text"  placeholder=' Add a comment... '/><button>Post</button>
        </div>
         
        </div>




        <div className="post-card">
        
        <div className="psot-card-header">
            
            <div className="post-user-info">
              <img src="https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/287813754_1164872290978039_6607788903580036256_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGKNLaQbNzDL1CZfoqfDdlOMgbstxVyV-AyBuy3FXJX4ApBPPcMOdJMVUp2jZ6qsoJjk2NRteIm5c1sMQmIcwA9&_nc_ohc=tlrfdSGIgMYAX_I9fCi&_nc_ht=scontent.fcgp3-1.fna&oh=00_AT8Maz_VxkkTUuQZOTvP53sp1tZuum1fNq0idveJ8VzQOQ&oe=62F2859E" alt="" />
              <div className="user-details">
                <a href='#' className="user-name">Ridoy</a>
                <span className='location'>Raozan,Chittagong</span>
              </div>

              </div>
            <div className="post-opt-btn">
            <button><svg aria-label="More options" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg></button>

            </div>
            
        </div>


        <div className="post-image">

          <img src="https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/241565654_1254765044995284_6263592134673928335_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeF5mNIHJRVghhybJjdK68MkxEpISiBRLrHESkhKIFEusd56-CoxNVvq4Z_Nec2Q1UfzYHB8XZTGrW9TNTL3Xapv&_nc_ohc=IRtteDrs5hEAX9vXD_d&_nc_ht=scontent.fcgp3-2.fna&oh=00_AT-H4lnh-DTqw5018le-UTB1xDIP_tdtBju5-eBeAh80qQ&oe=62F23BB8" alt="" />


        </div>

        <div className="timeline-icons">
         <div className="icons-left">

         <a href="#">
          <svg aria-label="Like" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
          </a>

          <a href="#">
          <svg aria-label="Comment" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
          </a>
          <a href="#">
          <svg aria-label="Share Post" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
          </a>
         </div>


         <div className="icon-right">

            <a href="#">
            <svg aria-label="Save" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
            </a>
         </div>


        </div>

        <div className="post-details">
          
          <span className='likes'>300 likes</span>

          <div className="post-content">
           <a href="#">Ridoy</a> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio nemo nam velit ad eum esse voluptatum quas accusamus, laboriosam aliquam!
          </div>

          <div className="post-comments">
            <span>view all 50 comments</span>
          </div>
            
            <div className="post-time">
             <span>2 day ago</span>
            </div>



        </div>

        <div className="post-comments-area">
          <a href="#">
          <svg aria-label="Emoji" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
          </a>
          <input type="text"  placeholder=' Add a comment... '/><button>Post</button>
        </div>
         
        </div>




      </div>

      <div className="user-info">


 

          <div className="user-info-details">
             
          <div className="user-details">
            
            <img src="https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/287813754_1164872290978039_6607788903580036256_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGKNLaQbNzDL1CZfoqfDdlOMgbstxVyV-AyBuy3FXJX4ApBPPcMOdJMVUp2jZ6qsoJjk2NRteIm5c1sMQmIcwA9&_nc_ohc=tlrfdSGIgMYAX_I9fCi&_nc_ht=scontent.fcgp3-1.fna&oh=00_AT8Maz_VxkkTUuQZOTvP53sp1tZuum1fNq0idveJ8VzQOQ&oe=62F2859E" alt="" />
         
             <div className="user-name">
               
                <div className="username">{user.name}</div>
                <div className="name">Ri Doy</div>
             </div>

            </div>

            <div className="user-details-btn">
              <button>Switch</button>
              </div>

             </div>

              

             <div className="Suggestions-info-details">
             
             <div className="Suggestions-details">
               
          
            
                <div className="Suggestion-name">
                  
                   Suggestions For You
                  
                </div>
   
               </div>
   
               <div className="Suggestion-btn">
                 <button>See All</button>
                 </div>
   
             </div>



             <div className="user-Suggestions-profile">
             
             <div className="user-details-profile">
               
               <img src="https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/297592471_766256578034650_559138790533320975_n.jpg?stp=cp1_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFm62WUXrL_RG6RuyDXpw3ebngiPuReLM1ueCI-5F4szXeEl9B8ojSLTYPCDk3yViNT-X54V_eftD68kJXlUa88&_nc_ohc=hmpQ8Gd0GBcAX8HLs8w&_nc_ht=scontent.fcgp3-2.fna&oh=00_AT8hELgz2K4WN5AE-0foHKnU0x5Eb0AZyrOW_Z0uPVb9hw&oe=62F2162E" alt="" />
            
                <div className="user-id">
                  
                   <div className="username-id">mohammedsani7868</div>
                   <div className="user-id-details">New to Instagram</div>
                </div>
   
               </div>
   
               <div className="follower-btn">
                 <button>Follow</button>
                 </div>
   
                </div>



                <div className="user-Suggestions-profile">
             
             <div className="user-details-profile">
               
               <img src="https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/279040587_540337007692017_1923949127323133110_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEzVUKQgfF3_lPJ10lxAJLZDcs_QDJxqeANyz9AMnGp4G18T6jOBhuXthrLqU8DKOdhvOhU5Vi6i_EOEQgdps9X&_nc_ohc=AEAYjWHjDjwAX-KaU2L&_nc_ht=scontent.fcgp3-2.fna&oh=00_AT-ZFUa_rcN_u9bfUxp90pDjFz-lZ4Xn3CArgMWuZcseZw&oe=62F2A066" alt="" />
            
                <div className="user-id">
                  
                   <div className="username-id">mdriyad3795</div>
                   <div className="user-id-details">New to Instagram</div>
                </div>
   
               </div>
   
               <div className="follower-btn">
                 <button>Follow</button>
                 </div>
   
                </div>




                <div className="user-Suggestions-profile">
             
             <div className="user-details-profile">
               
               <img src="https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/237265795_806828970033531_8729837318172110669_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE3eTjxyIDY3GnoC6u4zEoCxH3nN2laHC7Efec3aVocLgZkhe12OEUPTu-YLp-c-JUNAfkIbfqRFzHUPhduh4Su&_nc_ohc=LsdJo1-8PI8AX8SoJNd&_nc_ht=scontent.fcgp3-2.fna&oh=00_AT8FcypGdkfvF7G29jkh-FCpyQa0YxK6iERq_bBrTlqUpg&oe=62F19D16" alt="" />
            
                <div className="user-id">
                  
                   <div className="username-id">waleed_on_lead</div>
                   <div className="user-id-details">Followed by afransifa + 5 more</div>
                </div>
   
               </div>
   
               <div className="follower-btn">
                 <button>Follow</button>
                 </div>
   
                </div>



                <div className="user-Suggestions-profile">
             
             <div className="user-details-profile">
               
               <img src="https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/290389644_185185623906239_2982527504930090246_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGUq1ef2vi_S7pTikEb5BduFuu1dFCHDbIW67V0UIcNsrw_p_OHJGHgDI36N5C0Gjwk1pdu8hFd524KGyXaeQUx&_nc_ohc=6unwk4OxQ-4AX9ks_bB&tn=sHYkfoPFCwhjwCDe&_nc_ht=scontent.fcgp3-1.fna&oh=00_AT9087Pf4Fa5nBDUsVF_NjO5wYj06MdnFsFYRKoH5Lp0rg&oe=62F2D624" alt="" />
            
                <div className="user-id">
                  
                   <div className="username-id">crush_queen__sara</div>
                   <div className="user-id-details">New to Instagram</div>
                </div>
   
               </div>
   
               <div className="follower-btn">
                 <button>Follow</button>
                 </div>
   
                </div>



                <div className="user-Suggestions-profile">
             
             <div className="user-details-profile">
               
               <img src="https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/295842767_436372401836582_2214797980037123128_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEm2yWFi9fk1aHnx9LYfkhsMy4Ho4PbGlAzLgejg9saULdePexrWC3SX_RjwldtOMSdk_4uzYntMT4EC-ZgOdu2&_nc_ohc=sle8lC7gudwAX-508_2&_nc_ht=scontent.fcgp3-2.fna&oh=00_AT97vx6wfF23adyk_49WmGduuQNPy1BN1mFZ7RELqh2TSA&oe=62F15343" alt="" />
            
                <div className="user-id">
                  
                   <div className="username-id">monika.raisajahan</div>
                   <div className="user-id-details">New to Instagram</div>
                </div>
   
               </div>
   
               <div className="follower-btn">
                 <button>Follow</button>
                 </div>
   
                </div>



                <div className="user-info-footer">
      <ul>
        
        <li><a href="#">About</a></li>
    
        <li><a href="#">Help</a></li>
        <li><a href="#">API</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Terms</a></li>
        
        <li><a href="#">Locations</a></li>
        <li><a href="#">Locations</a></li>
        
        
      </ul>
    
        <span className='user-copy-right-text'>© 2022 Instagram from Meta</span>
      
    </div>
       



                
   
 
      </div>

    </div>
  </div>

</div>
  )
}

export default Home;