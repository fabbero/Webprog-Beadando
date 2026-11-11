Tanulói jegykezelő
AnuglarJS 1.x + Typescript + Bootstrap 5 alapú feladat

Futtatás

1. Telepítés zip-ként, kicsomagolás és az index.html-re duplakattintással megnyitod.

Ha csak index.html és main.ts

2. Ha csak azt a két fájlt telepítetted akkor következő lépések. 
       Kódszerkesztő mint például Visual Studio Code-al a mappa megnyitása (Visual Studio Code telepítése innen: https://code.visualstudio.com/). 

3. Egy új PowerShell terminál megnyitása. 
       CMD: node -v, Ha ez hibára fut akkor nodejs telepítése innen: https://nodejs.org/en/download . 
       CMD: npm -v

4. TypeScript telepítése. 
       CMD: "npm install -g typescript" .
       Ha erre a hibára fut: "npm cannot be loaded because running scripts is disabled on this system" . 
       Akkor a következőt kell a terminálba írni: "Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser" .
       Ezután egy "y"-t írni válaszként. 
       Ez engedélyezi a futtatását. Viszont módosítani fog beállításokon amiket ha nem értesz nézz utánna. 

5. TypeScript telepítés ellenőrzése. 
       CMD: "tsc -v" . Ez ki fog írni egy verziószámot. 
       Ha ez megjelent akkor: tsc main.ts Ez le fog generálni egy javascript verziót a main.ts-hez. Ha semmi egyebet nem adtál meg nekki akkor ugyanabba a mappába. 

6. Ha megjelent a main.js akkor egyszerűen az 1. lépés újra. 

Mit hol találsz:

- main.ts-ben találod jegyekkel való számolási funkciókat illetve a statikus kezdőadatokat
- main.ts-ben legtöbb funkció el van látva minimális kommenteléssel
- index.html-ben a container div-ben található a weboldal html-kódja
- index.html script-tagjában található az AngularJS funkciók implementálása
- index.html-ben a legtöbb dolog minimális kommenteléssel el van látva


Funckiók

- Jegyek átlagának, átmenő tanulók száma és százalékának kimutatása
- Új elemek felvétele / Meglévő elemek módosítása
- Hiba / Siker Üzenet kiírása
- Elemek kimutatása (tanuló neve, jegye, megjegyszés és javíthatósági lehetőség)
- Elemek közötti szűrés / Szűrésnek megszüntetése
- Elemek javítási értékeének módosítása
- Elemek törlése / Módosítása
