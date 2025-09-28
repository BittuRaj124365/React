import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import { Firestore, onSnapshot } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./Components/ContactCard";
import Model from "./Components/Model";
import AddAndUpdate from "./Components/AddAndUpdate";
import useDisclose from "./hooks/useDisclose";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import NotFoundContact from "./Components/NotFoundContact";
// import "../ComponentStyles/App.css";
function App() {
  const [contacts, setContacts] = useState([]);
  // const [isOpen, setIsOpen] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclose();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        // const contactSnapShot = await getDocs(contactsRef);

        // this snapshot is for prevent the refresh page problem on the app or browser
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);
  const filteredContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filterdContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContacts(filterdContacts);
      return filterdContacts;
    });
  };
  return (
    <>
      <div className="max-w-[370px] mx-auto">
        <Navbar />
        <Searchbar isOpen={onOpen} filteredContacts={filteredContacts} />
      </div>
      <div className="flex flex-col items-center mt-4">
        {contacts.length <= 0 ? (
          <NotFoundContact />
        ) : (
          contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))
        )}
      </div>
      <AddAndUpdate isOpen={isOpen} onClose={onClose} />
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
