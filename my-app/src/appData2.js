const data = {
	english:{
		navBar:{
			languages:["English", "Spanish", "French"],
			links:["Home", "Projects", "Contact" ]
		},
	home:{
		article:"Enthusiastic Web developer with high level competency in creating designing and modifying web responsive content. Experience in effective communication with people of diverse backgrounds. Refined analytical skills in problem solving. Attention to detail. Proven history of success in both business and education. Graphic design element creation and utilization. Fluent in Spanish",
		title:"WEB DEVELOPER",
		statement:"Full Stack developer | HTML, CSS, JavaScript, Node.js, Express, Bootstrap, Materialize, Firebase, MySQL, MongoDB, React.js, API/ JSON, RESTful API, Ajax, version control and Command Line.",
		buttonText:"Portfolio",
		portfolio:[
			{
				id:"leoBien",
				title:"Leo Bien",
				description:"This app is a tool to teach early literacy to kinder and 1st grade students in Spanish. It presents a set of words that are used to practice different phonological awareness skills. Every set can be displayed in three different modes. In the vocabulary mode, each word is displayed in on slide with a picture; the teacher and the students can read the word on the screen. The other modes present the word as a quiz. The slide may show a picture of the word and three answer choices with a phonological component that with the word of the picture. I begin to build this project aside from the UT classes. I stated it with very limited knowledge of JavaScript and CSS. When I learn JQuery, I re-write most of the code. The idea was to display the app in less pages. This project is very meaningful to me and I will still be working on it for a while. One of the components that I want to add is a database. I want the app provides some data to measure the student progress.",
				url:"https://karl74.github.io/Leo_bien/",
				pictures:["./LeoBienDesk.png", "./LeoBienPhone.png"],
				buttonText:"Visit the page"
			},
			{
				id:"hangman",
				title:"Hangman",
				description:"This is a simple hangman game with a list of cities in Germany. As an elementary teacher, it was hard to create a game with the picture of a man being hanged. For that reason, I create an abstract representation of a man. The man is a column of white rectangles than turn bloody red each time the player misses a letter. Each letter is displayed inside a pink div that matches the color of the background. Each pink div is displayed inside a white div. The width of the white div is adjusted to accommodate the number of letters in the word. I used CSS flex-box to equally distribute the pink boxes and make the white div looks as a bookcase.",
				url:"http://www.carloscastro.online/api/hangman",
				pictures:["./hangmanDesk.png", "./hangPhone.png"],
				buttonText:"Visit the page"
			},
			{
				id:"reactPage",
				title:"React Page",
				description:"My idea with this project was to create a website for any small organization like a community park, a church or a book club. A group like this has very basic information that can be fitted in one page, but it the user can understand better if the information presented in one section at a time. My idea was to put all the organization data (including the titles of the menus) in a json object. In this way the code can be re-used for a different organization with a minimum effort. I am still working on the project because I want to add the image references to the json object too. This will make the page transformation even faster.",
				url:"https://karl74.github.io/basicPage/",
				pictures:["./churchpagefit.png", "./churchInPhone.png"],
				buttonText:"Visit the page"
			}
			]
		}	
	},
	spanish:{
		navBar:{
			languages:["Ingles", "Espanol", "Frances"],
			links:["Inicio", "Proyectos", "Contacto" ]
		},
	home:{
		article:"Desarrollador web entusiasta con competencia de alto nivel en la creación de diseño y modificación de contenido receptivo web. Experiencia en comunicación efectiva con personas de diversos orígenes. Habilidades analíticas refinadas en la resolución de problemas. Atención a los detalles. Historial comprobado de éxito tanto en negocios como en educación. Creación y utilización de elementos de diseño gráfico. Fluidez en español",
		title:"DESARROLLADOR WEB",
		statement:"Desarrollador Full Stack | HTML, CSS, JavaScript, Node.js, Express, Bootstrap, Materialise, Firebase, MySQL, MongoDB, React.js, API / JSON, RESTful API, Ajax, control de versiones y línea de comandos.",
		buttonText:"Portafolio",
		portfolio:[
			{
				id:"leoBien",
				title:"Leo Bien",
				description:"Esta aplicación es una herramienta para enseñar alfabetización temprana a estudiantes de kinder y 1er grado en español. Presenta un conjunto de palabras que se utilizan para practicar diferentes habilidades de conciencia fonológica. Cada conjunto se puede mostrar en tres modos diferentes. En el modo de vocabulario, cada palabra se muestra en una diapositiva con una imagen; El profesor y los alumnos pueden leer la palabra en la pantalla. Los otros modos presentan la palabra como un cuestionario. La diapositiva puede mostrar una imagen de la palabra y tres opciones de respuesta con un componente fonológico que con la palabra de la imagen. Comienzo a construir este proyecto aparte de las clases de UT. Lo dije con un conocimiento muy limitado de JavaScript y CSS. Cuando aprendo JQuery, reescribo la mayor parte del código. La idea era mostrar la aplicación en menos páginas. Este proyecto es muy significativo para mí y todavía estaré trabajando en él por un tiempo. Uno de los componentes que quiero agregar es una base de datos. Quiero que la aplicación proporcione algunos datos para medir el progreso del estudiante.",
				url:"https://karl74.github.io/Leo_bien/",
				pictures:["./LeoBienDesk.png", "./LeoBienPhone.png"],
				buttonText:"Visita la pagina"
			},
			{
				id:"hangman",
				title:"Ahorcado",
				description:"Este es un simple juego del ahorcado con una lista de ciudades en Alemania. Como maestro de primaria, era difícil crear un juego con la imagen de un hombre ahorcado. Por esa razón, creo una representación abstracta de un hombre. El hombre es una columna de rectángulos blancos que se vuelven de color rojo sangriento cada vez que el jugador pierde una letra. Cada letra se muestra dentro de un div rosado que coincide con el color del fondo. Cada div rosa se muestra dentro de un div blanco. El ancho del div blanco se ajusta para acomodar el número de letras en la palabra. Utilicé CSS flex-box para distribuir equitativamente los cuadros rosados ​​y hacer que el div blanco parezca una estantería.",
				url:"http://www.carloscastro.online/api/hangman",
				pictures:["./hangmanDesk.png", "./hangPhone.png"],
				buttonText:"Visita la pagina"
			},
			{
				id:"reactPage",
				title:"Pagina en React",
				description:"Mi idea con este proyecto era crear un sitio web para cualquier organización pequeña como un parque comunitario, una iglesia o un club de lectura. Un grupo como este tiene información muy básica que puede ajustarse en una página, pero el usuario puede entender mejor si la información se presenta en una sección a la vez. Mi idea era poner todos los datos de la organización (incluidos los títulos de los menús) en un objeto json. De esta manera, el código se puede reutilizar para una organización diferente con un mínimo esfuerzo. Todavía estoy trabajando en el proyecto porque también quiero agregar las referencias de imagen al objeto json. Esto hará que la transformación de la página sea aún más rápida.",
				url:"https://karl74.github.io/basicPage/",
				pictures:["./churchpagefit.png", "./churchInPhone.png"],
				buttonText:"Visita la pagina"
			}
			]
		}	
	},
	french:{
		navBar:{
			languages:["Anglais", "Espagnol", "Français"],
			links:["Accueil", "projets", "contactez"]
		},
	home:{
		article:"Développeur Web enthousiaste avec une compétence de haut niveau dans la création de conception et de modification de contenu sensible au Web. Expérience en communication efficace avec des personnes d'horizons divers. Compétences analytiques raffinées en résolution de problèmes. Attention au détail. Histoire éprouvée de succès dans les affaires et l'éducation. Création et utilisation d'éléments de conception graphique. Couramment en espagnol",
		title:"DÉVELOPPEUR WEB",
		statement:"Développeur Full Stack | HTML, CSS, JavaScript, Node.js, Express, Bootstrap, Materialise, Firebase, MySQL, MongoDB, React.js, API / JSON, API RESTful, Ajax, contrôle de version et ligne de commande.",
		buttonText:"Portefeuille",
		portfolio:[
			{
				id:"leoBien",
				title:"Leo Bien",
				description:"Cette application est un outil pour enseigner l'alphabétisation précoce aux élèves de la maternelle et de la première année en espagnol. Il présente un ensemble de mots qui sont utilisés pour pratiquer différentes compétences de conscience phonologique. Chaque ensemble peut être affiché dans trois modes différents. En mode vocabulaire, chaque mot est affiché sur une diapositive avec une image; l'enseignant et les élèves peuvent lire le mot à l'écran. Les autres modes présentent le mot comme un quiz. La diapositive peut montrer une image du mot et trois choix de réponse avec une composante phonologique qu'avec le mot de l'image. Je commence à construire ce projet en dehors des classes UT. Je l'ai déclaré avec une connaissance très limitée de JavaScript et CSS. Lorsque j'apprends JQuery, je réécris la plupart du code. L'idée était d'afficher l'application en moins de pages. Ce projet est très significatif pour moi et je vais encore y travailler pendant un certain temps. L'un des composants que je veux ajouter est une base de données. Je veux que l'application fournisse des données pour mesurer les progrès des élèves.",
				url:"https://karl74.github.io/Leo_bien/",
				pictures:["./LeoBienDesk.png", "./LeoBienPhone.png"],
				buttonText:"Visitez la page"
			},
			{
				id:"hangman",
				title:"Bourreau",
				description:"Il s'agit d'un jeu de bourreau simple avec une liste de villes en Allemagne. En tant qu'enseignant au primaire, il était difficile de créer un jeu avec l'image d'un homme pendu. Pour cette raison, je crée une représentation abstraite d'un homme. L'homme est une colonne de rectangles blancs qui deviennent rouge sanglant à chaque fois que le joueur manque une lettre. Chaque lettre est affichée à l'intérieur d'un div rose qui correspond à la couleur de l'arrière-plan. Chaque div rose est affiché à l'intérieur d'un div blanc. La largeur du div blanc est ajustée pour s'adapter au nombre de lettres du mot. J'ai utilisé CSS flex-box pour répartir également les boîtes roses et faire en sorte que le div blanc ressemble à une bibliothèque.",
				url:"http://www.carloscastro.online/api/hangman",
				pictures:["./hangmanDesk.png", "./hangPhone.png"],
				buttonText:"Visitez la page"
			},
			{
				id:"reactPage",
				title:"ReactPage",
				description:"Mon idée avec ce projet était de créer un site Web pour toute petite organisation comme un parc communautaire, une église ou un club de lecture. Un groupe comme celui-ci a des informations très basiques qui peuvent être regroupées sur une seule page, mais l'utilisateur peut mieux comprendre les informations présentées dans une section à la fois. Mon idée était de mettre toutes les données d'organisation (y compris les titres des menus) dans un objet json. De cette façon, le code peut être réutilisé pour une organisation différente avec un minimum d'effort. Je travaille toujours sur le projet car je veux également ajouter les références d'image à l'objet json. Cela rendra la transformation de la page encore plus rapide.",
				url:"https://karl74.github.io/basicPage/",
				pictures:["./churchpagefit.png", "./churchInPhone.png"],
				buttonText:"Visitez la page"
			}
			]
		}	
	}

}
	export default data