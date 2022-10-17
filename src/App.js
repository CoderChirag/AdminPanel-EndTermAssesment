import { Routes, Route } from 'react-router-dom';

import HomeRoute from './routes/home/home.route';
import AuthRoute from './routes/auth/auth.route';
import NotFoundRoute from './routes/notfound/notfound.route';
import ContactRoute from './routes/contact/contact.route';
import AdminRoute from './routes/admin/admin.route';
import AboutRoute from './routes/about/about.route';
import './App.css';

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomeRoute />} />
			<Route path='contact' element={<ContactRoute />} />
			<Route path='about' element={<AboutRoute />} />
			<Route path='auth' element={<AuthRoute />} />
			<Route path='admin' element={<AdminRoute />} />
			<Route path='*' element={<NotFoundRoute />} />
		</Routes>
	);
}

export default App;
