import { FaRegUserCircle } from "react-icons/fa";
import { FcEditImage } from "react-icons/fc";
import { FcFullTrash } from "react-icons/fc";
import {deleteDoc,doc} from "firebase/firestore"
import { db } from "../config/firebase";  
export default function ContactCard({id,contact}) {
  const deleteContact=async (id)=>{
    try {
      await deleteDoc(doc(db,"contacts",id));
    } catch (error) { 
        console.log(error);
    }
  }
  return (
    <div
      className="flex justify-between items-center  p-2 rounded-lg bg-yellow mt-2 h-15 w-96 shadow-md"
      key={contact.id}
    >
      <div className="flex gap-2">
        <FaRegUserCircle className="text-red-400 text-3xl" />
        <div className="text-black ">
          <h3 className="font-medium">Name - {contact.name}</h3>
          <p className="text-sm">Email - {contact.email}</p>
        </div>
      </div>
      <div className="flex gap-3  ">
        <FcEditImage className="cursor-pointer text-2xl" />
        <FcFullTrash onClick={()=>deleteContact(contact.id)}
        className="cursor-pointer text-2xl" />
      </div>
    </div>
  );
}
