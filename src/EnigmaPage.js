import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './App.css';

function EnigmaPage() {
  return (
    <div className="app-container">
      <header className="header">
        <Link to="/">
          <img src={logo} alt="Logo des Blogs" className="logo" />
        </Link>
      </header>

      <div className="content">
        <h1>🐿️Die Enigma und ihre Geschichte</h1>
      </div>
    <center>
    <p>Die Enigma ist eine der bekanntesten Chiffriermaschinen der Geschichte,<br></br>
    die von Arthur Scherbius in den frühen 1920er Jahren entwickelt wurde.<br></br>
    Ihre Entwicklung und Verwendung während des Zweiten Weltkriegs spielen eine zentrale Rolle<br></br>
    in der Geschichte der Kryptographie und der militärischen Kommunikation.</p><br></br>

        <h2>Entwiklung der Enigma</h2>
        <br></br>
        <p className="text">
        Arthur Scherbius meldete seine Chiffriermaschine im Frühjahr 1918 zum Patent an.<br></br>
        Die erste kommerzielle Version, die als „Handelsmaschine“ bekannt wurde,<br></br>
        wurde 1923 von der Chiffriermaschinen Aktiengesellschaft (ChiMaAG) in Berlin präsentiert.<br></br>
        Diese Maschine war darauf ausgelegt, den Nachrichtenverkehr durch die Zuweisung scheinbar willkürlicher Chiffren zu verschlüsseln,<br></br>
        die von einem identisch eingestellten Empfänger entschlüsselt werden konnten.<br></br>
        <br></br><br></br>
        Die Enigma I, die 1930 in den Dienst der deutschen Wehrmacht trat, war eine verbesserte Version,<br></br>
        die über ein Steckerbrett verfügte, um die Sicherheit weiter zu erhöhen. Die Maschine bestand aus einem Walzensatz,<br></br>
        der die Buchstaben bei jeder Eingabe neu chiffrierte,<br></br>
        was eine hohe Komplexität und Sicherheit in der Verschlüsselung ermöglichte.<br></br>
        </p>
    </center>
</div>
  );
}

export default EnigmaPage;