import styled from '@emotion/styled';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AppTitle from '../../atoms/app-title/appTitle.component';

const StyledHr = styled.hr`
	width: 75%;
	border: none;
	height: 2px;
	background-color: #897d7d;
	margin-bottom: 15px;
	@media (minwidth: 360px) {
		margin-bottom: 45px;
	}
`;

const LandingPage = () => {
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
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Box
						sx={{
							marginTop: '-100px',
							transform: { xxs: 'scale(0.8)', xs: 'scale(1)' },
							marginLeft: { xxs: '-50px', xs: 0 },
						}}
					>
						<AppTitle width='28rem' widthMd='15rem' />
					</Box>
					<Box
						sx={{
							width: 'max-content',
							marginLeft: { xxs: '-140px', md: '-240px' },
							marginTop: { xxs: '45px', xs: '65px', md: '155px' },
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<StyledHr />
						<Typography
							variant='h5'
							sx={{
								fontSize: {
									xxs: '0.8rem',
									xs: '0.9rem',
									md: '1.6rem',
								},
							}}
						>
							Feel the power of storing the storable
						</Typography>
						<Box sx={{ width: '100%', marginTop: '20px' }}>
							<Button
								variant='contained'
								sx={{
									fontSize: {
										xxs: '0.8rem',
										xs: '0.9rem',
										md: '1rem',
									},
									textDecoration: 'none',
								}}
								href='/auth'
							>
								Join Now
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default LandingPage;
