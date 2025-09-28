import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import { Firestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./Components/ContactCard";
import Model from "./Components/Model";
import AddAndUpdate from "./Components/AddAndUpdate";
// import "../ComponentStyles/App.css";
function App() {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactSnapShot = await getDocs(contactsRef);
        const contactLists = contactSnapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);
  return (
    <>
      <div className="max-w-[370px] mx-auto">
        <Navbar />
        <Searchbar isOpen={onOpen} />
      </div>
      <div className="flex flex-col items-center mt-4">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
      <AddAndUpdate isOpen={isOpen} onClose={onClose}/>
    </>
  );
}

export default App;
