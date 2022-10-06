var backdrop = document.querySelector('.backdrop'); // var(promjenljiva) backdrop(ime promjenljive) = document(dom-vrijednost-pristup kodu).queryS(pristup elemetnu za selektor upita)('pozivamo argument iznutra')
var modal = document.querySelector('.modal'); // querySelector oznacava odabir prvog selektora po imenu u zagradi
var slecetPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobilenav = document.querySelector('.mobile-nav');
var modalactionnegative = document.querySelector('.modal__action--negative'); // klik "NO"
var ctaButton = document.querySelector('.nav-item-special'); // dodato dugme start hosting
// u promjenjivim dodati selektore sa kojima zelimo da raspolazemo

for (var i = 0; i < slecetPlanButtons.length; i++) { //for petlja koja kaze za svakog selectorPlanButtons izvrsi {ovo u zagradi}
  slecetPlanButtons[i].addEventListener('click', function() { // pristupam dugmadima [pristupamo odredjenom elementu] zatim dodati dogadjaj (prvi je tipa 'click' drugi kod koji treba da se izvrsi prilikom klika (funkcija))
    modal.classList.add('open'); // drugi nacin ( modal dodaje open iz CSS-a)
    backdrop.style.display = "block" /*(transform u backdrop-u se racuna kao display style) prvo postavljamo stil pozadine (aktiviramo), ekran je podesen za zakljucavanje a takodje i obrnuto za njegovo zatvaranje */
    setTimeout(function(){ /* kada kliknemo choose plan backdrop zatamni sliku u vremenu od 10 */ 
      backdrop.classList.add('open'); // drugi nacin
    }, 10);

    // modal.style.display = 'block'; // ista stvar kao i za backdrop
    // backdrop.style.display = 'block'; // pozivam funkciju zatim ugradjene stilove zatim display u toj selektoru i mijenjam iz none u block
  })
}

toggleButton.addEventListener('click', function() {
  mobilenav.classList.add('open');
  backdrop.style.display = "block"; /* sve sto je open ukljuciti taj stil*/
  setTimeout(function() { /* funkcija koja se izvrsava nakon datog vremenskog ogranicenja za toggle od mobil nave*/
    backdrop.classList.add("open"); /* zatamnjen ekran aktiviran - i vremenski period pored */
  }, 10) /* nakon 10 milicekundi funkcija ce se izvrsiti*/
  // mobilenav.style.display = 'block';
  // backdrop.style.display = 'block'; // otkrivamo backdrop da bi u funckiji dolje izgasili 
}) // dogadjajem na klik modelbuttom otvaramo mobilenav

backdrop.addEventListener('click', function() { // backdrop je u indexu na 101 (i obuhvata cijeli viewpoint) a mobilenav na 100
  mobilenav.classList.remove('open'); // uklanja opciju open
  //mobilenav.style.display = 'none';
  closeModal(); // kada izgasimo funkciju da bi se i backdrop ugasio i modal kako bi mogli ponovo da kliknemo na njega ili bilo dje
}); //dogadjajem na klik backdrop zatvaramo mobilenav

if (modalactionnegative) { // ako postoji dugme onda ce se izvrsavati (da ne opterecujemo kod ?)
modalactionnegative.addEventListener('click', closeModal); // na klik "NO" vratiti nazad na stranicu
}

function closeModal() { // funkcija koja mijenja oba stila
  if(modal) { // ako postoji dugme onda ce se izvrsavati (da ne opterecujemo kod ?) gasi prvo njega i po izlasku iz petlje gasi i bacdrop
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
  setTimeout(function() { /* funkcija koja se izvrsava nakon datog vremenskog ogranicenja, crna slika - i vremenski interval*/
  backdrop.style.display = "none"; /* zatvaramo stil koji je stavljen na block u 12 redu da zatamljenje traje i kada zatvaramo block*/
}, 100)
  // backdrop.style.display = 'none';
  // modal.style.display = 'none';
}

ctaButton.addEventListener('animationstart', function(event) { // umjesto klika ide animacija jer se o njoj radi. Ovo je registracija dogadjaja
  console.log('Animation started', event);
})

ctaButton.addEventListener('animationend', function(event) { // sve ovo je dnevnik odnosnos tamo evidencija dogadjaja u javascript
  console.log('Animation ended', event);
})

ctaButton.addEventListener('animationiteration', function(event) { // moze da se koristi da se pokrene nesto nakon sto se animacija zavrsi
  console.log('Animation iteration', event);
})