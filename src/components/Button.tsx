'use client';

//import Link from 'next/link';

type ButtonStyle = 'primary' | 'secondary' | 'success' | 'danger' | 'unstyled';

/*type ButtonLinkStyleOptions = {
	bgColor: string;
	color: string;
};*/

/*type ButtonOptions = {
	label: string;
	style: ButtonStyle;
	linkStyle?: ButtonLinkStyleOptions;
	fromX?: number;
	fromY?: number;
	page?: number;
	url?: string;
};*/

export default function Button(label: string, style: ButtonStyle = 'unstyled') {
	switch(style) {
	case 'primary':
		return (
			<button className="btn bg-primary-main text-white hover:animate-glow-primary-hover active:animate-glow-primary-active">
				{label}
			</button>
		);

	case 'secondary':
		return (
			<button className="btn bg-secondary-main text-white transition-all hover:bg-secondary-700 active:bg-secondary-600">
				{label}
			</button>
		);

	case 'success':
		return (
			<button className="btn bg-green-700 text-white transition-all hover:bg-green-600 active:bg-green-800">
				{label}
			</button>
		);

	case 'danger':
		return (
			<button className="btn bg-red-700 text-white transition-all hover:bg-red-600 active:bg-red-800">
				{label}
			</button>
		);

	default:
		return <button className="btn">
			{label}
		</button>;
	}
}
