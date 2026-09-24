import { AdvancedImage, lazyload, responsive } from '@cloudinary/react';
import {format, quality } from '@cloudinary/url-gen/actions/delivery';
import { Cloudinary } from '@cloudinary/url-gen/index';

const BgImage = () => {
    const cld = new Cloudinary({
    cloud: {
      cloudName: 'xnlxwmb1'
    }
  });

  const bgImg = cld.image('lk');
  bgImg.delivery(format('auto')).delivery(quality('auto'))
  return (
    <div className="absolute inset-0 overflow-hidden">
          <AdvancedImage className="w-full h-full object-cover opacity-20"
            cldImg={bgImg}
            alt="A young man focused on drawing with a colored pencil."
            plugins={[
              responsive({ steps: 100 })
            ]} 
          />
        </div>
  )
}

export default BgImage