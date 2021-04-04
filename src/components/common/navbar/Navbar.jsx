import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar(){
    return (
        <section>
            <div className="container">
            <div class="wrapper flex between middle">
            <ul class="flex-container space-between font-size-10">
                 <li className="flex-item"><a>SON DAKİKA</a></li>
                  <li className="flex-item"><a>GÜNCEL</a></li>
                  <li className="flex-item"><a>DÜNYA</a></li>
                  <li className="flex-item"><a>EKONOMİ</a></li>
                  <li className="flex-item"><a>SPOR</a></li>
                  <li className="flex-item"><a>YAŞAM</a></li>
                  <li className="flex-item"><a>BİLİM-TEKNOLOJİ</a></li>
                  <li className="flex-item"><a>AÇIK GÖRÜŞ</a></li>
                  <li className="flex-item"><a>YAZARLAR</a></li>
              </ul>
            </div>
            </div>
        </section>
    )
}

export default Navbar;