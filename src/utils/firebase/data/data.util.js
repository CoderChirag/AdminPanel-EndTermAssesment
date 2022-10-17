import { arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { dataConverter } from '../converters/converters.util';

import { db } from '../firebase.util';

export const createNewData = async data => {
	const dataDocRef = doc(db, 'data', 'MYDzppEIUYQkPafd7uFa');
	try {
		await updateDoc(dataDocRef, {
			data: arrayUnion(data),
		});
	} catch (e) {
		console.log('Error creating data', e.message);
	}
	return dataDocRef;
};

export const fetchData = async () => {
	const docRef = doc(db, 'data', 'MYDzppEIUYQkPafd7uFa').withConverter(
		dataConverter
	);
	try {
		const dataDoc = await getDoc(docRef);
		if (dataDoc.exists()) {
			return dataDoc.data();
		} else {
			return {
				data: [],
			};
		}
	} catch (e) {
		console.log('Error fetching data', e.message);
		return {
			data: [],
		};
	}
};
