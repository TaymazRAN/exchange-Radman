import React, { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchsubMenuByID } from "../../../features/account/subMenuSlice";

const ServicesB3 = () => {
  const id = "7404f7f9-a805-4e0a-a3ed-e4fd2320aa8d";
  const dispatch = useDispatch();
  const data = useSelector((state) => state.subMenu.subMenu);
  useEffect(() => {
    dispatch(fetchsubMenuByID(id));
    // window.location.reload();
  }, []);

  console.log("Pass Data", data);
  return (
    <div className="page">
      <div className="accordionContainer">
        <Accordion className="customAccordion">
          <Typography>
            <div
              className="textBody"
              dangerouslySetInnerHTML={{
                __html: data.body,
              }}
            ></div>
          </Typography>
        </Accordion>
      </div>
    </div>
  );
};

export default ServicesB3;

// import React from "react";

// const ServicesB3 = () => {
//   return (
//     <div className="page">
//       <h2 className="fullWidth"> خدمات کارگزاری </h2>
//       <p>
//         <ul>
//           <li>پذیرش انواع کالا در بورس کالای جهاد به منظور عرضه</li>
//           <li>ارائه خدمات و مشاوره جهت عرضه محصولات در بورس کالای جهاد</li>
//           <li>خرید و فروش انواع محصولات صنعتی، پتروشیمی و فرآورده‌های نفتی</li>
//           <li>پیگیری و پشتیبانی مشتریان جهت تسریع در فرآیند کدگیری</li>
//           <li>
//             خرید محصولات مورد نیاز مشتریان به قیمت مقرون به صرفه در اکثر مواقع
//             توسط تیم خبره معامله‌گران
//           </li>
//           <li>
//             ارائه گزارشات آماری روزانه از معاملات بورس کالا و اطلاعات عرضه
//             محصولات
//           </li>
//           <li>ارائه گزارشات تحلیلی در مورد روند قیمتی محصولات</li>
//         </ul>
//       </p>
//     </div>
//   );
// };

// export default ServicesB3;
