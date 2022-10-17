import { useContext } from 'react';

import { UserContext } from '../../contexts/user/user.context';
import AuthPage from '../../components/organisms/auth-page/authPage.component';
import ContactPage from '../../components/organisms/contact-page/contactPage.component';

const ContactRoute = () => {
	const { currentUser } = useContext(UserContext);

	return currentUser || window.localStorage.getItem('currentUser') ? (
		<ContactPage />
	) : (
		<AuthPage />
	);
};

export default ContactRoute;
