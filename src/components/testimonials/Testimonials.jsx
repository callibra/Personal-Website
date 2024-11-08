import React from 'react';
import './Testimonials.css';
import Image1 from '../../assets/a.jpg';
import Image2 from '../../assets/a.jpg';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CustomPrevButton, CustomNextButton } from './CustomArrows';

const Testimonials = () => {
	const data = [
		{
			id: 1,
			image: Image1,
			title: "John Doe",
			subtitle: "Founder @ Entrostat",
			comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae reiciendis deserunt itaque soluta perferendis obcaecati tenetur iure, quidem necessitatibus et, quis praesentium voluptate ipsum sed molestiae culpa ducimus. Veritatis, est!",
		},
		{
			id: 2,
			image: Image2,
			title: "Thomas Doe",
			subtitle: "Frontend Developer @ FNB",
			comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae reiciendis deserunt itaque soluta perferendis obcaecati tenetur iure, quidem necessitatibus et, quis praesentium voluptate ipsum sed molestiae culpa ducimus. Veritatis, est!",
		},
	];

	const items = data.map(({ id, image, title, subtitle, comment }) => (
		<div className="testimonial__item" key={id}>
			<div className="thumb">
				<img src={image} alt={title} className="testimonial__image" />
			</div>
			<h3 className="testimonial__title">{title}</h3>
			<span className="subtitle">{subtitle}</span>
			<div className="comment">{comment}</div>
		</div>
	));

	return (
		<section className="testimonials container section" id='tesimonials'>
			<h2 className="section__title">Testimonials</h2>
			<AliceCarousel
				mouseTracking
				items={items}
				infinite
				autoPlay
				autoPlayInterval={3000}
				disableDotsControls={false}
				renderPrevButton={CustomPrevButton}
				renderNextButton={CustomNextButton}
			/>
		</section>
	);
};

export default Testimonials;
