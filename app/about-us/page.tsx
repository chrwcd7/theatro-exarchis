import Image from 'next/image';

import eleniTsakalouImg from '../../public/eleni-tsakalou.jpeg';
import dinosSpyropoulosImg from '../../public/dinos-spyropoulos.jpg';

export default function AboutUs() {
  return (
    <>
      <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center sm:text-left">Οι Θεατρικοί Ορίζοντες</h1>
        <p className="text-lg leading-relaxed">
          Οι Θεατρικοί Ορίζοντες παρουσιάζουν κλασικά θεατρικά έργα του παγκόσμιου ρεπερτορίου, όμως ταυτόχρονα αναδεικνύουν και
          Έλληνες θεατρικούς συγγραφείς. Σε μια δύσκολη περιοχή όπως είναι τα Εξάρχεια, το Θέατρο «Εξ Αρχής», στο οποίο
          στεγάζονται οι «Θεατρικοί Ορίζοντες», δημιούργησαν μια εστία πολιτισμού. Μέσα από την εστία αυτή, επιδιώκεται η
          προβολή θεατρικών παραστάσεων με καλλιτεχνικό και εκπαιδευτικό χαρακτήρα. Το κοινό των Θεατρικών Οριζόντων αποτελούν
          παιδιά, νέοι και ενήλικες κάθε ηλικίας. Διαχρονικά, η ΑΜΚΕ αποδεικνύει μέσω της ποικιλίας των παραγωγών και των έργων
          με τα οποία καταπιάνεται, πως ενδιαφέρεται για την τέχνη του θεάτρου ολιστικά. Βασικοί σταθμοί στην πορεία της
          εταιρείας (χρονολογικά) αποτελούν αρχικά οι παραστάσεις για παιδιά και εφήβους του Ντίνου Σπυρόπουλου, στη συνέχεια τα
          τρία έργα του Ευγένιου Ιονέσκο (Το μάθημα, Η φαλακρή τραγουδίστρια, Οι καρέκλες), το Δωμάτιο της Βερόνικας του Άιρα
          Λέβιν και η νέα εποχή έργων για παιδιά με τις διασκευές της Ελένης Τσακάλου στα κλασικά παραμύθια (Η Κοκκινοσκουφίτσα,
          Η Χιονάτη, Ο Κοντορεβιθούλης). Στη συνέχεια, τα Αυγά της Στρουθοκαμήλου του Χρήστου Ναούμ, η Κυρία με το σκυλάκι του
          Άντον Τσέχωφ, Τα Παντρολογήματα του Νικολάι Γκόγκολ, Η παρέλαση και ο Ουρανός κατακόκκινος της Λούλας Αναγνωστάκη,
          έδωσαν μία άλλη πνοή στο σύνολο των έργων που ανέβηκαν από τους Θεατρικούς Ορίζοντες. Στα σχέδια της ΑΜΚΕ τώρα,
          βρίσκεται η στήριξη των σύγχρονων νεοελληνικών έργων, κάτι που θα επιδιωχθεί να επιτευχθεί μέσω του έργου «Λύκοι» του
          Ντίνου Σπυρόπουλου.
        </p>
      </section>
      <section className="mb-8 bg-white p-6 rounded-lg shadow-md flex flex-col items-center sm:items-start">
        <h1 className="text-4xl font-bold mb-4 text-center">Ελένη Τσακάλου</h1>
        <Image
          src={eleniTsakalouImg}
          alt="Ελένη Τσακάλου"
          width={200}
          height={200}
          className="mb-4 rounded-full object-cover"
        />
        <p className="text-lg leading-relaxed">
          Η Ελένη Τσακάλου είναι ηθοποιός και θεατρολόγος. Είναι η πρόεδρος των «Θεατρικών Οριζόντων» από το 1991. Έχει
          συμμετασχει σε πολυάριθμες παραστάσεις με το ΔΗ.ΠΕ.ΘΕ. Αγρινίου, σε επιθεωρήσεις του Χάρρυ Κλυνν, έχει ανεβάσει
          πολυάριθμα έργα για παιδιά και ανήλικους θεατές, πολλά εκ των οποίων έχει διασκευάσει η ίδια (π.χ «η Χιονάτη», «η
          Κοκκινοσκουφίτσα», «Ο Κοντορεβιθούλης»). Έχει παίξει στις «Καρέκλες» και στη «Φαλακρή τραγουδίστρια» του Ε.Ιονέσκο,
          στο έργο «Αυγά της Στρουθοκαμήλου» του Χ. Ναούμ, στον «Ουρανό Κατακόκκινο» της Λ. Αναγνωστάκη και στα «Παντρολογήματα»
          του Ν. Γκόγκολ - μεταξύ άλλων. Το 2004 ίδρυσε το εργαστήρι θεάτρου και Θέατρο Εξ Αρχής που εδρεύει στα Εξάρχεια.
          Τηλεοπτικά, μία από τις τελευταίες δουλειές της ήταν το “Milky Way” του σκηνοθέτη Βασίλη Κεκάτου.
        </p>
      </section>
      <section className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center sm:items-start">
        <h1 className="text-4xl font-bold mb-4 text-center">Ντίνος Σπυρόπουλος</h1>
        <Image
          src={dinosSpyropoulosImg}
          alt="Ντίνος Σπυρόπουλος"
          width={200}
          height={200}
          className="mb-4 rounded-full object-cover"
        />
        <p className="text-lg leading-relaxed">
          Ο Ντίνος Σπυρόπουλος γεννήθηκε στην Αχαΐα. Τελείωσε τη δραματική σχολή Βασίλη Ρίτσου. Έχει παίξει μεταξύ άλλων στο
          ΔΗ.ΠΕ.ΘΕ Αγρινίου στα Έργα «Δύσκολος του Μένανδρου», «Ειρήνη» του Αριστοφάνη, «Ματωμένος Γάμος» του Λόρκα, «Σπασμένη
          στάμνα» του Κλάιστ, «Το Στραβόξυλο», του Ψαθά, «Η Ντέαντρη των θλίψεων» του Σινγκ. Στο ΔΗ.ΠΕ.ΘΕ Σερρών στα έργα, «Τα
          καινούρια ρούχα του Βασιλιά» του Χ.Κ.Άντερσεν, «Οι Γερμανοί ξανάρχονται»,των Σακελάριου- Γιαννακόπουλου. Στο θίασο της
          Αλίκης Βουγιουκλάκη στο «Καμπαρέ». Θέατρο Αθηνά «Ιουλιέτα XL» (Πανοπούλου) Θέατρο Διάνα «Οι Γερμανοί ξανάρχονται»
          (Μουστάκας) Θέατρο Ζήνα «Το Σώσε», «Παράξενο ζευγάρι» (Κυριακίδης) Θέατρο προσκήνιο «Υπάρχει και φιλότιμο» (Μπέζος)
          Θεατρο Βέμπο. «Η δασκάλα με τα χρυσά μάτια» Θέατρο Βεάκη. «Κάποτε στο Βόσπορο» Θέατρο Αυλαία Θεσσαλονίκη. «Είμαι
          Χάλια» Την θεατρική σεζόν 2024-25 εμφανίζεται στο Θέατρο Κάτια Δανδουλάκη στο έργο «Ο Αόρατος επισκέπτης». Συμμετείχε
          ως ηθοποιός σε πάνω από 40 επιθεωρήσεις σε όλα τα μεγάλα μουσικά θέατρα της Αθήνας γράφοντας παράλληλα και τα κείμενα.
          Υπήρξε συγγραφικό ντουέτο με το Χάρρυ Κλυνν από το 1998 έως το 2008. Έχει γράψει τα θεατρικά έργα: «Γκόλφω forever»,
          «Αμοίρου Οδύσσεια», «Είμαι χάλια» (Έχουν εκδοθεί από τις εκδόσεις ΚΨΜ). «Κυρία Μπέμπα», «η Γιαγιά», «Λύκοι», «Ταλέντα
          για σκότωμα». «Η Κυρία με τας σαρδελίας» (Εκδόσεις Αιγόκερος) και το μυθιστόρημα «Φαρμακωμένη» (Εκδόσεις πρώτη ύλη).
        </p>
      </section>
    </>
  );
}
