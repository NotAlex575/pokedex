Pokedex

Un'applicazione web interattiva che permette di esplorare i Pokémon, visualizzarne i dettagli e filtrarli per nome e tipo. Realizzata con React, Vite e la PokeAPI.

_________________________________________________________________________________________________________________________________________________________________

<strong class="text-primary">Tecnologie utilizzate</strong>

React: Libreria JavaScript per la costruzione dell'interfaccia utente.

Vite: Strumento di build moderno per applicazioni web, noto per la sua velocità.

PokeAPI: API RESTful che fornisce dati dettagliati sui Pokémon.

Bootstrap 5: Framework CSS per una progettazione reattiva e componenti predefiniti.

React Router: Gestione della navigazione tra le pagine dell'applicazione.

ESLint: Strumento per il linting del codice JavaScript, per mantenere uno stile di codice coerente.


_________________________________________________________________________________________________________________________________________________________________

<strong class="text-primary">Installazione</strong>

Clona il repository:

git clone https://github.com/NotAlex575/pokedex.git


Naviga nella cartella del progetto:

cd pokedex


Installa le dipendenze:

npm install


Avvia l'applicazione in modalità sviluppo:

npm run dev


L'app sarà disponibile su http://localhost:5173
.

_________________________________________________________________________________________________________________________________________________________________

<strong class="text-primary">Funzionalità principali</strong>

Visualizzazione Pokémon: Elenco di 151 Pokémon con nome, immagine e tipi.

Ricerca per nome: Filtra i Pokémon digitando nel campo di ricerca.

Filtraggio per tipo: Seleziona un tipo dal menu a discesa per visualizzare solo i Pokémon di quel tipo.

Dettagli Pokémon: Cliccando su un Pokémon, si accede a una pagina con informazioni dettagliate come statistiche, abilità e evoluzioni.

_________________________________________________________________________________________________________________________________________________________________

<strong class="text-primary">Struttura del progetto</strong>

src/: Contiene tutti i file sorgente dell'applicazione.

components/: Componenti React riutilizzabili.

pages/: Componenti per le diverse pagine dell'app.

App.jsx: Componente principale che gestisce la struttura dell'app.

main.jsx: Punto di ingresso dell'applicazione.

public/: File statici come index.html.

package.json: Gestisce le dipendenze e gli script del progetto.

vite.config.js: Configurazione di Vite.

README.md: Questo file.

___________________________________________________________________________________________________________________________________________________________________

<strong class="text-primary">Dettagli tecnici</strong>

Gestione dello stato: Utilizzo di useState per gestire lo stato locale dell'applicazione.

Effetti collaterali: useEffect per il recupero dei dati dalla PokeAPI al caricamento del componente.

Navigazione: React Router per la gestione delle rotte e la navigazione tra le pagine.

Filtraggio: Funzioni di filtraggio per nome e tipo dei Pokémon.

Responsive Design: Layout adattivo grazie a Bootstrap 5.