# Spuštění aplikace

<!-- [CR] chybí mi tu závislosti, např. jaká verze node -->
- Otevřít projekt a nainstalovat potřebné moduly pomocí příkazu `yarn install`
- spustit index.js soubor pomocí příkazu `node src/index.js` <!-- [CR] proč ne přes yarn? -->

# Otestování aplikace

Pro otestování správného chodu aplikace je ideální použít API platformu jako např. Postman.
Endpoint, který vrací stav aplikace nepotřebuje žádnou další konfiguraci. stačí poslat GET request na `localhost:3000/status`
Druhý endpoint, který vrací údaje o kartě ještě potřebuje nastavení základní HTTP autentizace pomocí jména a hesla. Tyto údaje jsou pro jednoduchost napevno uložené v kódu.

- username: `admin`
- password: `admin`

<!-- [CR] škoda, že není k dispozici openapi/swagger -->
