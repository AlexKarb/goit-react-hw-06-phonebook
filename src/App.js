import Section from './module/Utils/Section/Section';
import ContactForm from './module/ContactForm/ContactForm';
import ContactsList from './module/ContactsList/ContactsList';
import Title from './module/Utils/Title/Title';

const App = () => (
  <div className="container">
    <Section type="Phonebook">
      <Title title="Phonebook" />
      <ContactForm />
    </Section>
    <Section>
      <Title title="Contacts" />
      <ContactsList />
    </Section>
  </div>
);

export default App;
