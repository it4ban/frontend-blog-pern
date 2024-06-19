import Button from '../Button';
import Container from '../Container';

const Header = () => {
	const isAuth = false;

	const onClickExit = () => {};

	return (
		<div className="bg-white py-3 border-solid border-b border-gray-200 mb-7">
			<Container>
				<div className="flex justify-between items-center">
					<a className="bg-black text-white font-bold uppercase rounded-md px-3 leading-9 tracking-wider" href="/">
						<div>PERN BLOG</div>
					</a>
					<div className="*:ml-3">
						{isAuth ? (
							<>
								<a href="/posts/create">
									<Button variant={'filled'} bgColor={'blue'}>
										Написать статью
									</Button>
								</a>
								<Button onClick={onClickExit} variant={'filled'} bgColor={'red'}>
									Выйти
								</Button>
							</>
						) : (
							<>
								<a href="/login">
									<Button variant={'outlined'} bgColor={'white'}>
										Войти
									</Button>
								</a>
								<a href="/register">
									<Button variant={'filled'} bgColor={'blue'}>
										Зарегистрироваться
									</Button>
								</a>
							</>
						)}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Header;
