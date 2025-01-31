import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Θέατρο Εξ Αρχής</h1>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Η Αποστολή μας</h2>
        <p>
          Η αποστολή μας είναι να δημιουργήσουμε έναν χώρο όπου η τέχνη, ο πολιτισμός και το θέατρο συναντιούνται για να
          εμπνεύσουν και να ψυχαγωγήσουν. Στο Θέατρο Εξ Αρχής φιλοξενούμε μια ποικιλία παραγωγών, συμπεριλαμβανομένων θεατρικών
          έργων ελληνικού ή παγκόσμιου ρεπερτορίου, πειραματικού θεάτρου και ποικίλων εκδηλώσεων. Παράλληλα, από το 2004
          λειτουργεί η σχολή θεάτρου του Εξ Αρχής. Ένα καλλιτεχνικό φυτώριο που αναπτύσσεται, εξελίσσεται και στοχεύει στην
          ανάδειξη του ηθοποιού και του κειμένου.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Η Ομάδα μας</h2>
        <p>
          Η Αστική μη κερδοσκοπική εταιρεία{' '}
          <Link href="/about-us" className="text-blue-700">
            «Θεατρικοί Ορίζοντες»
          </Link>{' '}
          και η ομάδα του θεάτρου Εξ Αρχής, στοχεύουν από το 1991 στο άρτιο καλλιτεχνικό και αισθητικό αποτέλεσμα. Εντός και
          εκτός Αθηνών στόχος μας είναι πάντα η τέχνη και όπως θα έλεγε ο Κάρολος Κουν το να «Κάνουμε Θέατρο για την ψυχή μας»
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Μείνετε Συνδεδεμένοι</h2>
        <p>
          Ακολουθήστε μας στο{' '}
          <a href="https://www.facebook.com/ExArchesTheatro" target="_blank" className="text-blue-700">
            Facebook
          </a>{' '}
          και το{' '}
          <a href="https://www.instagram.com/exarchis.theatre/" target="_blank" className="text-blue-700">
            Instagram
          </a>{' '}
          για να λαμβάνετε τις τελευταίες ενημερώσεις σχετικά με τις επερχόμενες παραστάσεις, εκδηλώσεις, αλλά και παρασκηνιακές
          ματιές στις παραγωγές μας. Γίνετε μέλος της ομάδας μας και των όσων συμβαίνουν εντός και εκτός σκηνής.
        </p>
      </section>
      <section className="text-center">
        <p>Σας ευχαριστούμε που υποστηρίζετε το Θέατρο Εξ Αρχής. Ανυπομονούμε να σας δούμε από κοντά!</p>
      </section>
    </div>
  );
}
