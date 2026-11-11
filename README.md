Tanulói jegykezelő
AnuglarJS 1.x + Typescript + Bootstrap 5 alapú feladat

Futtatás
0. (Ha módoszítani szeretnél akkor ajánlott telepíteni egy kódszerkezstőtm mint például a Visual Studio Code
       Link: https://code.visualstudio.com/)

1. Kipróbálni hogy vannak-e a kellő programok a gépen:
       CMD: node -v
   Ha ez hibára fut akkor telepíteni kell a node.js-t a "https://nodejs.org/en/download" linkről.
   Fontos, hogy a LTS változatát telepítsük

2. Ha node.js telepítve van akkör a következő kódot kell futtatni.
       CMD: npm -v
   Hogyha azt üzeni hibaként hogy "npm cannot be loaded because running scripts is disabled on this system"
   akkor a következőt kell a terminálba írni.
       CMD: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser 
   és egy "y"-t nyomni utánna. Ez engedélyezi a futtatását. Viszont módosítani fog beállításokon amiket ha nem értesz nézz utánna.

3. Megnézés hogy a typescript csomag telepítve van-e.
       CMD: tsc -v
   Ha ez hibára fut akkor nincs telepítve. Akkor a következőt kell beírni a terminálba.
       CMD: npm install -g typescript
   Ez ha le fut akkor az első parancsot újra beírni és lefuttatni. Ha telepedett akkor egy verzió számot kell hogy kiírjon.

4. Ha az előző lépések megvoltak akkor csak annyit kell beírni ha nincs meg a "main.js" fájl, hogy
       CMD: tsc main.ts
   Ez le fogja generálni a kellő main.js fájlt és futtathatóvá teszi a weboldalt.

5. Ha létrejótt a main.js fájl akkor egyszerűen csak meg kell nyitni az index.html-t a számítógépen és működni fog.
       Fontos, hogy az index.html és a main.js egy mappában legyenek.

6. Ehhez a feltöltéshez van alapértelmezetten a main.js fájl is csatolva, hogy ha esetleg nem sikerülne bármelyik lépés
   attól függetlenül még ki lehessen próbálni illetve működtetni.

Funckiók

- Jegyek átlagának, átmenő tanulók száma és százalékának kimutatása
- Új elemek felvétele
- Hiba / Siker Üzenet kiírása
- Elemek kimutatása (tanuló neve, jegye, megjegyszés és javíthatósági lehetőség)
- Elemek közötti szűrés / Szűrésnek megszüntetése
- Elemek javítási értékeének módosítása
- Elemek törlése / Módosítása
