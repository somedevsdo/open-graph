import {Still} from 'remotion';
import {PreviewCard} from './PreviewCard';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Still
				id="PreviewCard"
				component={PreviewCard}
				width={1200}
				height={627}
				defaultProps={{
					title: 'Accessible custom focus indicators',
					name: 'Andy Barnes',
				}}
			/>
		</>
	);
};
