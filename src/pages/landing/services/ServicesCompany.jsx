import * as React from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Button } from "@mui/material";

export default function ServicesCompany() {
	return (
		<div className="cardBox">
			<h2> خدمات شرکتی </h2>

			<div className="cards">
				<div className="card serviceC">
					<h3 className="title one">عرضه و پذیرش شرکت ها</h3>
					<p className="description">
						تأمین مالی به فرآیند تأمین سرمایه موردنیاز برای فعالیت‌های کسب‌وکار،
						خرید تجهیزات و سرمایه‌گذاری گفته می‌شود.
					</p>
					<Button className="button" variant="text" color="error">
						مطالب بیشتر
						<KeyboardArrowLeftRoundedIcon className="icon" />
					</Button>
				</div>

				<div className="card serviceC">
					<h3 className="title two">مشاوره سرمایه گذاری</h3>
					<p className="description">
						یکی از راه‌های جذب سرمایه جدید برای کسب و کارها پذیرش و ورود آنها به
						بازار بورس اوراق بهادار یا فرابورس است
					</p>
					<Button className="button" variant="text" color="error">
						مطالب بیشتر
						<KeyboardArrowLeftRoundedIcon className="icon" />
					</Button>
				</div>

				<div className="card serviceC">
					<h3 className="title three">مشاوره تامین مالی</h3>
					<p className="description">
						مشاوره‌سرمایه گذاری در خصوص یافتن ابزار های جدید اهمیت فراوانی دارد
						تا نقدینگی به سمت مناسبی سوق پیدا کند.
					</p>
					<Button className="button" variant="text" color="error">
						مطالب بیشتر
						<KeyboardArrowLeftRoundedIcon className="icon" />
					</Button>
				</div>
			</div>
		</div>
	);
}
