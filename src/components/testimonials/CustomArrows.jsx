import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CustomPrevButton = ({ onClick }) => {
	return (
		<button className="custom-arrow custom-prev" onClick={onClick}>
			<FontAwesomeIcon icon={faChevronLeft} />
		</button>
	);
};

const CustomNextButton = ({ onClick }) => {
	return (
		<button className="custom-arrow custom-next" onClick={onClick}>
			<FontAwesomeIcon icon={faChevronRight} />
		</button>
	);
};

export { CustomPrevButton, CustomNextButton };

