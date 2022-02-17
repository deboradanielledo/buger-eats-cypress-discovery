var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

	deliver: function() {

		var firstName = faker.name.firstName()
		var lastName = faker.name.lastName()


		var data = {
				name: `${firstName} ${lastName}`,
  				cpf: cpf.generate(),
  				email: faker.internet.email(firstName),
  				whatsapp: '11988775566',
  				address: {
  					postalcode: '38411889',
  					street: 'Rua SU1',
  					number: '100',
  					details: 'Apt 303',
  					district: 'Gávea',
  					city_state: 'Uberlândia/MG'
  				},
  				delivery_method: 'Moto',
  				cnh: 'cnh-digital.jpg'
	}

	return data

	}
}