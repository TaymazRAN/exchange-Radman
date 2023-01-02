import React from 'react'
import Faq from '../../components/faq/Faq';
import Slider from '../../components/slider/Slider';

const Landing = () => {
  return (
		<div>
			<div className="widthFix">
        <Slider />
        <Faq />
			</div>
		</div>
	);
}

export default Landing
