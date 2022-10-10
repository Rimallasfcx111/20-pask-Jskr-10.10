'use strict';
console.log('uzd1 failas');
// 1. susikurti kintamuosius vardas, salis, megstamiausiasSkaicius, megstamiausia savaites diena (skaiciais 1-7)
let vardas = 'Jane';
let salis = 'Malaizija';
let megstamiausiasSkaicius = 77;
let megstSavDiena = 3;
let arVairuojuMasina = true;

// 2. isvedam i konsole visus savo kintamiuosiu atskirai
console.log('cia yra vardas:', vardas);
console.log('salis:', salis);
console.log('megstamiausiasSkaicius:', megstamiausiasSkaicius);
// 3. atspausdinam konsoleje savo megstamiausio skaiciau ir dienos daugyba
let rezultatas = megstSavDiena * megstamiausiasSkaicius;
console.log('rezultatas', rezultatas);

// 4. atspausdinam konsoleje savo megstamiausio skaiciau is dienos sudeti
let user = {
    asEsu: 'John',
    noreciauKel: 'Jamaika',
    megSk: '777',
}
console.log('user.asEsu ===', user.asEsu);
console.log('user.noreciauKel', user.noreciauKel);
console.log('user.megSk', user.megSk);



// 5. atspausdinam konsoleje naudodami kintamuosius "as esu John. noreciau keliausi i Jamaika. Mano megstamiausias skaicius yra 777"