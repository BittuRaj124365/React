import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Model from "./Model";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";
const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name field in Empty"),
  email: Yup.string().email("Invalid Email").required("Email field in Empty"),
});
export default function AddAndUpdate({ isOpen, onClose, isUpdate, contact }) {
  // for add contact
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added Successfull");
    } catch (error) {
      console.log(error);
    }
  };
  //   for update contact
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated Successfull");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Model isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4">
            {/* for name */}
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="border h-10" />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="name" />
              </div>
            </div>
            {/* for email */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email" className="border h-10" />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="email" />
              </div> 
            </div>
            <button className="border py-1 px-2 mt-2 bg-yellow rounded-lg self-end">
              {isUpdate ? "update" : "add"} contact
            </button>
          </Form>
        </Formik>
      </Model>
    </>
  );
}
