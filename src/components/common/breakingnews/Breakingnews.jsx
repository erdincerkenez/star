import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function BreakingNews(){
    return(
        <section>
        <div className="header-breaking">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <ul class="breaking flex-container line-height-sm font-size-13">
                        <li class="flex middle margin-right-lg">
                            <h3 className="title-1 font-size-16 font-bold">
                            SON <br/>	DAKİKA 
                            </h3> 
                        </li>
                        <li class="flex middle margin-right-lg">
                            <span class="title margin-right-sm time font-size-10 font-weight-7 margin-right-sm color-black line-height-sm padding-sm">
                               15:24 
                            </span>
                            <span class="value font-weight-7 font-size-13 margin-right-md">
                               İçişleri Bakanlığı'ndan denetim açıklaması
                            </span>
                        </li>
                        <li class="flex middle margin-right-lg">
                            <span class="title margin-right-sm time font-size-10 font-weight-7 margin-right-sm color-black line-height-sm padding-sm">
                               15:05
                            </span>
                            <span class="value font-weight-7 font-size-13 margin-right-md">
                            Denizlispor, Fenerbahçe maçının taktiğini çalıştı
                            </span>
                        </li>
                        <li class="flex middle margin-right-lg">
                            <span class="title margin-right-sm time font-size-10 font-weight-7 margin-right-sm color-black line-height-sm padding-sm">
                               15:14 
                            </span>
                            <span class="value font-weight-7 font-size-13 margin-right-md">
                            Piyasaya sürülmek istenen 4 milyon sahte dolar yakalandı
                            </span>
                        </li>
                     </ul>
                 </div>
             </div>
         </div>
         </div>
    </section>
    )
}

export default BreakingNews;