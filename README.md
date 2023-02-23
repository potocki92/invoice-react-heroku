# invoice-react-heroku SERVER

Jest to server do obługi faktur ('invoices'). Deploy został wykonany na Heroku.
Technologie jakie wykorzystałem do utworzenia servera:

## Express

Do podstawowej obsługi POST, GET, DELETE, UPDATE wykorzystałem znany już wszystkim Express.js.
Server został postawiony na porcie 3001 i połączony z MongoDB.

## MongoDB

Do kontrolowania bazy danych użyto MongoDB. Nazwa użytkownika, hasło, cluster oraz nazwa bazy danych zachowana została w .env, a do konfiguracji użyto dotenv.

Model jaki wykorzystujemy do zapisaywania bazy danych znajduje się w "models/userModel.js".

## Controllers

POST, GET, DELETE, UPDATE do konkretnych działań znajdują się w folderze "controllers".

* clientControllers.js - wszystkie routes odpowiedzialne za naszych klientów
* invoiceController.js - wszystkie routes odpowiedzialne za faktury
* productsController.js - wszystkie routes odpowiedzialne za produkty
* userController.js - login oraz rejestracja użytkownika

## Routes 

Wszystkie routery za pomocą importu przenosimy do routes.js. Następnie w index.js uruchamiamy wymagany router za pomocą express.