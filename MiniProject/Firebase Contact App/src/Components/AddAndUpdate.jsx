import { addDoc, collection } from "firebase/firestore";
import Model from "./Model";
import { Field, Form, Formik } from "formik";
import { db } from "../config/firebase";
export default function AddAndUpdate({ isOpen, onClose }) {
    const addContact=async (contact)=>{
        try {
            const contactRef=collection(db,"contacts");
            await addDoc(contactRef,contact);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
      <Model isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4">
            {/* for name */}
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="border h-10" />
            </div>
            {/* for email */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email" className="border h-10" />
            </div>
            <button className="border py-1 px-2 mt-2 bg-yellow rounded-lg self-end">
              add contact
            </button> 
          </Form>
        </Formik>
      </Model>
    </>
  );
}
