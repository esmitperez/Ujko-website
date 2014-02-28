/*
"Base de datos". Lista de todos los distritos del país.

Autor: Esmit Pérez 
Twitter: @esmitperez
Fecha: Jun 2013

Copyright (c) 2013 Esmit Pérez (@esmiterez)
http://www.apache.org/licenses/LICENSE-2.0
*/

//https://es.wikipedia.org/wiki/Gran_%C3%81rea_Metropolitana_(Costa_Rica)
var distritos_GAM = [
101,102,103,106,107,108,109,110,111,113,114,115,118, // sj
201,203,205,207,208,202, // al
301,302,303,306,307,308, // cartago
401,402,403,404,405,406,407,408,409 // heredia
];

var distritos_costa_rica = [
	{cod:10101,p:'San José',c:'San José',d:'Carmen'},
{cod:10102,p:'San José',c:'San José',d:'Merced'},
{cod:10103,p:'San José',c:'San José',d:'Hospital'},
{cod:10104,p:'San José',c:'San José',d:'Catedral'},
{cod:10105,p:'San José',c:'San José',d:'Zapote'},
{cod:10106,p:'San José',c:'San José',d:'San Francisco de Dos Ríos'},
{cod:10107,p:'San José',c:'San José',d:'Uruca'},
{cod:10108,p:'San José',c:'San José',d:'Mata Redonda'},
{cod:10109,p:'San José',c:'San José',d:'Pavas'},
{cod:10110,p:'San José',c:'San José',d:'Hatillo'},
{cod:10111,p:'San José',c:'San José',d:'San Sebastián'},
{cod:10201,p:'San José',c:'Escazú',d:'Escazú'},
{cod:10202,p:'San José',c:'Escazú',d:'San Antonio'},
{cod:10203,p:'San José',c:'Escazú',d:'San Rafael'},
{cod:10301,p:'San José',c:'Desamparados',d:'Desamparados'},
{cod:10302,p:'San José',c:'Desamparados',d:'San Miguel'},
{cod:10303,p:'San José',c:'Desamparados',d:'San Juan de Dios'},
{cod:10304,p:'San José',c:'Desamparados',d:'San Rafael Arriba'},
{cod:10305,p:'San José',c:'Desamparados',d:'San Antonio'},
{cod:10306,p:'San José',c:'Desamparados',d:'Frailes'},
{cod:10307,p:'San José',c:'Desamparados',d:'Patarrá'},
{cod:10308,p:'San José',c:'Desamparados',d:'San Cristóbal'},
{cod:10309,p:'San José',c:'Desamparados',d:'Rosario'},
{cod:10310,p:'San José',c:'Desamparados',d:'Damas'},
{cod:10311,p:'San José',c:'Desamparados',d:'San Rafael Abajo'},
{cod:10312,p:'San José',c:'Desamparados',d:'Gravilias'},
{cod:10313,p:'San José',c:'Desamparados',d:'Los Guido'},
{cod:10401,p:'San José',c:'Puriscal',d:'Santiago'},
{cod:10402,p:'San José',c:'Puriscal',d:'Mercedes Sur'},
{cod:10403,p:'San José',c:'Puriscal',d:'Barbacoas'},
{cod:10404,p:'San José',c:'Puriscal',d:'Grifo Alto'},
{cod:10405,p:'San José',c:'Puriscal',d:'San Rafael'},
{cod:10406,p:'San José',c:'Puriscal',d:'Candelarita'},
{cod:10407,p:'San José',c:'Puriscal',d:'Desamparaditos'},
{cod:10408,p:'San José',c:'Puriscal',d:'San Antonio'},
{cod:10409,p:'San José',c:'Puriscal',d:'Chires'},
{cod:10501,p:'San José',c:'Tarrazú',d:'San Marcos'},
{cod:10502,p:'San José',c:'Tarrazú',d:'San Lorenzo'},
{cod:10503,p:'San José',c:'Tarrazú',d:'San Carlos'},
{cod:10601,p:'San José',c:'Aserrí',d:'Aserrí'},
{cod:10602,p:'San José',c:'Aserrí',d:'Tarbaca'},
{cod:10603,p:'San José',c:'Aserrí',d:'Vuelta de Jorco'},
{cod:10604,p:'San José',c:'Aserrí',d:'San Gabriel'},
{cod:10605,p:'San José',c:'Aserrí',d:'Legua'},
{cod:10606,p:'San José',c:'Aserrí',d:'Monterrey'},
{cod:10607,p:'San José',c:'Aserrí',d:'Salitrillos'},
{cod:10701,p:'San José',c:'Mora',d:'Colón'},
{cod:10702,p:'San José',c:'Mora',d:'Guayabo'},
{cod:10703,p:'San José',c:'Mora',d:'Tabarcia'},
{cod:10704,p:'San José',c:'Mora',d:'Piedras Negras'},
{cod:10705,p:'San José',c:'Mora',d:'Picagres'},
{cod:10706,p:'San José',c:'Mora',d:'Jaris'},
{cod:10801,p:'San José',c:'Goicoechea',d:'Guadalupe'},
{cod:10802,p:'San José',c:'Goicoechea',d:'San Francisco'},
{cod:10803,p:'San José',c:'Goicoechea',d:'Calle Blancos'},
{cod:10804,p:'San José',c:'Goicoechea',d:'Mata de Plátano'},
{cod:10805,p:'San José',c:'Goicoechea',d:'Ipís'},
{cod:10806,p:'San José',c:'Goicoechea',d:'Rancho Redondo'},
{cod:10807,p:'San José',c:'Goicoechea',d:'Purral'},
{cod:10901,p:'San José',c:'Santa Ana',d:'Santa Ana'},
{cod:10902,p:'San José',c:'Santa Ana',d:'Salitral'},
{cod:10903,p:'San José',c:'Santa Ana',d:'Pozos'},
{cod:10904,p:'San José',c:'Santa Ana',d:'Uruca'},
{cod:10905,p:'San José',c:'Santa Ana',d:'Piedades'},
{cod:10906,p:'San José',c:'Santa Ana',d:'Brasil'},
{cod:11001,p:'San José',c:'Alajuelita',d:'Alajuelita'},
{cod:11002,p:'San José',c:'Alajuelita',d:'San Josecito'},
{cod:11003,p:'San José',c:'Alajuelita',d:'San Antonio'},
{cod:11004,p:'San José',c:'Alajuelita',d:'Concepción'},
{cod:11005,p:'San José',c:'Alajuelita',d:'San Felipe'},
{cod:11101,p:'San José',c:'Vásquez de Coronado',d:'San Isidro'},
{cod:11102,p:'San José',c:'Vásquez de Coronado',d:'San Rafael'},
{cod:11103,p:'San José',c:'Vásquez de Coronado',d:'Dulce Nombre de Jesús'},
{cod:11104,p:'San José',c:'Vásquez de Coronado',d:'Patalillo'},
{cod:11105,p:'San José',c:'Vásquez de Coronado',d:'Cascajal'},
{cod:11201,p:'San José',c:'Acosta',d:'San Ignacio'},
{cod:11202,p:'San José',c:'Acosta',d:'Guaitil'},
{cod:11203,p:'San José',c:'Acosta',d:'Palmichal'},
{cod:11204,p:'San José',c:'Acosta',d:'Cangrejal'},
{cod:11205,p:'San José',c:'Acosta',d:'Sabanillas'},
{cod:11301,p:'San José',c:'Tibás',d:'San Juan'},
{cod:11302,p:'San José',c:'Tibás',d:'Cinco Esquinas'},
{cod:11303,p:'San José',c:'Tibás',d:'Anselmo Llorente'},
{cod:11304,p:'San José',c:'Tibás',d:'León XIII'},
{cod:11305,p:'San José',c:'Tibás',d:'Colima'},
{cod:11401,p:'San José',c:'Moravia',d:'San Vicente'},
{cod:11402,p:'San José',c:'Moravia',d:'San Jerónimo'},
{cod:11403,p:'San José',c:'Moravia',d:'La Trinidad'},
{cod:11501,p:'San José',c:'Montes de Oca',d:'San Pedro'},
{cod:11502,p:'San José',c:'Montes de Oca',d:'Sabanilla'},
{cod:11503,p:'San José',c:'Montes de Oca',d:'Mercedes'},
{cod:11504,p:'San José',c:'Montes de Oca',d:'San Rafael'},
{cod:11601,p:'San José',c:'Turrubares',d:'San Pablo'},
{cod:11602,p:'San José',c:'Turrubares',d:'San Pedro'},
{cod:11603,p:'San José',c:'Turrubares',d:'San Juan de Mata'},
{cod:11604,p:'San José',c:'Turrubares',d:'San Luis'},
{cod:11605,p:'San José',c:'Turrubares',d:'Carara'},
{cod:11701,p:'San José',c:'Dota',d:'Santa María'},
{cod:11702,p:'San José',c:'Dota',d:'Jardín'},
{cod:11703,p:'San José',c:'Dota',d:'Copey'},
{cod:11801,p:'San José',c:'Curridabat',d:'Curridabat'},
{cod:11802,p:'San José',c:'Curridabat',d:'Granadilla'},
{cod:11803,p:'San José',c:'Curridabat',d:'Sánchez'},
{cod:11804,p:'San José',c:'Curridabat',d:'Tirrases'},
{cod:11901,p:'San José',c:'Pérez Zeledón',d:'San Isidro de El General'},
{cod:11902,p:'San José',c:'Pérez Zeledón',d:'General'},
{cod:11903,p:'San José',c:'Pérez Zeledón',d:'Daniel Flores'},
{cod:11904,p:'San José',c:'Pérez Zeledón',d:'Rivas'},
{cod:11905,p:'San José',c:'Pérez Zeledón',d:'San Pedro'},
{cod:11906,p:'San José',c:'Pérez Zeledón',d:'Platanares'},
{cod:11907,p:'San José',c:'Pérez Zeledón',d:'Pejibaye'},
{cod:11908,p:'San José',c:'Pérez Zeledón',d:'Cajón'},
{cod:11909,p:'San José',c:'Pérez Zeledón',d:'Barú'},
{cod:11910,p:'San José',c:'Pérez Zeledón',d:'Río Nuevo'},
{cod:11911,p:'San José',c:'Pérez Zeledón',d:'Páramo'},
{cod:12001,p:'San José',c:'León Cortés',d:'San Pablo'},
{cod:12002,p:'San José',c:'León Cortés',d:'San Andrés'},
{cod:12003,p:'San José',c:'León Cortés',d:'Llano Bonito'},
{cod:12004,p:'San José',c:'León Cortés',d:'San Isidro'},
{cod:12005,p:'San José',c:'León Cortés',d:'Santa Cruz'},
{cod:12006,p:'San José',c:'León Cortés',d:'San Antonio'},
{cod:20101,p:'Alajuela',c:'Alajuela',d:'Alajuela'},
{cod:20102,p:'Alajuela',c:'Alajuela',d:'San José'},
{cod:20103,p:'Alajuela',c:'Alajuela',d:'Carrizal'},
{cod:20104,p:'Alajuela',c:'Alajuela',d:'San Antonio'},
{cod:20105,p:'Alajuela',c:'Alajuela',d:'Guácima'},
{cod:20106,p:'Alajuela',c:'Alajuela',d:'San Isidro'},
{cod:20107,p:'Alajuela',c:'Alajuela',d:'Sabanilla'},
{cod:20108,p:'Alajuela',c:'Alajuela',d:'San Rafael'},
{cod:20109,p:'Alajuela',c:'Alajuela',d:'Río Segundo'},
{cod:20110,p:'Alajuela',c:'Alajuela',d:'Desamparados'},
{cod:20111,p:'Alajuela',c:'Alajuela',d:'Turrúcares'},
{cod:20112,p:'Alajuela',c:'Alajuela',d:'Tambor'},
{cod:20113,p:'Alajuela',c:'Alajuela',d:'Garita'},
{cod:20114,p:'Alajuela',c:'Alajuela',d:'Sarapiquí'},
{cod:20201,p:'Alajuela',c:'San Ramón',d:'San Ramón'},
{cod:20202,p:'Alajuela',c:'San Ramón',d:'Santiago'},
{cod:20203,p:'Alajuela',c:'San Ramón',d:'San Juan'},
{cod:20204,p:'Alajuela',c:'San Ramón',d:'Piedades Norte'},
{cod:20205,p:'Alajuela',c:'San Ramón',d:'Piedades Sur'},
{cod:20206,p:'Alajuela',c:'San Ramón',d:'San Rafael'},
{cod:20207,p:'Alajuela',c:'San Ramón',d:'San Isidro'},
{cod:20208,p:'Alajuela',c:'San Ramón',d:'Los Ángeles'},
{cod:20209,p:'Alajuela',c:'San Ramón',d:'Alfaro'},
{cod:20210,p:'Alajuela',c:'San Ramón',d:'Volio'},
{cod:20211,p:'Alajuela',c:'San Ramón',d:'Concepción'},
{cod:20212,p:'Alajuela',c:'San Ramón',d:'Zapotal'},
{cod:20213,p:'Alajuela',c:'San Ramón',d:'Peñas Blancas'},
{cod:20301,p:'Alajuela',c:'Grecia',d:'Grecia'},
{cod:20302,p:'Alajuela',c:'Grecia',d:'San Isidro'},
{cod:20303,p:'Alajuela',c:'Grecia',d:'San José'},
{cod:20304,p:'Alajuela',c:'Grecia',d:'San Roque'},
{cod:20305,p:'Alajuela',c:'Grecia',d:'Tacares'},
{cod:20306,p:'Alajuela',c:'Grecia',d:'Río Cuarto'},
{cod:20307,p:'Alajuela',c:'Grecia',d:'Puente de Piedra'},
{cod:20308,p:'Alajuela',c:'Grecia',d:'Bolívar'},
{cod:20401,p:'Alajuela',c:'San Mateo',d:'San Mateo'},
{cod:20402,p:'Alajuela',c:'San Mateo',d:'Desmonte'},
{cod:20403,p:'Alajuela',c:'San Mateo',d:'Jesús María'},
{cod:20501,p:'Alajuela',c:'Atenas',d:'Atenas'},
{cod:20502,p:'Alajuela',c:'Atenas',d:'Jesús'},
{cod:20503,p:'Alajuela',c:'Atenas',d:'Mercedes'},
{cod:20504,p:'Alajuela',c:'Atenas',d:'San Isidro'},
{cod:20505,p:'Alajuela',c:'Atenas',d:'Concepción'},
{cod:20506,p:'Alajuela',c:'Atenas',d:'San José'},
{cod:20507,p:'Alajuela',c:'Atenas',d:'Santa Eulalia'},
{cod:20508,p:'Alajuela',c:'Atenas',d:'Escobal'},
{cod:20601,p:'Alajuela',c:'Naranjo',d:'Naranjo'},
{cod:20602,p:'Alajuela',c:'Naranjo',d:'San Miguel'},
{cod:20603,p:'Alajuela',c:'Naranjo',d:'San José'},
{cod:20604,p:'Alajuela',c:'Naranjo',d:'Cirrí Sur'},
{cod:20605,p:'Alajuela',c:'Naranjo',d:'San Jerónimo'},
{cod:20606,p:'Alajuela',c:'Naranjo',d:'San Juan'},
{cod:20607,p:'Alajuela',c:'Naranjo',d:'El Rosario'},
{cod:20608,p:'Alajuela',c:'Naranjo',d:'Palmitos'},
{cod:20701,p:'Alajuela',c:'Palmares',d:'Palmares'},
{cod:20702,p:'Alajuela',c:'Palmares',d:'Zaragoza'},
{cod:20703,p:'Alajuela',c:'Palmares',d:'Buenos Aires'},
{cod:20704,p:'Alajuela',c:'Palmares',d:'Santiago'},
{cod:20705,p:'Alajuela',c:'Palmares',d:'Candelaria'},
{cod:20706,p:'Alajuela',c:'Palmares',d:'Esquipulas'},
{cod:20707,p:'Alajuela',c:'Palmares',d:'La Granja'},
{cod:20801,p:'Alajuela',c:'Poás',d:'San Pedro'},
{cod:20802,p:'Alajuela',c:'Poás',d:'San Juan'},
{cod:20803,p:'Alajuela',c:'Poás',d:'San Rafael'},
{cod:20804,p:'Alajuela',c:'Poás',d:'Carrillos'},
{cod:20805,p:'Alajuela',c:'Poás',d:'Sabana Redonda'},
{cod:20901,p:'Alajuela',c:'Orotina',d:'Orotina'},
{cod:20902,p:'Alajuela',c:'Orotina',d:'El Mastate'},
{cod:20903,p:'Alajuela',c:'Orotina',d:'Hacienda Vieja'},
{cod:20904,p:'Alajuela',c:'Orotina',d:'Coyolar'},
{cod:20905,p:'Alajuela',c:'Orotina',d:'La Ceiba'},
{cod:21001,p:'Alajuela',c:'San Carlos',d:'Quesada'},
{cod:21002,p:'Alajuela',c:'San Carlos',d:'Florencia'},
{cod:21003,p:'Alajuela',c:'San Carlos',d:'Buenavista'},
{cod:21004,p:'Alajuela',c:'San Carlos',d:'Aguas Zarcas'},
{cod:21005,p:'Alajuela',c:'San Carlos',d:'Venecia'},
{cod:21006,p:'Alajuela',c:'San Carlos',d:'Pital'},
{cod:21007,p:'Alajuela',c:'San Carlos',d:'La Fortuna'},
{cod:21008,p:'Alajuela',c:'San Carlos',d:'La Tigra'},
{cod:21009,p:'Alajuela',c:'San Carlos',d:'La Palmera'},
{cod:21010,p:'Alajuela',c:'San Carlos',d:'Venado'},
{cod:21011,p:'Alajuela',c:'San Carlos',d:'Cutris'},
{cod:21012,p:'Alajuela',c:'San Carlos',d:'Monterrey'},
{cod:21013,p:'Alajuela',c:'San Carlos',d:'Pocosol'},
{cod:21101,p:'Alajuela',c:'Alfaro Ruiz',d:'Zarcero'},
{cod:21102,p:'Alajuela',c:'Alfaro Ruiz',d:'Laguna'},
{cod:21103,p:'Alajuela',c:'Alfaro Ruiz',d:'Tapesco'},
{cod:21104,p:'Alajuela',c:'Alfaro Ruiz',d:'Guadalupe'},
{cod:21105,p:'Alajuela',c:'Alfaro Ruiz',d:'Palmira'},
{cod:21106,p:'Alajuela',c:'Alfaro Ruiz',d:'Zapote'},
{cod:21107,p:'Alajuela',c:'Alfaro Ruiz',d:'Brisas'},
{cod:21201,p:'Alajuela',c:'Valverde Vega',d:'Sarchí Norte'},
{cod:21202,p:'Alajuela',c:'Valverde Vega',d:'Sarchí Sur'},
{cod:21203,p:'Alajuela',c:'Valverde Vega',d:'Toro Amarillo'},
{cod:21204,p:'Alajuela',c:'Valverde Vega',d:'San Pedro'},
{cod:21205,p:'Alajuela',c:'Valverde Vega',d:'Rodríguez'},
{cod:21301,p:'Alajuela',c:'Upala',d:'Upala'},
{cod:21302,p:'Alajuela',c:'Upala',d:'Aguas Claras'},
{cod:21303,p:'Alajuela',c:'Upala',d:'San José (Pizote)'},
{cod:21304,p:'Alajuela',c:'Upala',d:'Bijagua'},
{cod:21305,p:'Alajuela',c:'Upala',d:'Delicias'},
{cod:21306,p:'Alajuela',c:'Upala',d:'Dos Ríos'},
{cod:21307,p:'Alajuela',c:'Upala',d:'Yoliyllal'},
{cod:21401,p:'Alajuela',c:'Los Chiles',d:'Los Chiles'},
{cod:21402,p:'Alajuela',c:'Los Chiles',d:'Caño Negro'},
{cod:21403,p:'Alajuela',c:'Los Chiles',d:'El Amparo'},
{cod:21404,p:'Alajuela',c:'Los Chiles',d:'San Jorge'},
{cod:21501,p:'Alajuela',c:'Guatuso',d:'San Rafael'},
{cod:21502,p:'Alajuela',c:'Guatuso',d:'Buenavista'},
{cod:21503,p:'Alajuela',c:'Guatuso',d:'Cote'},
{cod:21504,p:'Alajuela',c:'Guatuso',d:'Katira'},
{cod:30101,p:'Cartago',c:'Cartago',d:'Oriental'},
{cod:30102,p:'Cartago',c:'Cartago',d:'Occidental'},
{cod:30103,p:'Cartago',c:'Cartago',d:'Carmen'},
{cod:30104,p:'Cartago',c:'Cartago',d:'San Nicolás'},
{cod:30105,p:'Cartago',c:'Cartago',d:'Aguacaliente (San Francisco)'},
{cod:30106,p:'Cartago',c:'Cartago',d:'Guadalupe (Arenilla)'},
{cod:30107,p:'Cartago',c:'Cartago',d:'Corralillo'},
{cod:30108,p:'Cartago',c:'Cartago',d:'Tierra Blanca'},
{cod:30109,p:'Cartago',c:'Cartago',d:'Dulce Nombre'},
{cod:30110,p:'Cartago',c:'Cartago',d:'Llano Grande'},
{cod:30111,p:'Cartago',c:'Cartago',d:'Quebradilla'},
{cod:30201,p:'Cartago',c:'Paraíso',d:'Paraíso'},
{cod:30202,p:'Cartago',c:'Paraíso',d:'Santiago'},
{cod:30203,p:'Cartago',c:'Paraíso',d:'Orosi'},
{cod:30204,p:'Cartago',c:'Paraíso',d:'Cachí'},
{cod:30205,p:'Cartago',c:'Paraíso',d:'Llanos de Santa Lucía'},
{cod:30301,p:'Cartago',c:'La Unión',d:'Tres Ríos'},
{cod:30302,p:'Cartago',c:'La Unión',d:'San Diego'},
{cod:30303,p:'Cartago',c:'La Unión',d:'San Juan'},
{cod:30304,p:'Cartago',c:'La Unión',d:'San Rafael'},
{cod:30305,p:'Cartago',c:'La Unión',d:'Concepción'},
{cod:30306,p:'Cartago',c:'La Unión',d:'Dulce Nombre'},
{cod:30307,p:'Cartago',c:'La Unión',d:'San Ramón'},
{cod:30308,p:'Cartago',c:'La Unión',d:'Río Azul'},
{cod:30401,p:'Cartago',c:'Jiménez',d:'Juan Viñas'},
{cod:30402,p:'Cartago',c:'Jiménez',d:'Tucurrique'},
{cod:30403,p:'Cartago',c:'Jiménez',d:'Pejibaye'},
{cod:30501,p:'Cartago',c:'Turrialba',d:'Turrialba'},
{cod:30502,p:'Cartago',c:'Turrialba',d:'La Suiza'},
{cod:30503,p:'Cartago',c:'Turrialba',d:'Peralta'},
{cod:30504,p:'Cartago',c:'Turrialba',d:'Santa Cruz'},
{cod:30505,p:'Cartago',c:'Turrialba',d:'Santa Teresita'},
{cod:30506,p:'Cartago',c:'Turrialba',d:'Pavones'},
{cod:30507,p:'Cartago',c:'Turrialba',d:'Tuis'},
{cod:30508,p:'Cartago',c:'Turrialba',d:'Tayutic'},
{cod:30509,p:'Cartago',c:'Turrialba',d:'Santa Rosa'},
{cod:30510,p:'Cartago',c:'Turrialba',d:'Tres Equis'},
{cod:30511,p:'Cartago',c:'Turrialba',d:'La Isabel'},
{cod:30512,p:'Cartago',c:'Turrialba',d:'Chirripó'},
{cod:30601,p:'Cartago',c:'Alvarado',d:'Pacayas'},
{cod:30602,p:'Cartago',c:'Alvarado',d:'Cervantes'},
{cod:30603,p:'Cartago',c:'Alvarado',d:'Capellades'},
{cod:30701,p:'Cartago',c:'Oreamuno',d:'San Rafael'},
{cod:30702,p:'Cartago',c:'Oreamuno',d:'Cot'},
{cod:30703,p:'Cartago',c:'Oreamuno',d:'Potrero Cerrado'},
{cod:30704,p:'Cartago',c:'Oreamuno',d:'Cipreses'},
{cod:30705,p:'Cartago',c:'Oreamuno',d:'Santa Rosa'},
{cod:30801,p:'Cartago',c:'El Guarco',d:'El Tejar'},
{cod:30802,p:'Cartago',c:'El Guarco',d:'San Isidro'},
{cod:30803,p:'Cartago',c:'El Guarco',d:'Tobosi'},
{cod:30804,p:'Cartago',c:'El Guarco',d:'Patio de Agua'},
{cod:40101,p:'Heredia',c:'Heredia',d:'Heredia'},
{cod:40102,p:'Heredia',c:'Heredia',d:'Mercedes'},
{cod:40103,p:'Heredia',c:'Heredia',d:'San Francisco'},
{cod:40104,p:'Heredia',c:'Heredia',d:'Ulloa'},
{cod:40105,p:'Heredia',c:'Heredia',d:'Varablanca'},
{cod:40201,p:'Heredia',c:'Barva',d:'Barva'},
{cod:40202,p:'Heredia',c:'Barva',d:'San Pedro'},
{cod:40203,p:'Heredia',c:'Barva',d:'San Pablo'},
{cod:40204,p:'Heredia',c:'Barva',d:'San Roque'},
{cod:40205,p:'Heredia',c:'Barva',d:'Santa Lucía'},
{cod:40206,p:'Heredia',c:'Barva',d:'San José de la Montaña'},
{cod:40301,p:'Heredia',c:'Santo Domingo',d:'Santo Domingo'},
{cod:40302,p:'Heredia',c:'Santo Domingo',d:'San Vicente'},
{cod:40303,p:'Heredia',c:'Santo Domingo',d:'San Miguel'},
{cod:40304,p:'Heredia',c:'Santo Domingo',d:'Paracito'},
{cod:40305,p:'Heredia',c:'Santo Domingo',d:'Santo Tomás'},
{cod:40306,p:'Heredia',c:'Santo Domingo',d:'Santa Rosa'},
{cod:40307,p:'Heredia',c:'Santo Domingo',d:'Tures'},
{cod:40308,p:'Heredia',c:'Santo Domingo',d:'Para'},
{cod:40401,p:'Heredia',c:'Santa Bárbara',d:'Santa Bárbara'},
{cod:40402,p:'Heredia',c:'Santa Bárbara',d:'San Pedro'},
{cod:40403,p:'Heredia',c:'Santa Bárbara',d:'San Juan'},
{cod:40404,p:'Heredia',c:'Santa Bárbara',d:'Jesús'},
{cod:40405,p:'Heredia',c:'Santa Bárbara',d:'Santo Domingo'},
{cod:40406,p:'Heredia',c:'Santa Bárbara',d:'Puraba'},
{cod:40501,p:'Heredia',c:'San Rafael',d:'San Rafael'},
{cod:40502,p:'Heredia',c:'San Rafael',d:'San Josécito'},
{cod:40503,p:'Heredia',c:'San Rafael',d:'Santiago'},
{cod:40504,p:'Heredia',c:'San Rafael',d:'Los Ángeles'},
{cod:40505,p:'Heredia',c:'San Rafael',d:'Concepción'},
{cod:40601,p:'Heredia',c:'San Isidro',d:'San Isidro'},
{cod:40602,p:'Heredia',c:'San Isidro',d:'San José'},
{cod:40603,p:'Heredia',c:'San Isidro',d:'Concepción'},
{cod:40604,p:'Heredia',c:'San Isidro',d:'San Francisco'},
{cod:40701,p:'Heredia',c:'Belén',d:'San Antonio'},
{cod:40702,p:'Heredia',c:'Belén',d:'La Ribera'},
{cod:40703,p:'Heredia',c:'Belén',d:'La Asunción'},
{cod:40801,p:'Heredia',c:'Flores',d:'San Joaquín de Flores'},
{cod:40802,p:'Heredia',c:'Flores',d:'Barrantes'},
{cod:40803,p:'Heredia',c:'Flores',d:'Llorente'},
{cod:40901,p:'Heredia',c:'San Pablo',d:'San Pablo'},
{cod:40902,p:'Heredia',c:'San Pablo',d:'Rincón de Sabanilla'},
{cod:41001,p:'Heredia',c:'Sarapiquí',d:'Puerto Viejo'},
{cod:41002,p:'Heredia',c:'Sarapiquí',d:'La Virgen'},
{cod:41003,p:'Heredia',c:'Sarapiquí',d:'Horquetas'},
{cod:41004,p:'Heredia',c:'Sarapiquí',d:'Llanuras del Gaspar'},
{cod:41005,p:'Heredia',c:'Sarapiquí',d:'Cureña'},
{cod:50101,p:'Guanacaste',c:'Liberia',d:'Liberia'},
{cod:50102,p:'Guanacaste',c:'Liberia',d:'Cañas Dulces'},
{cod:50103,p:'Guanacaste',c:'Liberia',d:'Mayorga'},
{cod:50104,p:'Guanacaste',c:'Liberia',d:'Nacascolo'},
{cod:50105,p:'Guanacaste',c:'Liberia',d:'Curubande'},
{cod:50201,p:'Guanacaste',c:'Nicoya',d:'Nicoya'},
{cod:50202,p:'Guanacaste',c:'Nicoya',d:'Mansion'},
{cod:50203,p:'Guanacaste',c:'Nicoya',d:'San Antonio'},
{cod:50204,p:'Guanacaste',c:'Nicoya',d:'Quebrada Honda'},
{cod:50205,p:'Guanacaste',c:'Nicoya',d:'Samara'},
{cod:50206,p:'Guanacaste',c:'Nicoya',d:'Nosara'},
{cod:50207,p:'Guanacaste',c:'Nicoya',d:'Belén de Nosarita'},
{cod:50301,p:'Guanacaste',c:'Santa Cruz',d:'Santa Cruz'},
{cod:50302,p:'Guanacaste',c:'Santa Cruz',d:'Bolson'},
{cod:50303,p:'Guanacaste',c:'Santa Cruz',d:'Veintisiete de Abril'},
{cod:50304,p:'Guanacaste',c:'Santa Cruz',d:'Tempate'},
{cod:50305,p:'Guanacaste',c:'Santa Cruz',d:'Cartagena'},
{cod:50306,p:'Guanacaste',c:'Santa Cruz',d:'Cuajiniquil'},
{cod:50307,p:'Guanacaste',c:'Santa Cruz',d:'Diria'},
{cod:50308,p:'Guanacaste',c:'Santa Cruz',d:'Cabo Velas'},
{cod:50309,p:'Guanacaste',c:'Santa Cruz',d:'Tamarindo'},
{cod:50401,p:'Guanacaste',c:'Bagaces',d:'Bagaces'},
{cod:50402,p:'Guanacaste',c:'Bagaces',d:'Fortuna'},
{cod:50403,p:'Guanacaste',c:'Bagaces',d:'Mogote'},
{cod:50404,p:'Guanacaste',c:'Bagaces',d:'Río Naranjo'},
{cod:50501,p:'Guanacaste',c:'Carrillo',d:'Filadelfia'},
{cod:50502,p:'Guanacaste',c:'Carrillo',d:'Palmira'},
{cod:50503,p:'Guanacaste',c:'Carrillo',d:'Sardinal'},
{cod:50504,p:'Guanacaste',c:'Carrillo',d:'Belén'},
{cod:50601,p:'Guanacaste',c:'Cañas',d:'Cañas'},
{cod:50602,p:'Guanacaste',c:'Cañas',d:'Palmira'},
{cod:50603,p:'Guanacaste',c:'Cañas',d:'San Miguel'},
{cod:50604,p:'Guanacaste',c:'Cañas',d:'Bebedero'},
{cod:50605,p:'Guanacaste',c:'Cañas',d:'Porozal'},
{cod:50701,p:'Guanacaste',c:'Abangares',d:'Juntas'},
{cod:50702,p:'Guanacaste',c:'Abangares',d:'Sierra'},
{cod:50703,p:'Guanacaste',c:'Abangares',d:'San Juan'},
{cod:50704,p:'Guanacaste',c:'Abangares',d:'Colorado'},
{cod:50801,p:'Guanacaste',c:'Tilarán',d:'Tilarán'},
{cod:50802,p:'Guanacaste',c:'Tilarán',d:'Quebrada Grande'},
{cod:50803,p:'Guanacaste',c:'Tilarán',d:'Tronadora'},
{cod:50804,p:'Guanacaste',c:'Tilarán',d:'Santa Rosa'},
{cod:50805,p:'Guanacaste',c:'Tilarán',d:'Líbano'},
{cod:50806,p:'Guanacaste',c:'Tilarán',d:'Tierras Morenas'},
{cod:50807,p:'Guanacaste',c:'Tilarán',d:'Arenal'},
{cod:50901,p:'Guanacaste',c:'Nandayure',d:'Carmona'},
{cod:50902,p:'Guanacaste',c:'Nandayure',d:'Santa Rita'},
{cod:50903,p:'Guanacaste',c:'Nandayure',d:'Zapotal'},
{cod:50904,p:'Guanacaste',c:'Nandayure',d:'San Pablo'},
{cod:50905,p:'Guanacaste',c:'Nandayure',d:'Porvenir'},
{cod:50906,p:'Guanacaste',c:'Nandayure',d:'Bejuco'},
{cod:51001,p:'Guanacaste',c:'La Cruz',d:'La Cruz'},
{cod:51002,p:'Guanacaste',c:'La Cruz',d:'Santa Cecilia'},
{cod:51003,p:'Guanacaste',c:'La Cruz',d:'Garita'},
{cod:51004,p:'Guanacaste',c:'La Cruz',d:'Santa Elena'},
{cod:51101,p:'Guanacaste',c:'Hojancha',d:'Hojancha'},
{cod:51102,p:'Guanacaste',c:'Hojancha',d:'Monte Romo'},
{cod:51103,p:'Guanacaste',c:'Hojancha',d:'Puerto Carrillo'},
{cod:51104,p:'Guanacaste',c:'Hojancha',d:'Huacas'},
{cod:60101,p:'Puntarenas',c:'Puntarenas',d:'Puntarenas'},
{cod:60102,p:'Puntarenas',c:'Puntarenas',d:'Pitahaya'},
{cod:60103,p:'Puntarenas',c:'Puntarenas',d:'Chomes'},
{cod:60104,p:'Puntarenas',c:'Puntarenas',d:'Lepanto'},
{cod:60105,p:'Puntarenas',c:'Puntarenas',d:'Paquera'},
{cod:60106,p:'Puntarenas',c:'Puntarenas',d:'Manzanillo'},
{cod:60107,p:'Puntarenas',c:'Puntarenas',d:'Guacimal'},
{cod:60108,p:'Puntarenas',c:'Puntarenas',d:'Barranca'},
{cod:60109,p:'Puntarenas',c:'Puntarenas',d:'Monte Verde'},
{cod:60110,p:'Puntarenas',c:'Puntarenas',d:'Isla del Coco'},
{cod:60111,p:'Puntarenas',c:'Puntarenas',d:'Cobano'},
{cod:60112,p:'Puntarenas',c:'Puntarenas',d:'Chacarita'},
{cod:60113,p:'Puntarenas',c:'Puntarenas',d:'Chira'},
{cod:60114,p:'Puntarenas',c:'Puntarenas',d:'Acapulco'},
{cod:60115,p:'Puntarenas',c:'Puntarenas',d:'El Roble'},
{cod:60116,p:'Puntarenas',c:'Puntarenas',d:'Arancibia'},
{cod:60201,p:'Puntarenas',c:'Esparza',d:'Espiritu Santo'},
{cod:60202,p:'Puntarenas',c:'Esparza',d:'San Juan Grande'},
{cod:60203,p:'Puntarenas',c:'Esparza',d:'Macacona'},
{cod:60204,p:'Puntarenas',c:'Esparza',d:'San Rafael'},
{cod:60205,p:'Puntarenas',c:'Esparza',d:'San Jerónimo'},
{cod:60301,p:'Puntarenas',c:'Buenos Aires',d:'Buenos Aires'},
{cod:60302,p:'Puntarenas',c:'Buenos Aires',d:'Volcan'},
{cod:60303,p:'Puntarenas',c:'Buenos Aires',d:'Potrero Grande'},
{cod:60304,p:'Puntarenas',c:'Buenos Aires',d:'Boruca'},
{cod:60305,p:'Puntarenas',c:'Buenos Aires',d:'Pilas'},
{cod:60306,p:'Puntarenas',c:'Buenos Aires',d:'Colinas'},
{cod:60307,p:'Puntarenas',c:'Buenos Aires',d:'Changena'},
{cod:60308,p:'Puntarenas',c:'Buenos Aires',d:'Briolley'},
{cod:60309,p:'Puntarenas',c:'Buenos Aires',d:'Brunka'},
{cod:60401,p:'Puntarenas',c:'Montes de Oro',d:'Miramar'},
{cod:60402,p:'Puntarenas',c:'Montes de Oro',d:'La Unión'},
{cod:60403,p:'Puntarenas',c:'Montes de Oro',d:'San Isidro'},
{cod:60501,p:'Puntarenas',c:'Osa',d:'Puerto Cortes'},
{cod:60502,p:'Puntarenas',c:'Osa',d:'Palmar'},
{cod:60503,p:'Puntarenas',c:'Osa',d:'Sierpe'},
{cod:60504,p:'Puntarenas',c:'Osa',d:'Bahia Ballena'},
{cod:60505,p:'Puntarenas',c:'Osa',d:'Piedras Blancas'},
{cod:60601,p:'Puntarenas',c:'Aguirre',d:'Quepos'},
{cod:60602,p:'Puntarenas',c:'Aguirre',d:'Savegre'},
{cod:60603,p:'Puntarenas',c:'Aguirre',d:'Naranjito'},
{cod:60701,p:'Puntarenas',c:'Golfito',d:'Golfito'},
{cod:60702,p:'Puntarenas',c:'Golfito',d:'Puerto Jiménez'},
{cod:60703,p:'Puntarenas',c:'Golfito',d:'Guaycara'},
{cod:60704,p:'Puntarenas',c:'Golfito',d:'Pavon'},
{cod:60801,p:'Puntarenas',c:'Coto Brus',d:'San Vito'},
{cod:60802,p:'Puntarenas',c:'Coto Brus',d:'Sabalito'},
{cod:60803,p:'Puntarenas',c:'Coto Brus',d:'Aguabuena'},
{cod:60804,p:'Puntarenas',c:'Coto Brus',d:'Limóncito'},
{cod:60805,p:'Puntarenas',c:'Coto Brus',d:'Pittier'},
{cod:60901,p:'Puntarenas',c:'Parrita',d:'Parrita'},
{cod:61001,p:'Puntarenas',c:'Corredores',d:'Corredor'},
{cod:61002,p:'Puntarenas',c:'Corredores',d:'La Cuesta'},
{cod:61003,p:'Puntarenas',c:'Corredores',d:'Canoas'},
{cod:61004,p:'Puntarenas',c:'Corredores',d:'Laurel'},
{cod:61101,p:'Puntarenas',c:'Garabito',d:'Jacó'},
{cod:61102,p:'Puntarenas',c:'Garabito',d:'Tarcoles'},
{cod:70101,p:'Limón',c:'Limón',d:'Limón'},
{cod:70102,p:'Limón',c:'Limón',d:'Valle La Estrella'},
{cod:70103,p:'Limón',c:'Limón',d:'Río Blanco'},
{cod:70104,p:'Limón',c:'Limón',d:'Matama'},
{cod:70201,p:'Limón',c:'Pococí',d:'Guapiles'},
{cod:70202,p:'Limón',c:'Pococí',d:'Jiménez'},
{cod:70203,p:'Limón',c:'Pococí',d:'Rita'},
{cod:70204,p:'Limón',c:'Pococí',d:'Roxana'},
{cod:70205,p:'Limón',c:'Pococí',d:'Cariari'},
{cod:70206,p:'Limón',c:'Pococí',d:'Colorado'},
{cod:70301,p:'Limón',c:'Siquirres',d:'Siquirres'},
{cod:70302,p:'Limón',c:'Siquirres',d:'Pacuarito'},
{cod:70303,p:'Limón',c:'Siquirres',d:'Florida'},
{cod:70304,p:'Limón',c:'Siquirres',d:'Germania'},
{cod:70305,p:'Limón',c:'Siquirres',d:'Cairo'},
{cod:70306,p:'Limón',c:'Siquirres',d:'Alegria'},
{cod:70401,p:'Limón',c:'Talamanca',d:'Bratsi'},
{cod:70402,p:'Limón',c:'Talamanca',d:'Sixaola'},
{cod:70403,p:'Limón',c:'Talamanca',d:'Cahuita'},
{cod:70404,p:'Limón',c:'Talamanca',d:'Telire'},
{cod:70501,p:'Limón',c:'Matina',d:'Matina'},
{cod:70502,p:'Limón',c:'Matina',d:'Battan'},
{cod:70503,p:'Limón',c:'Matina',d:'Carrandi'},
{cod:70601,p:'Limón',c:'Guácimo',d:'Guácimo'},
{cod:70602,p:'Limón',c:'Guácimo',d:'Mercedes'},
{cod:70603,p:'Limón',c:'Guácimo',d:'Pocora'},
{cod:70604,p:'Limón',c:'Guácimo',d:'Río Jiménez'},
{cod:70605,p:'Limón',c:'Guácimo',d:'Duacari'}
];


