const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(_, response) {
    const contacts = await ContactRepository.findAll();

    return response.status(200).json(contacts);
  }

  async show(request, response) {
    const {
      id
    } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({
        error: `Contact with id ${id} was not found!`
      });
    }

    return response.status(200).json(contact);
  }

  async store(request, response) {
    const {
      name, email, phone, category_id
    } = request.body;

    if (!name) {
      return response.status(400).json({
        error: 'Name is required'
      });
    }

    const contactExists = await ContactRepository.findByEmail(email);

    if (contactExists) {
      return response.status(400).json({
        error: 'This email is already being used'
      });
    }

    const contact = await ContactRepository.create({
      name, email, phone, category_id
    });

    response.status(201).json({
      message: 'Contact successfully created',
      contact
    });
  }

  update(request, response) {
    return;
  }

  async delete(request, response) {
    const {
      id
    } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({
        error: `Contact with id ${id} was not found!`
      });
    }

    await ContactRepository.delete(id);
    return response.status(200).json({
      message: `Contact with ID ${contact.id} was successfully deleted`
    });
  }

}

module.exports = new ContactController;
