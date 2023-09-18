import './assets/scss/styles.scss';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <section className='section-intro'>
          <div className='wrapper-content'>
              <ul className='menu-list flex'>
               <li className='menu-item'>
                <a href='/#'>All</a>
               </li>
               <li className='menu-item'>
                <a href='/#'>Manpower Supply</a>
               </li>
               <li className='menu-item'>
                <a href='/#'>Mobile App / Websites</a>
               </li>
               <li className='menu-item'>
                <a href='/#'>UI/UX Design</a>
               </li>
              </ul>
              <ul className='content-list row flex-wrap'>
                <li className='content-item col-4'>
                  <a href='/#'>
                  <div className='content-img'>
                    <img src="https://tekup.vn/wp-content/uploads/2022/09/image-1.png" alt=""/>
                  </div>
                  <div className='content-card'>
                    <div className='content-info flex justify-content-between'>
                    <h6 className='content-title'>TOI 3D Customize E-commerce</h6>
                    <i className='content-icon'>></i>
                    </div>
                  </div>
                  </a>
                </li>
                <li className='content-item col-4'>
                  <a href='/#'>
                  <div className='content-img'>
                    <img src="https://tekup.vn/wp-content/uploads/2022/09/image.png" alt=""/>
                  </div>
                  <div className='content-card'>
                    <div className='content-info flex justify-content-between'>
                    <h6 className='content-title'>E-learning – Internal training platform</h6>
                    <i className='content-icon'>></i>
                    </div>
                  </div>
                  </a>
                </li>
                <li className='content-item col-4'>
                  <a href='/#'>
                  <div className='content-img'>
                    <img src="https://tekup.vn/wp-content/uploads/2022/08/summer21-thumbnail.png" alt=""/>
                  </div>
                  <div className='content-card'>
                    <div className='content-info flex justify-content-between'>
                    <h6 className='content-title'>Summer 21 Cosmetic E-commerce Platform</h6>
                    <i className='content-icon'>></i>
                    </div>
                  </div>
                  </a>
                </li>
                <li className='content-item col-4'>
                  <a href='/#'>
                  <div className='content-img'>
                    <img src="https://tekup.vn/wp-content/uploads/2022/08/kiva-thumbnail.png" alt=""/>
                  </div>
                  <div className='content-card'>
                    <div className='content-info flex justify-content-between'>
                    <h6 className='content-title'>Kiva – Ambition to digital transformation in the brokerage assiduity</h6>
                    <i className='content-icon'>></i>
                    </div>
                  </div>
                  </a>
                </li>
                <li className='content-item col-4'>
                  <a href='/#'>
                  <div className='content-img'>
                    <img src="	https://tekup.vn/wp-content/uploads/2022/08/boxgo-thumbnail.png" alt=""/>
                  </div>
                  <div className='content-card'>
                    <div className='content-info flex justify-content-between'>
                    <h6 className='content-title'>Boxgo – Professional Warehouse Management</h6>
                    <i className='content-icon'>></i>
                    </div>
                  </div>
                  </a>
                </li>
              </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
