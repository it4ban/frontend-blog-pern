import React from 'react';

import Tab from '../components/Tab';
import Post from '../components/Post';

const tabs = [
	{
		id: 1,
		label: 'Новые',
		content: (
			<Post
				id={1}
				title="Roast the code #1 | Rock Paper Scissors"
				user={{
					avatarUrl:
						'https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png',
					fullName: 'Keff',
				}}
				createdAt={'12 июня 2022 г.'}
				viewCount={123}
				commentsCount={3}
				tags={['react', 'javascript', 'css']}
				isEditable
			/>
		),
	},
	{
		id: 2,
		label: 'Популярные',
		content: (
			<div>
				<h1>Таб 2</h1>
			</div>
		),
	},
];

const Home = () => {
	const [tabId, setTabId] = React.useState(tabs[0].id);

	return (
		<Tab
			tabs={tabs}
			onClick={(id) => {
				setTabId(id);
			}}
			selectedId={tabId}
		/>
	);
};

export default Home;
