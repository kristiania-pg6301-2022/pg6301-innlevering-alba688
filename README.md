# pg6301 innlevering: Alexandra & Martin

Målet med innleveringen er at man skal kjøre en webapplikasjon på skytjenesten Heroku. Applikasjonen skal være en quiz der brukeren får et quiz-spørsmål og skal velge riktig svar.

## Applikasjonen skal vise at dere behersker:
* Parcel
* React
* React Router
* Jest
* Github Actions
* Coveralls
* Express
* Heroku

## Oppsummert:
* Få en Parcel til å bygge en React applikasjon
* Få React Router til å navigere rundt i applikasjonen
* Få React til å hente og lagre informasjon til et API
* Få Github Actions til å kjøre Jest-testene og publisere coverage til Coveralls
* Få Heroku til å publisere websidene
* Express-serveren skal ha følgende API:
  * GET /api/question - returnerer et tilfeldig spørsmål med { id, category, question, answers }
  * POST /api/question - tar inn { id, answer } og returnerer "true" eller "false"
* Dere kan ta utgangspunkt i følgende eksempel på spørsmål, men dere må endre på formatet som returneres til klienten slik at klienten ikke vet hvilket alternativ som er riktig: https://quizapi.io/

## To-do:
* [ ] npm init and intalls on root, client and server projects
* [ ] setup basic react project
* [ ] setup basic express server
* [ ] add husky pre-commit hook
* [ ] tell Heroku how to build
* [ ] serve react from express
* [ ] ..tbd 🍄
