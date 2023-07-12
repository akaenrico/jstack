let contacts = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@mail.com',
    phone: '555-555-5555',
    category_id: [ '1' ]
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'jane@mail.com',
    phone: '555-555-5555',
    category_id: [ '1' ]
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find(contact => contact.id === id));
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find(contact => contact.email === email));
    });
  }

  create({
    name, email, phone, category_id
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: Math.random().toString,
        name,
        email,
        phone,
        category_id
      };

      contacts.push(newContact);
      resolve(newContact);
    });
  }

  update(id) {}

  delete(id) {
    return new Promise((resolve) => {
      resolve(contacts = contacts.filter(contact => contact.id !== id));
    });
  }
}

module.exports = new ContactRepository;
