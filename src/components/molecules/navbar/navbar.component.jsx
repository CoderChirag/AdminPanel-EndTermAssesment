import { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Grid, Avatar, MenuItem } from '@mui/material';

import AppTitle from '../../atoms/app-title/appTitle.component';
import Menu from '../../molecules/menu/menu.component';

import { signOutUser } from '../../../utils/firebase/auth/auth.util';

const StyledHr = styled.hr`
	margin-top: -10px;
	border: none;
	background-color: #ccc;
	height: 1px;
`;

const Navbar = () => {
	const [userProfileMenuAnchorEl, setUserProfileMenuAnchorEl] =
		useState(null);
	const userProfileMenuOpen = Boolean(userProfileMenuAnchorEl);
	const handleUserProfileMenuClick = event => {
		setUserProfileMenuAnchorEl(event.currentTarget);
	};
	const handleUserProfileMenuClose = () => {
		setUserProfileMenuAnchorEl(null);
	};

	return (
		<Box>
			<Grid container alignItems='center'>
				<Grid item xs={10} md={11}>
					<AppTitle width='8rem' widthMd='8rem' />
				</Grid>
				<Grid item xs={2} md={1}>
					<Avatar
						src='/broken-image.jpg'
						onClick={handleUserProfileMenuClick}
					/>
					<Menu
						id='userProfileMenu'
						anchorEl={userProfileMenuAnchorEl}
						open={userProfileMenuOpen}
						handleClose={handleUserProfileMenuClose}
						MenuListProps={{
							'aria-labelledby': 'basic-button',
						}}
					>
						<MenuItem onClick={signOutUser}>Logout</MenuItem>
					</Menu>
				</Grid>
			</Grid>
			<StyledHr />
		</Box>
	);
};

export default Navbar;
