export class User{

	username! :string;
	password! :string;
	nom! :string;
	prenom! :string;
	email! :string;
	sexe! :string;
}
export class Patient{

	username! :string;
	password! :string;
	name! :string;
	prenom! :string;
	email! :string;
	sexe! :string;
}
export class Abonnement{

	id! :string;
	nom! :string;
	description! :string;
	date_debut! :Date;
	date_fin! :Date;
	prix! :number;
}