# WebServices 4. Semester Fitness
WebServices Projekt 4. Semester. Eine Internetseite, über die man seine Trainingseinheiten tracken kann und ggf. auch Ernährung.

Mitglieder: Ben Bieser, Dennis Moser und Tim Schulze

Startpunkt:   8. März 2023
Vorstellung:  31. März 2023
Abgabe:       2. April 2023

Kickoff:
Ideensammlung:
  - Login für Zugriff auf Daten
    - Was soll man angeben können? Gewicht, Alter, Größe, (BMI berechnen lassen?), E-Mail für Notifications?, weniger/mehr?
    - Entwicklung BMI, oder generell Updates in bestimmten Intervall?
    - 
  - Trainingsempfehlungen ohne Login 
    - Auswahl von Kraftaufbau (4-8 wdhlg.), Krafterhalt (10-15 wdhlg.), Kraftausdauer (>16 wdhlg) nur beispielwerte aktuell
    - Auswahl des Splits und der Muskelgruppe
    - vorgefertigter Trainnigstag mit Übungen, Sätzen und Wiederholungen 
    - 
  - Trainingsplanerstellung
    - wie oft die Woche wird angestrebt zu trinaieren (Oberkörper/Unterkörper, Brust/Rücken/Beine, Arme/Beine/Rücken/Brust etc.)
    - automatische Freigabe von Muskelgruppen -> Beine sind schon 3 Tage her können wieder, Brust vor 2 Tagen erst -> andere Muskelgruppe empfohlen
    - 
  - Dokumentation der Übungen
    - Gewicht, Wiederholungen und Sätze
    - ggf. Auswahl der Muskelregion zum ausgeglichenne Trainieren (nicht 5 mal Brust und 1 mal Trizeps als ein Training)
    - Entwicklung bei Gewicht/Wiederholungen (wahrscheinlich eher Gewicht relevant)
    - 

Projektidee:
Da als INformatiker häufig Sport an zweiter oder eher dritter Stelle steht war unser Plan die Erstellung einer Anwendung, über die man auf einen online Trainingsplan zugreifen kann. Der Trainingsplan soll bei der Einschätzung der eigenen Leistungen helfen und je nach Ziel entsprechend angepasste Übungen vorschlagen. Übungen des jeweiligen Trainings können herausgefiltert werden und Videobeispiele werden verlinkt. Der Trainingsplan ist eine Empgehlung und für die ordentliche Ausführung ist der trainierende selbst verantwortlich. 
Die Anwendung unterstützt beim Training, da man nach absolviertem Training seine Daten eintragen kann, welche dann von der Anwendung in Verbindung mit dem User abgespeichert wird und eine Historie des Trainingsverlaufs ermöglicht. Dieser Abschnitt ist unter dem Reiter "Meine Erfolge" aufgelistet. 


Dennis:


Ben:
Erstellung Rest APIs mit MongoDB Anbindung:
Benutzer API
-Post zum erstellen von Nutzern
-Verschiedene Post zum ändern der Nutzer Daten
-get um Nutzerdaten anzuzeigen
Training API
-Post zum eintragen eines Trainings
-get alle Trainings anzeigen
-get alle Trainings eines Nutzer anzuzeigen
-get um Trainingsplan eines Nutzers zu bekommen

Tim: 
Erstellung Frontend:
Das Frontend wurde mit html und CSS erstellt. Die Quellen der Seiteninhalte werden in einer externen Textdatei abgegenen (Name: Quellen). Anbindung an das Backend und die API in Zusammenarbeit mit Dennis.
BPMN: 
Das BPMN-Modell wurde mithilfe von Signavio erstellt auf Grundlage der Vorlesung bei Herrn Taut.
Erstellung der Dokumentation.
