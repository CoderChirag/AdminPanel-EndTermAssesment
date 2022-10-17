import { useEffect, useState, useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import Navbar from '../../molecules/navbar/navbar.component';
import BottomSearchbar from '../../molecules/bottom-searchbar/bottomSearchbar.component';

import { fetchData } from '../../../utils/firebase/data/data.util';

const HomePage = () => {
	const columns = [
		{ field: 'id', headerName: 'ID', width: 70 },
		{ field: 'fullName', headerName: 'Full Name', width: 150 },
		{
			field: 'email',
			headerName: 'Email',
			width: 260,
		},
		{
			field: 'message',
			headerName: 'Message',
			width: 400,
		},
	];

	const [rows, setRows] = useState([]);

	const fetchTableData = useMemo(
		() => async () => {
			const data = await fetchData();
			setRows(data.data);
		},
		[]
	);

	useEffect(() => {
		fetchTableData();
	}, [fetchTableData]);
	return (
		<>
			<Navbar />
			<Box
				sx={{
					minHeight: '80vh',
					padding: '0 5%',
				}}
			>
				<Typography
					variant='h1'
					sx={{
						fontSize: '3rem',
						textAlign: 'center',
						fontWeight: '200',
						marginBottom: '2rem',
					}}
				>
					Contact Responses
				</Typography>
				<div style={{ height: 400, width: '100%' }}>
					<DataGrid
						rows={rows}
						columns={columns}
						pageSize={5}
						rowsPerPageOptions={[5]}
						checkboxSelection
					/>
				</div>
			</Box>
			<BottomSearchbar />
		</>
	);
};

export default HomePage;
