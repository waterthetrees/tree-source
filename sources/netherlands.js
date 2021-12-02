export default [
  {
    country: "Netherlands",
    city: "Amsterdam",
    short: "Amsterdam",
    long: "Gemeente Amsterdam",
    id: "amsterdam1",
    id_city_name: "amsterdam1",
    primary: "amsterdam1",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://maps.amsterdam.nl/open_geodata/?k=254",
    srs: null,
    brokenDownload: false,
    download:
      "https://maps.amsterdam.nl/open_geodata/excel.php?KAARTLAAG=BOMEN&THEMA=bomen1",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      common: "Soortnaam_NL",
      scientific: "Soortnaam_WTS",
      location: "Boomtype",
      height: "Boomhoogte",
      planted: "Plantjaar",
      owner: "Eigenaar",
    },
  },
  {
    country: "Netherlands",
    city: "Amsterdam",
    short: "Amsterdam",
    long: "Gemeente Amsterdam",
    id: "amsterdam2",
    id_city_name: "amsterdam2",
    primary: "amsterdam1",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://maps.amsterdam.nl/open_geodata/?k=255",
    srs: null,
    brokenDownload: false,
    download:
      "https://maps.amsterdam.nl/open_geodata/excel.php?KAARTLAAG=BOMEN&THEMA=bomen2",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      common: "Soortnaam_NL",
      scientific: "Soortnaam_WTS",
      location: "Boomtype",
      height: "Boomhoogte",
      planted: "Plantjaar",
      owner: "Eigenaar",
    },
  },
  {
    country: "Netherlands",
    city: "Amsterdam",
    short: "Amsterdam",
    long: "Gemeente Amsterdam",
    id: "amsterdam3",
    id_city_name: "amsterdam3",
    primary: "amsterdam1",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://maps.amsterdam.nl/open_geodata/?k=256",
    srs: null,
    brokenDownload: false,
    download:
      "https://maps.amsterdam.nl/open_geodata/excel.php?KAARTLAAG=BOMEN&THEMA=bomen3",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      common: "Soortnaam_NL",
      scientific: "Soortnaam_WTS",
      location: "Boomtype",
      height: "Boomhoogte",
      planted: "Plantjaar",
      owner: "Eigenaar",
    },
  },
  {
    country: "Netherlands",
    city: "Amsterdam",
    short: "Amsterdam",
    long: "Gemeente Amsterdam",
    id: "amsterdam4",
    id_city_name: "amsterdam4",
    primary: "amsterdam1",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://maps.amsterdam.nl/open_geodata/?k=257",
    srs: null,
    brokenDownload: false,
    download:
      "https://maps.amsterdam.nl/open_geodata/excel.php?KAARTLAAG=BOMEN&THEMA=bomen4",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      common: "Soortnaam_NL",
      scientific: "Soortnaam_WTS",
      location: "Boomtype",
      height: "Boomhoogte",
      planted: "Plantjaar",
      owner: "Eigenaar",
    },
  },
  {
    country: "Netherlands",
    city: "Den Haag",
    short: "Den Haag",
    long: "Den Haag",
    id: "haag",
    id_city_name: "haag",
    primary: "haag",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://data.overheid.nl/dataset/bomen-csv",
    srs: null,
    brokenDownload: false,
    download:
      "https://ckan.dataplatform.nl/dataset/dd3873f6-b2d0-42e8-94c7-f7b47dcb71f0/resource/7ac8ba4a-586e-43f2-b12e-014079c83f00/download/bomen-csv.zip",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      ref: "BOOMNUMMER",
      scientific: "BOOMSOORT_WETENSCHAPPELIJ",
      dbh: "STAMDIAMETERKLASSE",
      maturity: "LEEFTIJDSKLASSE",
      age: "LEEFTIJD",
      owner: "EIGENAAR",
    },
  },
  {
    country: "Netherlands",
    city: "Hilversum",
    short: "Hilversum",
    long: "Hilversum",
    id: "hilversum",
    id_city_name: "hilversum",
    primary: "hilversum",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://data.overheid.nl/dataset/bomen-hilversum",
    srs: null,
    brokenDownload: true,
    download:
      "https://ckan.dataplatform.nl/dataset/08fa5613-ec8f-4e43-ba2f-db986615075e/resource/2ae335c9-4228-4d4c-81a1-6688aa7218ac/download/bomenhilversum.csv",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      scientific: "BOOMSOORT_WETENSCHAPPELIJK",
      common: "BOOMSOORT_NEDERLANDS",
      height: "BOOMHOOGTE",
      planted: "PLANTSEIZOEN",
    },
  },
  {
    country: "Netherlands",
    city: "Tilburg",
    short: "Tilburg",
    long: "Tilburg",
    id: "tilburg_nl",
    id_city_name: "tilburg_nl",
    primary: "tilburg_nl",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://data.overheid.nl/dataset/bomen-tilburg",
    srs: null,
    brokenDownload: false,
    download:
      "https://ckan.dataplatform.nl/dataset/96b46ab5-7638-46bb-b416-c480170b9a84/resource/6f639eb1-7497-4fc7-831b-d24e077bfe45/download/bomen.csv",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      updated: "datum_gemeten",
      ref: "boomnummer",
      scientific: "latijnse_boomnaam",
      common: "nederlandse_boomnaam",
      planted: "plantjaar",
      dbh: "diameter_in_cm",
      height: "boomhoogte",
    },
  },
  {
    country: "Netherlands",
    city: "Eindhoven",
    short: "Eindhoven",
    long: "Eindhoven",
    id: "eindhoven_nl",
    id_city_name: "eindhoven_nl",
    primary: "eindhoven_nl",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://data.overheid.nl/dataset/bomen-eindhoven",
    srs: null,
    brokenDownload: false,
    download:
      "https://ckan.dataplatform.nl/dataset/23d824dc-158f-4e23-8bbf-c10c00ce73cf/resource/0c8e87ba-0fde-48e4-a997-7abd04c7c692/download/bomen29-01.csv",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      scientific: "LATIJNSENA",
      common: "BOOMSOORT",
      planted: "PLANTJAAR",
      height: "HOOGTE",
      dbh: "DIAMETER",
      health: "VITALITEIT",
    },
  },
  {
    country: "Netherlands",
    city: "Amersfoot",
    short: "Amersfoot",
    long: "Amersfoot",
    id: "amersfoot_nl",
    id_city_name: "amersfoot_nl",
    primary: "amersfoot_nl",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://data.overheid.nl/dataset/amersfoort-gemeentelijke_bomen",
    srs: null,
    brokenDownload: false,
    download:
      "https://ckan.dataplatform.nl/dataset/a6054acf-3e41-4142-9b1a-52d73ff022f3/resource/7794f7e2-8bb9-45ba-9a9f-df910b09c40f/download/amersfoort-gemeentelijke_bomen.csv",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      location: "BOOMKLASSE",
      height: "BOOMHOOGTE",
      owner: "BEHEERDER",
      crown: "KROONDIAMETER",
      dbh: "STAMDIAMETER",
      ref: "ID",
      common: "NEDERLANDSE_NAAM",
      scientific: "BOOMSOORT",
      planted: "PLANTJAAR",
      ule: "LEVENSVERW",
    },
  },
  {
    country: "Netherlands",
    city: "Dordrecht",
    short: "Dordrecht",
    long: "Dordrecht",
    id: "dordrecht_nl",
    id_city_name: "dordrecht_nl",
    primary: "dordrecht_nl",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://data.overheid.nl/dataset/bomen-dordrecht",
    srs: null,
    brokenDownload: false,
    download:
      "https://ckan.dataplatform.nl/dataset/4c1cd59b-1057-4d47-bd84-f67a9cfd0f27/resource/94612e3e-eaac-4ac4-8db1-cdda2bdf361c/download/allebomendordrecht-2016-sep-2.csv",
    format: null,
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      ref: "ELEMENTNUMMER",
      scientific: "SRT_NAAM",
      common: "Nederlandse naam",
      height: "HOOGTE",
      dbh: "DIAMETER",
      installed: "AANLEGJAAR",
      owner: "EIGENDOM",
    },
  },
  {
    country: "Netherlands",
    city: "Lelystad",
    short: "Lelystad",
    long: "Lelystad",
    id: "lelystad_nl",
    id_city_name: "lelystad_nl",
    primary: "lelystad_nl",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://data.overheid.nl/dataset/bomen-lelystad",
    srs: null,
    brokenDownload: true,
    download:
      "https://ckan.dataplatform.nl/dataset/a510615b-165d-442a-8956-1df78feb321e/resource/c6950c16-dff5-40b4-b1b5-0b2a2dffb382/download/bomen.csv",
    format: null,
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      common: "SOORT_NED",
      scientific: "SOORT_LATIJN",
      height: "HOOGTE",
      health: "CONDITIE",
      updated: "INSPECTIEDATUM",
    },
  },
  {
    country: "Netherlands",
    city: "Sliedrecht",
    short: "Sliedrecht",
    long: "Sliedrecht",
    id: "sliedrecht_nl",
    id_city_name: "sliedrecht_nl",
    primary: "sliedrecht_nl",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://data.overheid.nl/dataset/bomen-sliedrecht",
    srs: null,
    brokenDownload: false,
    download:
      "https://ckan.dataplatform.nl/dataset/ab8997d4-8c32-4f96-aa3e-d5961baeaf6f/resource/fc898475-4fa6-47f3-9a9a-8e85acb7b6a4/download/sliedrechtbomen20170412.csv",
    format: null,
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      installed: "Aanlegjaar",
      common: "Naam_NL",
      ref: "Objectcode",
      scientific: "Boomsort",
    },
  },
  {
    country: "Netherlands",
    city: "Assen",
    short: "Assen",
    long: "Assen",
    id: "assen_nl",
    id_city_name: "assen_nl",
    primary: "assen_nl",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://data.overheid.nl/dataset/dataset-bomen-assen#panel-4-downloadable-files",
    srs: null,
    brokenDownload: true,
    download:
      "https://opendata.arcgis.com/datasets/3ad3233b9b1c4fb0bffb23b36b0474c9_0.csv",
    format: null,
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      ref: "BOOMNUMMER",
      updated: "DATUM",
      scientific: "BOOMSOORT",
      planted: "PLANTJAAR",
      height: "CODE_HOOGTE",
      health: "CONDITIE",
      owner: "EIGENAARSTYPE",
    },
  },
  {
    country: "Netherlands",
    city: "Arnhem",
    short: "Arnhem",
    long: "Arnhem",
    id: "arnhem_nl",
    id_city_name: "arnhem_nl",
    primary: "arnhem_nl",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://data.overheid.nl/dataset/bomenkaart-arnhem#panel-4-downloadable-files",
    srs: null,
    brokenDownload: false,
    download:
      "https://opendata.arcgis.com/datasets/4d988cd7848049d3a574fcbd477985be_0.csv",
    format: null,
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      ref: "BEHEERCODE",
      scientific: "BOOMSOORT",
      common: "NEDERLANDSE_NAAM",
      planted: "PLANTJAAR",
      owner: "EIGENAAR",
    },
  },
  {
    country: "Netherlands",
    city: "Delft",
    short: "Delft",
    long: "Delft",
    id: "delft_nl",
    id_city_name: "delft_nl",
    primary: "delft_nl",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://data.overheid.nl/dataset/bomen-in-beheer-door-gemeente-delft",
    srs: null,
    brokenDownload: true,
    download:
      "https://opendata.arcgis.com/datasets/e510d480282944c3a16c8a46d3d99064_0.csv?outSR=%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      ref: "ID_VELD",
      scientific: "BOOMSOORT_",
      height: "BOOMHOOGTE",
      health: "CONDITIE_K",
    },
  },
  {
    country: "Netherlands",
    city: "Groningen",
    short: "Groningen",
    long: "Groningen",
    id: "groningen_nl",
    id_city_name: "groningen_nl",
    primary: "groningen_nl",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://ckan.dataplatform.nl/dataset/9861d295-21cd-4ece-8648-88b141dc3532",
    srs: null,
    brokenDownload: false,
    download:
      "https://ckan.dataplatform.nl/dataset/9861d295-21cd-4ece-8648-88b141dc3532/resource/4a52525e-04ac-4934-8294-a2566986b24f/download/gem_groningen_bomen.zip",
    format: null,
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      common: "NEDNAAM",
      scientific: "LATNAAM",
      owner: "OMSCHRIJVP",
    },
  },
  {
    country: "Netherlands",
    city: "Alblasserdam",
    short: "Alblasserdam",
    long: "Alblasserdam",
    id: "alblasserdam_nl",
    id_city_name: "alblasserdam_nl",
    primary: "alblasserdam_nl",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://data.overheid.nl/dataset/bomen-alblasserdam",
    srs: null,
    brokenDownload: false,
    download:
      "https://ckan.dataplatform.nl/dataset/74c93ecc-82cc-46fa-8210-04818ae27279/resource/5bc33717-ff42-4aab-8bed-5ed0f618b1f8/download/gegevens-bomen-2017-alblasserdam.csv",
    format: null,
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: { scientific: "Boomsoort", common: "Boomsoort Nederlands" },
  },
  {
    country: "Netherlands",
    city: "Zvartewaterland",
    short: "Zvartewaterland",
    long: "Zvartewaterland",
    id: "zvartewaterland_nl",
    id_city_name: "zvartewaterland_nl",
    primary: "zvartewaterland_nl",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://data.overheid.nl/dataset/bomen-zwartewaterland",
    srs: null,
    brokenDownload: false,
    download:
      "https://opendata.arcgis.com/datasets/70e9a2ad03cf49a5a45b2076091b7ef3_0.csv",
    format: null,
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      common: "NEDBOOMSOORT",
      scientific: "LATBOOMSOORT",
      installed: "AANLEGJAAR",
    },
  },
  {
    country: "Netherlands",
    city: "Barendrecht",
    short: "Barendrecht",
    long: "Barendrecht",
    id: "barendrecht_nl",
    id_city_name: "barendrecht_nl",
    primary: "barendrecht_nl",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://data.overheid.nl/dataset/58765-bomen-barendrecht",
    srs: null,
    brokenDownload: false,
    download:
      "https://maps.bar-organisatie.nl/Online/Open%20Data%20Portaal/Barendrecht/Bomen/Bomen.CSV",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      owner: "BEHEERDER",
      common: "NEDBOOMSOORT",
      scientific: "LATBOOMSOORT",
      dbh: "DIAMETER",
      installed: "AANLEGJAAR",
      updated: "INSPECTIEDATUM",
    },
  },
  {
    country: "Netherlands",
    city: "Zaanstad",
    short: "Zaanstad",
    long: "Zaanstad",
    id: "zaanstad_nl",
    id_city_name: "zaanstad_nl",
    primary: "zaanstad_nl",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://data.overheid.nl/dataset/znstdor15o",
    srs: null,
    brokenDownload: false,
    download:
      "https://ckan.dataplatform.nl/dataset/fde68bfe-9e7b-4db6-9924-485166029eaf/resource/96c805d4-fd3c-41ce-8e35-c98b30513819/download/znstdor15o-bor_vegetatie.csv",
    format: null,
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: { scientific: "soortnaam_bomen" },
  },
  {
    country: "Netherlands",
    city: "Nijmegen",
    short: "Nijmegen",
    long: "Nijmegen",
    id: "nijmegen_nl",
    id_city_name: "nijmegen_nl",
    primary: "nijmegen_nl",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://opendata.nijmegen.nl/dataset/geoserver-bomen-nijmegen",
    srs: null,
    brokenDownload: true,
    download:
      "https://services.nijmegen.nl/geoservices/extern_OpenData/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=extern_kaartviewer_GRN_BOMEN&outputFormat=csv",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      ref: "ID",
      planted: "PLANTJAAR",
      scientific: "BOOMSOORT",
      updated: "DATUM_BIJGEWERKT",
    },
  },
  {
    country: "Netherlands",
    city: "Haarlem",
    short: "Haarlem",
    long: "Haarlem",
    id: "haarlem_nl",
    id_city_name: "haarlem_nl",
    primary: "haarlem_nl",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://www.haarlem.nl/opendata/open-data-detail/#/odp/odp_datasets.33",
    srs: null,
    brokenDownload: false,
    download:
      "https://data.haarlem.nl/geoserver/wfs?service=WFS&version=2.0&request=GetFeature&outputFormat=csv&srsName=EPSG%3A4326&typeName=gemeentehaarlem:bor_bomen&bbox=491380.2526954542,6859676.6140624685,532619.7473045458,6880323.3859375315,EPSG%3A3857",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      ref: "boomnummer",
      scientific: "name",
      age: "leeftijd",
      crown: "kroondiameter",
      owner: "beheerder",
    },
  },
  {
    country: "Netherlands",
    city: "Utrecht",
    short: "Utrecht",
    long: "Utrecht",
    id: "utrecht",
    id_city_name: "utrecht",
    primary: "utrecht",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://ckan.dataplatform.nl/dataset/bomenkaart/resource/2d6893b4-d56d-4865-b6cc-0bda42e547f5",
    srs: null,
    brokenDownload: false,
    download:
      "https://ckan.dataplatform.nl/datastore/dump/2d6893b4-d56d-4865-b6cc-0bda42e547f5?bom=True",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      scientific: "Naam_Wet",
      common: "Naam_NL",
      planted: "Plantjaar",
      ref: "Boomnr",
      owner: "Eigenaar",
    },
  },
];
