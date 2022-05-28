import React from 'react';
import {AbsoluteFill, Img} from 'remotion';
import './fonts.css';
import avatar from './images/andy.png';

const fontFamily = 'Inter';

const absContainer: React.CSSProperties = {
	backgroundColor: '#1F2132',
	color: '#E8EDF2',
};

const container: React.CSSProperties = {
	flex: 1,
	padding: 100,
	fontFamily,
	// Setting this property allows you to set a linebreak via URL parameter %0A
	whiteSpace: 'pre-wrap',
};

const titleStyle: React.CSSProperties = {
	fontSize: '5.5em',
	marginTop: 0,
	fontWeight: 700,
	marginBottom: 0,
};

const descriptionStyle: React.CSSProperties = {};

const gradientText: React.CSSProperties = {
	fontFamily,
};

const footer: React.CSSProperties = {
	backgroundColor: '#090D18',
	position: 'absolute',
	bottom: 0,
	right: 0,
	left: 0,
	padding: '68px',
};

export const PreviewCard: React.FC<{
	title: string;
	name: string;
}> = ({title, name}) => {
	return (
		<AbsoluteFill style={absContainer}>
			<AbsoluteFill>
				<div style={container}>
					<div style={titleStyle}>
						<span style={gradientText}>{title}</span>
					</div>

					<div style={footer}>
						<Img src={avatar} alt="" />
						<p style={descriptionStyle}>{name} / somedevsdo.com</p>
					</div>
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
