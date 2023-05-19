export default {
  auth: {
    login: {
      title: "Melden Sie sich bei Jobiz an",
      question: "Sie haben noch keinen Account?",
      redirect: "Account erstellen",
      submit: "Anmelden",
      forgotPassword: "Passwort vergessen?",
      google: "Melden mit Google an",
    },
    signUp: {
      title: "Willkommen bei Jobiz",
      question: "Sie haben bereits ein Konto?",
      redirect: "Anmelden",
      submit: "Registrieren",
      google: "Melden bei Google an",
    },
    inputs: {
      email: {
        label: "Email",
        placeholder: "Geben Sie Ihre E-Mail",
        error: "Ungültige Email",
        required: "E-Mail erforderlich",
      },
      password: {
        label: "Passwort",
        placeholder: "Geben Sie Ihr Passwort ein",
        required: "Passwort erforderlich",
        error:
          "Passwort sollte 6 bis 16 Zeichen lang sein, darunter 1 Groß-, 1 Kleinbuchstabe, 1 Sonderzeichen und 1 Ziffer",
      },
      firstName: {
        label: "Vorname",
        placeholder: "Geben Sie Ihren Vornamen ein",
        error: "Ungültiger Vorname",
        required: "Vorname erforderlich",
      },
      lastName: {
        label: "Nachname",
        placeholder: "Geben Sie Ihren Nachnamen ein",
        error: "Ungültiger Nachname",
        required: "Nachname erforderlich",
      },
    },
    thumbnail: {
      title: "Willkommen bei Jobiz",
      info: "Finden Sie Ihren perfekten Job",
    },
    forgotPassword: {
      title: "Ihr Passwort wiederherstellen",
      header: "Geben Sie Ihre E-Mail",
      info: "damit wir Ihnen einen Wiederherstellungslink senden können",
      submit: "Senden einen Link",
    },
    errors: {
      general: "Etwas schief gelaufen",
      notFound: "Kein Benutzer mit solchen Zugangsdaten gefunden",
      alreadyUsed: "E-Mail bereits im Einsatz",
    },
  },
  onboarding: {
    title: "Einrichtung des Accounts",
    info: "Füllen Sie den Fragebogen aus, Sie können diese Daten später in den Einstellungen aktualisieren",
    profileType: {
      header: "Wählen Sie Ihren Profiltyp aus",
      employer: {
        type: "Arbeitgeber",
        info: "Sie möchten einen geeigneten Kandidaten für Ihr Projekt/Ihre Position finden",
      },
      employee: {
        type: "Arbeitnehmer",
        info: "Ihr Ziel ist es, einen perfekten Job und Karrieremöglichkeiten zu finden",
      },
    },
    employee: {
      locationType: "Wählen Sie Ihren bevorzugten Arbeitsort",
      jobType: "Welche Art von Job Sie suchen?",
      jobCategory: "Sie sind spezialisiert auf:",
    },
    employer: {
      type: "Welche Art von Arbeitgeber sind Sie?",
      company: {
        title: "Bitte wählen Sie Ihr Unternehmen",
        position: "Was ist Ihre Position in diesem Unternehmen?",
        question: "Sie haben Ihr Unternehmen nicht gefunden?",
        redirect: "Sie können ein neues Firmenprofil erstellen",
      },
    },
    createCompany: {
      title: "Erstellen Sie ein Unternehmensprofil",
      name: {
        label: "Firmenname",
        placeholder: "geben Sie den Firmennamen ein",
      },
      employees: {
        label: "Wie groß ist Ihr Unternehmen?",
      },
      logo: {
        label: "Laden Sie hier Ihr Firmenlogo hoch",
      },
    },
  },
  general: {
    with: "mit",
    confirm: "Bestätigen",
  },
};
