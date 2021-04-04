import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header (){
    return(
        <section>
            <div className="header-main">
                <div className="header-top">
                    <div className="container">
                       <div className="d-flex justify-content-between flex-box">
                          <div className="p-2 bd-highlight">
                             <div className="title font-size-13 margin-bottom-sm">İSTANBUL <span class="font-weight-7 font-size-13 margin-left-sm">9°C / 6°C</span></div>
                             <div class="info font-size-10 italic">Parçalı bulutlu, güneşli</div>
                          </div>
                          <div className="p-2 bd-highlight flex-box">
                          <div class="post">
                            <div class="imgwrap">
                                <div class="photo">
                                   <div class="icon-logo"></div>
                                </div>
                                   <div class="timeAgo">
                                     <div class="date text-center font-size-10 margin-top-sm margin-right-md">30 Mart 2021 Salı /  17 Saban 1442</div>
                                   </div>
                                </div>
                            </div>
                          </div>
                          <div className="p-2 bd-highlight flex-box-new">
                              <div className="post">
                              <div class="imgwrap2">
                              <div className="night-mode">
                                  <div className="float-left ml-3">
                                      <FontAwesomeIcon icon="moon"/>
                                  </div>
                                  <div className="float-left font-size-11 ml-2">Gece Modu
                                  </div>
                              </div>
                              <div class="title font-size-13 margin-bottom-sm">İSTANBUL<span id="spnTName" class="font-weight-7 font-size-13 margin-left-sm">00:11:34</span></div>
                              <div class="info font-size-10 italic"><span id="spnVName">Yatsı</span> kalan süre</div>
                              </div>
                              </div>
                          </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;