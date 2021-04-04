import React from 'react';
import ImageGallery from 'react-image-gallery';
import Images from '../../../img/slider'


class ImageSliderCustom extends React.Component {

    thumbnailCustomRender = (x) =>{
    
        return(
          <div className="row">
             <div className="col-md-3 stitle">
                <img className="radius-circle sImage" src={`${x.thumbnail}`}></img> 
              </div>
             <div className="col-md-9 stitle">
               <div className="sThumbTitle font-size-15">
                  {x.thumbnailTitle}
               </div>
             </div>

           </div>
           
        
        
          ) 
    }


    render() {
      
        const images = [
            {
              original: Images.slider1,
              thumbnail: Images.slider1,
              originalClass:"sliderCustom",
              renderThumbInner:this.thumbnailCustomRender.bind(Images.slider1),
              description:"Kıtada artan etkimize işaret ettiler: Wing Loong'a karşı Türk SİHA'larını tercih edebilirler",
              thumbnailTitle:"Kıtada artan etkimize işaret ettiler: Wing Loong'a karşı Türk SİHA'larını tercih edebilirler"
            },
            
            {
              original: Images.slider2,
              thumbnail: Images.slider2,
              originalClass:"sliderCustom",
              renderThumbInner:this.thumbnailCustomRender.bind(Images.slider2),
              description:"Ziyaret bir ön hazırlık! 'Türkiye'yi yanlarında tutmaya çalışıyorlar'",
              thumbnailTitle:"Ziyaret bir ön hazırlık! 'Türkiye'yi yanlarında tutmaya çalışıyorlar'"
            },
            {
              original: Images.slider3,
              thumbnail: Images.slider3,
              originalClass:"sliderCustom",
              renderThumbInner:this.thumbnailCustomRender.bind(Images.slider3),
              description:"İHA ile saniye saniye görüntülendi! Türk askerlerini görünce böyle kaçtılar",
              thumbnailTitle:"İHA ile saniye saniye görüntülendi! Türk askerlerini görünce böyle kaçtılar'"
            },
            {
              original: Images.slider1,
              thumbnail: Images.slider1,
              originalClass:"sliderCustom",
              renderThumbInner:this.thumbnailCustomRender.bind(Images.slider1),
              description:"Kıtada artan etkimize işaret ettiler: Wing Loong'a karşı Türk SİHA'larını tercih edebilirler",
              thumbnailTitle:"Kıtada artan etkimize işaret ettiler: Wing Loong'a karşı Türk SİHA'larını tercih edebilirler"
            },
            
            {
              original: Images.slider2,
              thumbnail: Images.slider2,
              originalClass:"sliderCustom",
              renderThumbInner:this.thumbnailCustomRender.bind(Images.slider2),
              description:"Ziyaret bir ön hazırlık! 'Türkiye'yi yanlarında tutmaya çalışıyorlar'",
              thumbnailTitle:"Ziyaret bir ön hazırlık! 'Türkiye'yi yanlarında tutmaya çalışıyorlar'"
            }
              
          ]
          return(
            <section>
                        <div className="container slider-container">
                            <div className="row">
                                <div className="col-md-12">
                                  <ImageGallery items={images} />
                                </div>
                            </div>
                        </div>
                   
            </section>
        )
    }
  }
  

export default ImageSliderCustom;
