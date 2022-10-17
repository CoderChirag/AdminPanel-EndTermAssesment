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

const ContactPage = () => {
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

				<Box
					sx={{
						height: 'calc(100vh - 50px)',
						width: '100vw',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Box
						component='form'
						sx={{
							'& > :not(style)': { m: 1, width: '45ch' },
						}}
						noValidate
						autoComplete='off'
					>
						<TextField
							id='fullName'
							label='Full Name'
							variant='standard'
						/>
						<br />
						<TextField
							id='email'
							label='Email'
							variant='standard'
						/>
						<br />
						<TextField
							id='message'
							label='Message'
							variant='standard'
						/>
					</Box>
					<br />
					<br />
					<Button
						variant='contained'
						sx={{ width: '150px' }}
						onClick={() => createData()}
					>
						Submit
						<CircularProgress
							color='secondary'
							sx={{
								marginLeft: '15px',
								width: '25px!important',
								height: '25px!important',
								display,
							}}
						/>
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default ContactPage;
