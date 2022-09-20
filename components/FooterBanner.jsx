import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import img3 from "../public/static/img3.png";
import Image from "next/image";
const FooterBanner = () => {
  return (
    <div className="container-FooterBanner">
      <div className="subcontainer-FooterBanner">
        <p className="msg1-FooterBanner">epic mega sale.</p>
        <p className="msg2-FooterBanner">Upto 50% OFF on Top Brands</p>
        <p className="msg3-FooterBanner">
          Sale Start from 24th Sept to 30 Sept
        </p>
      </div>
      <p className="footer-subimage">
        <Image src={img3} alt="image" height="400" width="700" />
      </p>
    </div>
  );
};
// C:\Users\Abhay Singhal\Desktop\Ecommerce SIte\ecommerce\components\images1\img3.png
//     <div className="footer-banner-container">
//       <div className="banner-desc">
//         <div className="left">
//           <p>{discount}</p>
//           <h3>{largeText1}</h3>
//           <h3>{largeText2}</h3>
//           <p>{saleTime}</p>
//         </div>
//         <div className="right">
//           <p>{smallText}</p>
//           <h3>{midText}</h3>
//           <p>{desc}</p>
//           <Link href={`/product/${product}`}>
//             <button type="button">{buttonText}</button>
//           </Link>
//         </div>

//         {/* <img
//           src={urlFor(image)} className="footer-banner-image"
//         /> */}
//       </div>
//     </div>
//   )
// }

export default FooterBanner;
