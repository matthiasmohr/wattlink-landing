import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-prozess',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgClass
  ],
  templateUrl: './prozess.component.html',
  styleUrl: './prozess.component.scss'
})
export class ProzessComponent implements OnInit {
  constructor(
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    //this.cdr.detectChanges();
  }

  steps = [
    {
      number: 1,
      title: 'Anfrage erstellen',
      subtitle: 'Schritt 1',
      description: 'Stellen Sie eine Anfrage und sagen Sie uns, wie sie die erforderliche Dateneingabe vornehmen wollen. Allein, mit uns zusammen oder durch uns.',
      image: 'assets/images/general/process_1.webp',
      order: 'order-0'
    },
    {
      number: 2,
      title: 'Verifizierung & Beratung',
      subtitle: 'Schritt 2',
      description: 'Zusammen mit uns nehmen wir alle erforderlichen Daten und Legitimationen auf, damit anschließend alles von selbst für Sie gemacht werden kann.',
      image: 'assets/images/general/process_2.webp',
      order: 'order-lg-1'
    },
    {
      number: 3,
      title: 'Preisabfrage',
      subtitle: 'Schritt 3',
      description: 'Wir gehen auf unsere Partner zu und erfragen den optimalen Preis für Sie. Natürlich nehmen wir in die Liste auch immer ihren bisherigen oder präferierten Partner mit auf.',
      image: 'assets/images/general/process_3.webp',
      order: 'order-0'
    },
    {
      number: 4,
      title: 'Angebotsvergleich & Entscheidung',
      subtitle: 'Schritt 4',
      description: 'Wir vergleichen alle Angebote, setzen sie ins Verhältnis, berücksichtigen qualitative Faktoren wie Flexibilität und Preissicherheit.',
      image: 'assets/images/general/process_4.webp',
      order: 'order-lg-1'
    },
    {
      number: 5,
      title: 'Vertrag',
      subtitle: 'Schritt 5',
      description: 'Der finale Preis wird festgezurrt, Verträge werden unterschrieben und Sie haben einen neuen Vertrag zu optimalen Konditionen.',
      image: 'assets/images/general/process_5.webp',
      order: 'order-0'
    },
    {
      number: 6,
      title: 'Wechselprozesse',
      subtitle: 'Schritt 6',
      description: 'Häufig treten bei allen Dateneingaben und Wechselprozessen zwischen Versorgern weitere Informations- und Abstimmungsbedarfe auf.',
      image: 'assets/images/general/process_6.webp',
      order: 'order-lg-1'
    },
    {
      number: 7,
      title: 'Dauerhaft sorglos sparen',
      subtitle: 'Schritt 7',
      description: 'Sie erleben die optimalen Strompreise, wir prüfen Ihre Rechnungen und Ihre Verbrauchskurven.',
      image: 'assets/images/general/process_7.webp',
      order: 'order-0'
    },
    {
      number: 8,
      title: 'Stromify vergüten',
      subtitle: 'Schritt 8',
      description: 'Wir lassen unseren Service mit Ihrem Vorteil bezahlen. 10% Ihrer jährlichen Einsparung stellen wir Ihnen in Rechnung.',
      image: 'assets/images/general/process_8.webp',
      order: 'order-lg-1'
    }
  ]

  faqs = [
    {
      id: 'collapse1',
      headingId: 'heading1',
      question: 'Kann ich mit euch wirklich alles digital machen?',
      answer: 'ToDo'
    },
    {
      id: 'collapse2',
      headingId: 'heading2',
      question: 'Bekomme ich wirklich den besten Vertrag ohne Vor Ort Termin?',
      answer: 'ToDo'
    },
    {
      id: 'collapse3',
      headingId: 'heading3',
      question: 'Warum ist das für Firmen so viel komplizierter als für Privatpersonen?',
      answer: 'ToDo'
    },
    {
      id: 'collapse4',
      headingId: 'heading4',
      question: 'Kann ich meine Daten immer einsehen und ändern?',
      answer: 'ToDo'
    },
    {
      id: 'collapse5',
      headingId: 'heading5',
      question: 'Sind meine Daten geschützt?',
      answer: 'ToDo'
    },
    {
      id: 'collapse6',
      headingId: 'heading6',
      question: 'Liefert Stromify den Strom an mich?',
      answer: 'ToDo'
    },
    {
      id: 'collapse7',
      headingId: 'heading7',
      question: 'Mit wem schließe ich einen Vertrag für die Stromlieferung?',
      answer: 'ToDo'
    },
    {
      id: 'collapse8',
      headingId: 'heading8',
      question: 'Ist meine Stromversorgung immer gesichert auch wenn ich den Versorger wechsel?',
      answer: 'ToDo'
    },
    {
      id: 'collapse9',
      headingId: 'heading9',
      question: 'Gibt es Unterbrechung in der Stromversorgung bei einem Versorgerwechsel?',
      answer: 'ToDo'
    },
    {
      id: 'collapse10',
      headingId: 'heading10',
      question: 'Habe ich Versorgungsrisiken, wenn ich die Services von Stromify nutze?',
      answer: 'ToDo'
    },
    {
      id: 'collapse11',
      headingId: 'heading11',
      question: 'Warum liefert mir Stromify einen besseren Preis?',
      answer: 'ToDo'
    },
    {
      id: 'collapse12',
      headingId: 'heading12',
      question: 'Was zeichnet Stromify im Vergleich zu anderen Mittlern von Stromverträgen aus?',
      answer: 'ToDo'
    },
    {
      id: 'collapse13',
      headingId: 'heading13',
      question: 'Muss ich Stromify dauerhaft etwas bezahlen?',
      answer: 'ToDo'
    },
    {
      id: 'collapse14',
      headingId: 'heading14',
      question: 'Wie kann ich die Verträge bei meinem aktuellen Versorger kündigen?',
      answer: 'ToDo'
    },
    {
      id: 'collapse15',
      headingId: 'heading15',
      question: 'Wie kann ich die Verträge mit anderen Mittlern von Strom- oder Gasverträgen kündigen?',
      answer: 'ToDo'
    },
    {
      id: 'collapse16',
      headingId: 'heading16',
      question: 'Wie schnell kann mir Stromify neue Preise und einen neuen Vertrag liefern?',
      answer: 'ToDo'
    },
    {
      id: 'collapse17',
      headingId: 'heading17',
      question: 'Wie schnell kann ich in den neuen Vertrag kommen und von besseren Preisen profitieren?',
      answer: 'ToDo'
    }
  ]
}
