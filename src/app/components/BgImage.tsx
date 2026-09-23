import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen/index';

const BgImage = () => {
    const cld = new Cloudinary({
    cloud: {
      cloudName: 'xnlxwmb1'
    }
  });
  return (
    <div className="absolute inset-0 overflow-hidden">
          <AdvancedImage className="w-full h-full object-cover opacity-20"
            cldImg={cld.image('lk')}
            alt="A young man focused on drawing with a colored pencil."
          />
        </div>
  )
}

export default BgImage