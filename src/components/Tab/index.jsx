import PropTypes from 'prop-types';

const Tab = ({ selectedId, tabs, onClick }) => {
	const tabVariant = {
		selected: 'border-b-2 border-solid border-blue-500 text-blue-500',
		unselected: 'border-none text-gray-600',
	};

	return (
		<div className="font-normal text-sm leading-3">
			{tabs && (
				<>
					<div className="flex text-center">
						{tabs.map((tab) => (
							<div
								key={tab.id}
								className={`${
									selectedId == tab.id ? tabVariant.selected : tabVariant.unselected
								} cursor-pointer max-w-80 min-w-24 px-4 py-3`}
								onClick={() => onClick(tab.id)}>
								<div>{tab.label}</div>
							</div>
						))}
					</div>
					<div className="grid grid-cols-12 mt-8 gap-4">
						<div className="col-span-8">
							{tabs.map((tab) => (
								<div key={tab.id} className={`${tab.id == selectedId ? '' : 'hidden'}`}>
									{tab.content}
								</div>
							))}
						</div>
						<div className="col-span-4">312</div>
					</div>
				</>
			)}
		</div>
	);
};

Tab.propTypes = {
	selectedId: PropTypes.number,
	tabs: PropTypes.array,
	onClick: PropTypes.func,
};

export default Tab;
