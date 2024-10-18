# React Router und useNavigate

Diese kleine Übung wird dir helfen, den React Hook `useNavigate` einzurichten und zu verwenden.

## Aufgaben

> 🧸 Sieh dir die vorhandenen Dateien an und mach dich mit dem Quellcode vertraut, bevor du anfängst!

### Aufgabe 1

Arbeite in der Datei [App.jsx](./src/App.jsx);

- Füge eine neue `<Route />` hinzu, die den Benutzer zur `Login`-Seite weiterleitet, wenn der `path` `login` entspricht
- Füge einen neuen `<Link>` zum `<nav>`-Element hinzu, damit der Benutzer zur `Login`-Seite navigieren kann

### Aufgabe 2

Arbeite in der Datei [components/Login.jsx](./src/components/Login.jsx);

- Füge einen Absende-`<button>` zur Seite hinzu
- Schreibe einen Handler, sodass beim Klicken auf den `<button>` die `userName` und `password` Anmeldedaten gegen das `loginData` Objekt validiert werden
  - Wenn die Anmeldedaten korrekt sind, leite den Benutzer mit dem `useNavigate` Hook zur `Home`-Seite weiter
  - Wenn die Anmeldedaten nicht korrekt sind, zeige eine Fehlermeldung auf der Seite an
  - Für die Fehlermeldung:
    - verwende ein `<p>`-Tag mit `error` als `className`
    - der Fehler sollte nach 3 Sekunden verschwinden

> 🤖 Hinweis: Für den Fehler musst du den `useState` Hook verwenden

> 🐴 Hinweis: Um den Fehler nach einigen Sekunden verschwinden zu lassen, verwende die `setTimeout` Funktion
