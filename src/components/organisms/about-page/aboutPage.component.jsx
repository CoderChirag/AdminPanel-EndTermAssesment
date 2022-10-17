import { useState } from 'react';
import {
	Box,
	Typography,
	TextField,
	Button,
	CircularProgress,
} from '@mui/material';
import { Link } from 'react-router-dom';

import { createNewData } from '../../../utils/firebase/data/data.util';

const AboutPage = () => {
	const [display, setDisplay] = useState('none');

	const createData = async () => {
		setDisplay('block');
		const data = {
			fullName: document.getElementById('fullName').value,
			email: document.getElementById('email').value,
			message: document.getElementById('message').value,
		};
		console.log(data);
		try {
			await createNewData(data);
			setDisplay('none');
			document.getElementById('fullName').value = '';
			document.getElementById('email').value = '';
			document.getElementById('message').value = '';
			setTimeout(() => {
				alert('Response sent successfully');
			}, 100);
		} catch (e) {
			alert('Error sending response');
		}
	};

	return (
		<>
			<Box
				sx={{
					height: '100vh',
					width: '100vw',
				}}
			>
				<Box
					sx={{
						height: '50px',
						width: '100vw',
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center',
					}}
				>
					<Box sx={{ marginRight: 4 }}>
						<Link
							to='/'
							style={{
								textDecoration: 'none',
								color: 'inherit',
							}}
						>
							<Typography
								variant='p'
								sx={{ fontWeight: '500', fontSize: '1.1rem' }}
							>
								Home
							</Typography>
						</Link>
					</Box>
					<Box sx={{ marginRight: 4 }}>
						<Link
							to='/about'
							style={{
								textDecoration: 'none',
								color: 'inherit',
							}}
						>
							<Typography
								variant='p'
								sx={{ fontWeight: '500', fontSize: '1.1rem' }}
							>
								About Us
							</Typography>
						</Link>
					</Box>
					<Box sx={{ marginRight: 4 }}>
						<Link
							to='/contact'
							style={{
								textDecoration: 'none',
								color: 'inherit',
							}}
						>
							<Typography
								variant='p'
								sx={{ fontWeight: '500', fontSize: '1.1rem' }}
							>
								Contact
							</Typography>
						</Link>
					</Box>
				</Box>
				<Typography
					variant='h1'
					sx={{ fontSize: '3rem', textAlign: 'center' }}
				>
					About Us
				</Typography>
				<Box
					sx={{
						height: 'calc(100vh - 400px)',
						width: '100vw',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography
						variant='p'
						sx={{ padding: '0 2%', fontWeight: '100' }}
					>
						Data is a precious thing and will last longer than the
						systems themselves.
						<br />
						<br />
						So here we are with a solution to securely store, manage
						and access your data online. The service syncs stored
						documents and more across all of the user's devices,
						including mobile devices, tablets and PCs.
						<br />
						<br />
						We have a simple and easy to use interface that allows
						you to store your data in a secure manner. For this, we
						have implemented our own custom data structure that is
						easy to understand and use.
						<br />
						<br />
						“Every kid coming out of school now thinks he can be the
						next Mark Zuckerberg, and with these new technologies
						like cloud computing, he actually has a shot.” - Marc
						Andreessen, Co-founder of Netscape, Board Member of
						Facebook
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default AboutPage;
