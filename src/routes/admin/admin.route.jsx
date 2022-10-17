import { useLocation } from 'react-router-dom';

import RouteProtection from '../../components/molecules/route-protection/routeProtection.component';
import AdminPage from '../../components/organisms/admin-page/admin.component';

const FileSystemRoute = () => {
	const location = useLocation();
	return (
		<RouteProtection>
			<AdminPage />
		</RouteProtection>
	);
};

export default FileSystemRoute;
