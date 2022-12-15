import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {v4} from 'uuid';


const firebaseConfig = {
  apiKey: "AIzaSyDrtdx3o7kdNv91J-vPPDcuS-iky-oIJEU",
  authDomain: "pseudogram-fe43a.firebaseapp.com",
  projectId: "pseudogram-fe43a",
  storageBucket: "pseudogram-fe43a.appspot.com",
  messagingSenderId: "269595757063",
  appId: "1:269595757063:web:5c904e72abfb844c3f38a2",
  measurementId: "G-48L5776QFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile(file){
  const storageRef =ref(storage, v4())
  /*return*/ await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url
  /*const url = getDownloadURL(storageRef)
  console.log(url)*/
}