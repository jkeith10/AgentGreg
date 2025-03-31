# AgentGreg 🤖

<div align="center">
  <img src="https://raw.githubusercontent.com/jkeith10/AgentGreg/main/next/public/banner.png" height="300" alt="AgentGreg Logo"/>
  
  <p>
    <strong>Autonóm AI ügynökök konfigurálása és üzembe helyezése a böngészőben</strong>
  </p>

  <p>
    <a href="https://github.com/jkeith10/AgentGreg/blob/master/README.md"><img src="https://img.shields.io/badge/lang-English-blue.svg" alt="English"></a>
    <a href="https://github.com/jkeith10/AgentGreg/blob/master/docs/README.zh-HANS.md"><img src="https://img.shields.io/badge/lang-简体中文-red.svg" alt="简体中文"></a>
    <a href="https://github.com/jkeith10/AgentGreg/blob/master/docs/README.hu-Cs4K1Sr4C.md"><img src="https://img.shields.io/badge/lang-Hungarian-red.svg" alt="Hungarian"></a>
  </p>
</div>

## Áttekintés

Az AgentGreg lehetővé teszi az autonóm AI ügynökök konfigurálását és üzembe helyezését. Nevezze el saját egyedi AI-ját, és küldje el bármilyen elképzelhető cél elérésére. Az AI a feladatok végrehajtásával, ezek végrehajtásával és az eredményekből való tanulással próbálja elérni a célt 🚀

### Funkciók

- 🤖 **Autonóm AI Ügynökök**: Hozzon létre és helyezzen üzembe önállóan működő AI ügynököket
- 🧠 **Hosszú távú memória**: Az ügynökök emlékeznek és tanulnak a korábbi interakciókból
- 🌐 **Web böngészés**: Az ügynökök interakcióba léphetnek weboldalakkal és információkat gyűjthetnek
- 👨‍👩‍👦 **Emberi interakció**: Az ügynökök kommunikálhatnak és együttműködhetnek a felhasználókkal
- 🎯 **Célközpontú**: Állítson be konkrét célokat és figyelje az ügynök munkáját

## Gyors kezdés

Az AgentGreg használatának legegyszerűbb módja a projektben található automatikus beállítási CLI használata.

A CLI az AgentGreg számára beállítja a következőket:
- 🔐 Környezeti változók (és API kulcsok)
- 🗂️ Adatbázis (MySQL)
- 🤖 Backend (FastAPI)
- 🎨 Frontend (Next.js)

### Előfeltételek

- Node.js >= 18.0.0
- Docker és Docker Compose
- OpenAI API kulcs

### Telepítés

1. Klónozza a repository-t:
```bash
git clone https://github.com/jkeith10/AgentGreg.git
cd AgentGreg
```

2. Futtassa a beállítási szkriptet:
```bash
./setup.sh
```

3. Indítsa el az alkalmazást:
```bash
docker-compose up
```

4. Látogasson el a `http://localhost:3000` oldalra a böngészőben

## Kézi beállítás

Ha manuálisan szeretné beállítani:

1. Klónozza a repository-t:
```bash
git clone https://github.com/jkeith10/AgentGreg.git
cd AgentGreg
```

2. Másolja a példa környezeti fájlokat:
```bash
cp .env.example .env
cp next/.env.example next/.env
cp platform/.env.example platform/.env
```

3. Frissítse a környezeti változókat minden `.env` fájlban

4. Indítsa el a szolgáltatásokat:
```bash
# Backend indítása
cd platform
python -m venv venv
source venv/bin/activate  # Windows: .\venv\Scripts\activate
pip install -r requirements.txt
python main.py

# Frontend indítása
cd ../next
npm install
npm run dev
```

## Fejlesztés

### Projekt struktúra

```
AgentGreg/
├── next/           # Frontend (Next.js)
├── platform/       # Backend (FastAPI)
├── db/            # Adatbázis migrációk
├── docs/          # Dokumentáció
└── cli/           # Beállítási CLI
```

### Közreműködés

1. Forkolja a repository-t
2. Hozzon létre egy feature branch-et (`git checkout -b feature/amazing-feature`)
3. Commitolja a változtatásokat (`git commit -m 'Add some amazing feature'`)
4. Pusholja a branch-et (`git push origin feature/amazing-feature`)
5. Nyisson egy Pull Request-et

## Licenc

Ez a projekt MIT licenc alatt van - részletekért lásd a [LICENSE](LICENSE) fájlt.

## Támogatás

Ha problémába ütközik vagy kérdése van, kérjük:
1. Ellenőrizze a [dokumentációt](docs/)
2. Nyisson egy issue-t a GitHubon
3. Csatlakozzon a közösségi beszélgetésekhez

## Köszönetnyilvánítás

- ❤️-vel készítette: [jkeith10](https://github.com/jkeith10)
- Inspiráció: A nagy nyelvi modellek potenciálja
- Külön köszönet minden közreműködőnek és támogatónak
