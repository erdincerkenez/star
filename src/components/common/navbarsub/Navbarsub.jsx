import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function NavbarSub(){
    return(
        <section>
            <div className="header-sub">
             <div className="container">
                 <div className="row">
                     <div className="col-md-6">
                     <ul class="exchange flex-container line-height-sm font-size-13">
                        <li class="flex middle margin-right-lg">
                        <span class="title margin-right-sm">DOLAR</span>
                        <span class="value font-weight-7 font-size-13">8,2586</span>
                        </li>
                        <li class="flex middle margin-right-lg">
                        <span class="title margin-right-sm">EURO</span>
                        <span class="value font-weight-7 font-size-13">9,7441</span>
                        </li>
                        <li class="flex middle margin-right-lg">
                        <span class="title margin-right-sm">ALTIN</span>
                        <span class="value font-weight-7 font-size-13">453.942</span>
                        </li>
                        <li class="flex middle">
                        <span class="title margin-right-sm">BIST100</span>
                        <span class="value font-weight-7 font-size-13">1391.73</span>
                        </li>
                     </ul>
                     </div>
                     <div className="col-md-6">
                     <div class="right-side">
                     <ul class="exchange flex-end line-height-sm font-size-13">
                        <li class="flex middle margin-right-lg margin-right-px">
                        <span class="title margin-right-sm">
                        <FontAwesomeIcon icon="image"/>
                        </span>
                        <span class="font-size-13 line-height-sm font-weight-5">FOTO GALERİ</span>
                        </li>
                        <li class="flex middle margin-right-lg margin-right-px">
                        <span class="title margin-right-sm">
                        <FontAwesomeIcon icon={['fab', 'youtube']} />
                        </span>
                        <span class="font-size-13 line-height-sm font-weight-5">VİDEO GALERİ</span>
                        </li>
                        <li class="flex middle margin-right-lg margin-right-px">
                        <span class="title margin-right-sm">
                        <FontAwesomeIcon icon="tv"/>
                        </span>
                        <span class="font-size-13 line-height-sm font-weight-5">CANLI YAYIN</span>
                        </li>
                        <li class="flex middle margin-right-lg">
                        <ul class=" flex-end-in social-media center font-size-16">
                            <li class="share-header">
                               <i class="icon icon-facebook background-black radius-circle font-size-9">
                                  <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                               </i>
                            </li>
                            <li class="share-header">
                               <i class="icon icon-facebook background-black radius-circle font-size-9">
                                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                               </i>
                            </li>
                            <li class="share-header">
                            <i class="icon icon-facebook background-black radius-circle font-size-9">
                               <FontAwesomeIcon icon={['fab', 'instagram']} />
                            </i>
                            </li>
                            <li class="share-header">
                            <i class="icon icon-facebook background-black radius-circle font-size-9">
                               <FontAwesomeIcon icon={['fab', 'youtube']} />
                            </i>
                            </li>
                        </ul>
                        </li>
                        <li class="flex middle">
                        <FontAwesomeIcon icon="search"/>
                        </li>
                     </ul>
                    </div>
                     </div>
                 </div>
             </div>
             </div>
        </section>
         )
}

export default NavbarSub;
