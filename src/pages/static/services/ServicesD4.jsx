import React from "react";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ردیف", flex: 1 },
  { field: "name", headerName: "نام شرکت", flex: 2 },
];

const rows1 = [
  { id: 1, name: "شرکت ملی نفت جهاد" },
  { id: 2, name: "شرکت ملی پخش فرآورده‌های نفتی جهاد" },
  { id: 3, name: "شرکت پالایش نفت آبادان" },
  { id: 4, name: "شرکت پالایش نفت اصفهان" },
  { id: 5, name: "شرکت پالایش نفت بندر عباس" },
  { id: 6, name: "شرکت پالایش نفت بهران" },
  { id: 7, name: "شرکت پالایش نفت تبریز" },
  { id: 8, name: "شرکت پالایش نفت تهران" },
  { id: 9, name: "شرکت پالایش نفت امام خمینی(ره) شازند" },
  { id: 10, name: "شرکت پالایش نفت شیراز" },
  { id: 11, name: "شرکت پالایش گاز ایلام" },
  { id: 12, name: "شرکت پالایش گاز خانگیران" },
  { id: 13, name: "شرکت پالایش نفت کرمانشاه" },
  { id: 14, name: "شرکت پالایش نفت لاوان" },
  { id: 15, name: "مجتمع گازی پارس جنوبی" },
];

const rows2 = [
  { id: 16, name: "شرکت پتروشیمی بندر امام خمینی" },
  { id: 17, name: "شرکت پتروشیمی جم" },
  { id: 18, name: "شرکت پتروشیمی رازی" },
  { id: 19, name: "شرکت پتروشیمی زاگرس" },
  { id: 20, name: "شرکت پتروشیمی فن‌آوران" },
  { id: 21, name: "شرکت پتروشیمی کرمانشاه" },
  { id: 22, name: "شرکت پتروشیمی مبین" },
  { id: 23, name: "شرکت ذوب آهن اصفهان" },
  { id: 24, name: "شرکت زغال سنگ البرز مرکزی" },
  { id: 25, name: "شرکت زغال سنگ کرمان" },
  { id: 26, name: "واحد کک‌سازی و پالایش قطران زرند" },
  { id: 27, name: "شرکت پروده طبس" },
  { id: 28, name: "شرکت پتروشیمی تبریز" },
  { id: 29, name: "شرکت پتروشیمی شازند" },
  { id: 30, name: "شرکت پتروشیمی مبین" },
];

const rows3 = [
  { id: 1, name: "نیروگاه سیکل ترکیبی فارس، شرکت مولد نیروگاهی تجارت فارس" },
  { id: 2, name: "نیروگاه پرند، تولید برق پرند مپنا" },
  { id: 3, name: "نیروگاه زنبق یزد، تعاونی کارکنان نیروگاه یزد" },
  { id: 4, name: "نیروگاه سیکل ترکیبی ارومیه، تدبیرسازان سرآمد" },
  { id: 5, name: "نیروگاه سیکل ترکیبی سبلان، سبلان برق امید" },
  { id: 6, name: "نیروگاه سیکل ترکیبی شریعتی، اندیشه‌سازان بهین سرآمد" },
  { id: 7, name: "نیروگاه سیکل ترکیبی نیشابور، ساینا گستر پردیسان" },
  { id: 8, name: "نیروگاه سیکل سنندج، شرکت تولید نیروی برق سنندج" },
  {
    id: 9,
    name: "نیروگاه سیکل ترکیبی منتظر قائم، شرکت توسعه برق و انرژی سپهر",
  },
  { id: 10, name: "نیروگاه شهید منتظر قائم، شرکت توسعه برق و انرژی سپهر" },
  { id: 11, name: "نیروگاه سیکل ترکیبی خوی، تولید نیروی پرتو شمس تابان" },
];

const rows4 = [
  { id: 12, name: "نیروگاه سیکل‌ ترکیبی گیلان، توسعه مسیر برق گیلان" },
  { id: 13, name: "نیروگاه سیکل‌ ترکیبی‌ قم، پیوند گستر پارس " },
  {
    id: 14,
    name: "نیروگاه شهدای پاکدشت (دماوند)، شرکت تولید نیروی برق دماوند",
  },
  { id: 15, name: "نیروگاه شهید منتظری، پرشین فولاد" },
  { id: 16, name: "نیروگاه کازرون، شرکت ساینا گستر پردیسان" },
  { id: 17, name: "نیروگاه کهنوج، شرکت تولید برق ماهتاب کهنوج" },
  { id: 18, name: "نیروگاه مشهد، افق توسعه انرژی خلیج فارس" },
  { id: 19, name: "نیروگاه سیکل ترکیبی سمنان (قدس)، گهر انرژی سیرجان" },
  { id: 20, name: "نیروگاه کاشان، شرکت ساخت و بهره برداری انرژی" },
  { id: 21, name: "نیروگاه آبادان، تولید نیروی برق آبادان" },
  { id: 22, name: "نیروگاه سلطانیه، شرکت تولید نیروی مرکزی صبا" },
];
const ServicesD4 = () => {
  return (
    <>
      <h2>عرضه‌کنندگان عمده در بورس انرژی ایران</h2>
      <div className="accordionContainer">
        <Accordion className="customAccordion">
          <Typography>
            <div className="customAnswer">
              <h2 className="small">
                حوزه نفت، گاز، پتروشیمی و سایر حامل‌های انرژی
              </h2>
              <div className="page row">
                <div className="split">
                  <div className="dataGridContainer">
                    <DataGrid
                      className="dataGrid"
                      rows={rows1}
                      columns={columns}
                    />
                  </div>
                </div>
                <div className="split">
                  <div className="dataGridContainer">
                    <DataGrid
                      className="dataGrid"
                      rows={rows2}
                      columns={columns}
                    />
                  </div>
                </div>
              </div>
              <h2 className="small">حوزه برق</h2>
              <div className="page row">
                <div className="split">
                  <div className="dataGridContainer small">
                    <DataGrid
                      className="dataGrid"
                      rows={rows3}
                      columns={columns}
                    />
                  </div>
                </div>
                <div className="split">
                  <div className="dataGridContainer small">
                    <DataGrid
                      className="dataGrid"
                      rows={rows4}
                      columns={columns}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Typography>
        </Accordion>
      </div>
    </>
  );
};

export default ServicesD4;
