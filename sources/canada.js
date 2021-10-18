export default [
  {
    country: "Canada",
    city: "Montreal",
    short: "Montreal",
    long: "Montreal",
    id: "montreal",
    id_city_name: "montreal",
    primary: "montreal",
    center: null,
    latitude: null,
    longitude: null,
    info: "http://donnees.ville.montreal.qc.ca/dataset/arbres",
    srs: null,
    download:
      "http://donnees.ville.montreal.qc.ca/dataset/3e3efad6-9f2f-4cc0-8f1b-92de1ccdb282/resource/c6c5afe8-10be-4539-8eae-93918ea9866e/download/arbres-publics.csv",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      scientific: "Essence_latin",
      common: "ESSENCE_ANG",
      dhb: "DHP",
      updated: "Date_releve",
      planted: "Date_plantation",
      ref: "EMP_NO",
    },
  },
  {
    country: "Canada",
    city: "Quebec City",
    short: "Quebec City",
    long: "Quebec City",
    id: "quebec",
    id_city_name: "quebec",
    primary: "quebec",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://www.donneesquebec.ca/recherche/fr/dataset/vque_26",
    srs: null,
    download:
      "https://www.donneesquebec.ca/recherche/fr/dataset/34103a43-3712-4a29-92e1-039e9188e915/resource/de031174-cbdf-4d69-869c-21cca8036279/download/vdq-arbrerepertorie.geojson",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      scientific: "NOM_LATIN",
      common: "NOM_FRANCAIS",
      dbh: "DIAMETRE",
      planted: "DATE_PLANTE",
      location: "NOM_TOPOGRAPHIE",
    },
  },
  {
    country: "Canada",
    city: "Longueuil",
    short: "Longueuil",
    long: "Ville de Longueuil",
    id: "longueuil",
    id_city_name: "longueuil",
    primary: "longueuil",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://www.longueuil.quebec/fr/donnees-ouvertes/arbres",
    srs: null,
    download:
      "https://www.longueuil.quebec/sites/longueuil/files/donnees_ouvertes/arbres.zip",
    format: "zip",
    filename: "Arbres.shp",
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      scientific: '(x) => String(x.Espece).split(" - ")[0]',
      common: '(x) => String(x.Espece).split(" - ")[1]',
      dbh: "DiamTronc",
    },
  },
  {
    country: "Canada",
    city: "Calgary",
    short: "Calgary",
    long: "City of Calgary",
    id: "calgary",
    id_city_name: "calgary",
    primary: "calgary",
    center: null,
    latitude: null,
    longitude: null,
    info: null,
    srs: null,
    download:
      "https://data.calgary.ca/api/views/tfs4-3wwa/rows.csv?accessType=DOWNLOAD",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      common: "COMMON_NAME",
      genus: "GENUS",
      species: "SPECIES",
      variety: "CULTIVAR",
      dbh: "DBH_CM",
      health:
        '(x) => {\n        if (x.TREE_CONDITION_RATING_PERC >= 70) return "Good";\n        if (x.TREE_CONDITION_RATING_PERC >= 50) return "Fair";\n        return "Poor";\n        // I have no idea\n      }',
      ref: "WAM_ID",
    },
  },
  {
    country: "Canada",
    city: "Edmonton",
    short: "Edmonton",
    long: "City of Edmonton",
    id: "edmonton",
    id_city_name: "edmonton",
    primary: "edmonton",
    center: null,
    latitude: null,
    longitude: null,
    info: null,
    srs: null,
    download:
      "https://data.edmonton.ca/api/views/eecg-fc54/rows.csv?accessType=DOWNLOAD",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      dbh: "DIAMETER_BREAST_HEIGHT",
      scientific: "SPECIES_BOTANICAL",
      common: "SPECIES_COMMON",
      health: "CONDITION_PERCENT",
      planted: "PLANTED_DATE",
      location: "LOCATION_TYPE",
      ref: "id",
    },
  },
  {
    country: "Canada",
    city: "Ottawa",
    short: "Ottawa",
    long: "Ottawa",
    id: "ottawa",
    id_city_name: "ottawa",
    primary: "ottawa",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://ouverte.ottawa.ca/datasets/inventaire-des-arbres",
    srs: null,
    download:
      "https://opendata.arcgis.com/datasets/451e904e2753453eb699b2e853ab5857_1.csv",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: { scientific: "SPECIES", ref: "SAP_ID" },
  },
  {
    country: "Canada",
    city: "Moncton",
    short: "Moncton",
    long: "Moncton",
    id: "moncton",
    id_city_name: "moncton",
    primary: "moncton",
    center: null,
    latitude: null,
    longitude: null,
    info: "http://ouvert.moncton.ca/datasets/arbres",
    srs: null,
    download:
      "https://opendata.arcgis.com/datasets/60d5b564e732444b81a650c7c4aa548a_0.csv?outSR=%7B%22latestWkid%22%3A2953%2C%22wkid%22%3A2036%7D",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      common: "BOTNAME",
      dbh: "DIAM",
      height: "HT",
      updated: "edited_date",
    },
  },
  {
    country: "Canada",
    city: "Waterloo",
    short: "Waterloo",
    long: "Waterloo",
    id: "waterloo",
    id_city_name: "waterloo",
    primary: "waterloo",
    center: null,
    latitude: null,
    longitude: null,
    info: "http://data.waterloo.ca/datasets/2447415303e74bb9acdf0f43c2236b72_0",
    srs: null,
    download:
      "https://opendata.arcgis.com/datasets/2447415303e74bb9acdf0f43c2236b72_0.zip",
    format: "zip",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      common: "COM_NAME",
      scientific: "LATIN_NAME",
      location: "TREE_TYPE",
      dbh: "DBH_CM",
      ref: "OBJECTID",
    },
  },
  {
    country: "Canada",
    city: "Winnipeg",
    short: "Winnipeg",
    long: "Winnipeg",
    id: "winnipeg",
    id_city_name: "winnipeg",
    primary: "winnipeg",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://data.winnipeg.ca/Parks/Tree-Inventory-Map/xyma-gm38",
    srs: null,
    download:
      "https://data.winnipeg.ca/api/views/h923-dxid/rows.csv?accessType=DOWNLOAD",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      ref: "tree_id",
      scientific: "botanical",
      common: "common",
      dbh: "dbh",
    },
  },
  {
    country: "Canada",
    city: "Vancouver",
    short: "Vancouver",
    long: "Vancouver",
    id: "vancouver",
    id_city_name: "vancouver",
    primary: "vancouver",
    center: null,
    latitude: null,
    longitude: null,
    info: null,
    srs: null,
    download:
      "https://opendata.vancouver.ca/explore/dataset/street-trees/download/?format=geojson&lang=en",
    format: "geojson",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      ref: "tree_id",
      genus: "genus_name",
      species: "species_name",
      variety: "cultivar_name",
      common: "common_name",
      height: "height_range_id",
      dbh: "(x) => Number(x.diameter) * 2.54",
      planted: "date_planted",
    },
  },
  {
    country: "Canada",
    city: "Surrey",
    short: "Surrey",
    long: "City of Surrey",
    id: "surrey",
    id_city_name: "surrey",
    primary: "surrey",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://data.surrey.ca/dataset/park-specimen-trees",
    srs: null,
    download:
      "http://data.surrey.ca/dataset/634d2f06-2214-49b3-9309-4baa51b61ec4/resource/86625e14-8d09-45e8-9b91-9d301d32b10e/download/parkspecimentrees.csv",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      genus: "TREE_GENUS",
      species: "TREE_SPECIES",
      variety: "TREE_VARIETY",
      ule: "YRS_LIFE_EXPECTANCY",
    },
  },
  {
    country: "Canada",
    city: "Toronto",
    short: "Toronto",
    long: "Toronto",
    id: "toronto",
    id_city_name: "toronto",
    primary: "toronto",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://open.toronto.ca/dataset/street-tree-data/",
    srs: null,
    download:
      "https://ckan0.cf.opendata.inter.prod-toronto.ca/download_resource/c1229af1-8ab6-4c71-b131-8be12da59c8e",
    format: "zip",
    filename: "TMMS_Open_Data_WGS84.shp",
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      dbh: "DBH_TRUNK",
      common: "COMMON_NAM",
      scientific: "BOTANICAL_",
    },
  },
  {
    country: "Canada",
    city: "Strathcona",
    short: "Strathcona",
    long: "Strathcona",
    id: "strathcona",
    id_city_name: "strathcona",
    primary: "strathcona",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://data.strathcona.ca/Environment/Tree/v78i-7ntw",
    srs: null,
    download:
      "https://data.strathcona.ca/api/views/v78i-7ntw/rows.csv?accessType=DOWNLOAD",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: { ref: "TreeSiteID", common: "Name" },
  },
  {
    country: "Canada",
    city: "Regina",
    short: "Regina",
    long: "Regina",
    id: "regina",
    id_city_name: "regina",
    primary: "regina",
    center: null,
    latitude: null,
    longitude: null,
    info: "http://open.regina.ca/dataset/city-of-regina-tree-inventory",
    srs: null,
    download:
      "https://ckanprodstorage.blob.core.windows.net/opendata/Tree/SHP_ZIP/shp.Tree.zip",
    format: "zip",
    filename: null,
    gdal_options: "-skipfailures",
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      common: "Species",
      owner: "Ownership",
      planted: "Year_Plant",
      dbh: "Diameter",
      value: "Tree_Value",
    },
  },
  {
    country: "Canada",
    city: "North Vancouver",
    short: "North Vancouver",
    long: "North Vancouver",
    id: "north_vancouver",
    id_city_name: "north_vancouver",
    primary: "north_vancouver",
    center: null,
    latitude: null,
    longitude: null,
    info: "http://geoweb.dnv.org/data/index.php",
    srs: null,
    download: "http://geoweb.dnv.org/Products/Data/SHP/EnvStreetTree_shp.zip",
    format: "zip",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      common: "COMMONNAME",
      genus: "GENUS",
      species: "SPECIES",
      dbh: "DBH_CM",
      height: "HEIGHT_M",
      health: "CONDITION",
      ref: "TAGNUMBER",
      location: "AM_TYPE_RE",
    },
  },
  {
    country: "Canada",
    city: "White Rock",
    short: "White Rock",
    long: "City of White Rock",
    id: "white_rock",
    id_city_name: "white_rock",
    primary: "white_rock",
    center: null,
    latitude: null,
    longitude: null,
    info: "http://data.whiterockcity.ca/dataset/tree",
    srs: null,
    download:
      "http://wroms.whiterockcity.ca/opendata/GIS/Data/Spatial/Parks/SHP/Tree.zip",
    format: "zip",
    filename: "Open_data/GIS/Data/Spatial/Parks/SHP/Tree.shp",
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: { scientific: "SpeciesNam", ref: "Tree_ID" },
  },
  {
    country: "Canada",
    city: "Kelowna",
    short: "Kelowna",
    long: "Kelowna",
    id: "kelowna",
    id_city_name: "kelowna",
    primary: "kelowna",
    center: null,
    latitude: null,
    longitude: null,
    info: "http://opendata.kelowna.ca/datasets/39d13a47b8f94cce82a9b4c86efc8ee7/data?geometry=-119.693%2C49.577%2C-119.178%2C49.887",
    srs: null,
    download:
      "https://opendata.arcgis.com/datasets/39d13a47b8f94cce82a9b4c86efc8ee7_114.zip?outSR=26911",
    format: "zip",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      genus: "GENUS",
      species: "species",
      common: "species_co",
      dbh: "DBH",
      ref: "SITE_ID",
    },
  },
  {
    country: "Canada",
    city: "Welland",
    short: "Welland",
    long: "Welland",
    id: "welland",
    id_city_name: "welland",
    primary: "welland",
    center: null,
    latitude: null,
    longitude: null,
    info: "http://hub.arcgis.com/datasets/welland::welland-trees",
    srs: null,
    download:
      "https://opendata.arcgis.com/datasets/4357fb7835fe49b39197a9440b2e868b_0.zip",
    format: "zip",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      description: "Genus",
      dbh: "DiamDBH",
      planted: "DatePlant",
      location: "PlantArea",
    },
  },
  {
    country: "Canada",
    city: "Welland",
    short: "Welland",
    long: "Welland",
    id: "welland",
    id_city_name: "welland",
    primary: "welland",
    center: null,
    latitude: null,
    longitude: null,
    info: "http://hub.arcgis.com/datasets/welland::welland-trees",
    srs: null,
    download:
      "https://opendata.arcgis.com/datasets/4357fb7835fe49b39197a9440b2e868b_0.zip",
    format: "zip",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      description: "Genus",
      dbh: "DiamDBH",
      planted: "DatePlant",
      location: "PlantArea",
    },
  },
  {
    country: "Canada",
    city: "Ajax",
    short: "Ajax",
    long: "Ajax",
    id: "ajax",
    id_city_name: "ajax",
    primary: "ajax",
    center: null,
    latitude: null,
    longitude: null,
    info: "http://hub.arcgis.com/datasets/TownofAjax::town-trees",
    srs: null,
    download:
      "https://opendata.arcgis.com/datasets/c5d5ff5351a54fdb8d3934abbb5cda9a_8.zip",
    format: "zip",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      dbh: "DBH",
      common: "TYPE",
      updated: "LAST_EDI_1",
      note: "COMMENTS",
    },
  },
  {
    country: "Canada",
    city: "Prince George",
    short: "Prince George",
    long: "Prince George",
    id: "prince_george",
    id_city_name: "prince_george",
    primary: "prince_george",
    center: null,
    latitude: null,
    longitude: null,
    info: "http://hub.arcgis.com/datasets/CityofPG::trees",
    srs: null,
    download:
      "https://opendata.arcgis.com/datasets/054e46bee4594eb787d574266c832430_3.zip",
    format: "zip",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      planted: "TreePlantD",
      common: "CommonName",
      genus: "GenusName",
      species: "SpeciesNam",
      variety: "VarietyNam",
      age: "TreeAge",
      height: "TreeHeight",
      dbh: "DBH",
      crown: "TreeCrownA",
      health: "ConditionD",
      location: "TreeClassi",
    },
  },
  {
    country: "Canada",
    city: "Oakville",
    short: "Oakville",
    long: "Oakville",
    id: "oakville",
    id_city_name: "oakville",
    primary: "oakville",
    center: null,
    latitude: null,
    longitude: null,
    info: "http://hub.arcgis.com/datasets/ExploreOakville::trees",
    srs: null,
    download:
      "https://opendata.arcgis.com/datasets/66e3b95688394391a433fd29873aff20_10.zip",
    format: "zip",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      scientific: '(x) => String(x.SPECIES).split(" - ")[1]',
      common: '(x) => String(x.SPECIES).split(" - ")[0]',
      dbh: "DBH",
      height: "HEIGHT",
      crown: "CROWN_WIDT",
    },
  },
  {
    country: "Canada",
    city: "Victoria",
    short: "Victoria",
    long: "Victoria",
    id: "victoria_bc",
    id_city_name: "victoria_bc",
    primary: "victoria_bc",
    center: null,
    latitude: null,
    longitude: null,
    info: "http://hub.arcgis.com/datasets/VicMap::tree-species",
    srs: null,
    download:
      "https://opendata.arcgis.com/datasets/36e90771770542baaa89afddce69195a_15.zip",
    format: "zip",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      scientific: "Species",
      dbh: "DiameterAt",
      height: "Height",
      age: "PlantingDa",
      planted: "YearPlante",
      updated: "InventoryD",
    },
  },
  {
    country: "Canada",
    city: "Kamloops",
    short: "Kamloops",
    long: "City of Kamloops",
    id: "kamloops",
    id_city_name: "kamloops",
    primary: "kamloops",
    center: null,
    latitude: null,
    longitude: null,
    info: "http://hub.arcgis.com/datasets/kamloops::trees",
    srs: null,
    download:
      "https://opendata.arcgis.com/datasets/e14c04be6c6c4692b70147edb937088c_25.zip",
    format: "zip",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      common: "SPECIES",
      spread: "SPREAD",
      planted: "PLANTEDYEA",
      ref: "FACILITYID",
    },
  },
  {
    country: "Canada",
    city: "Chestermere",
    short: "Chestermere",
    long: "Chestermere",
    id: "chestermere",
    id_city_name: "chestermere",
    primary: "chestermere",
    center: null,
    latitude: null,
    longitude: null,
    info: "http://hub.arcgis.com/datasets/Chestermere::tree-points",
    srs: null,
    download:
      "https://opendata.arcgis.com/datasets/72e47f7c7b194047936ebb0ce3c4d32e_0.zip",
    format: "zip",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      common: "Species",
      scientific: "Species_Sc",
      planted: "Date_Plant",
      height: "Height__me",
      health: "Condition",
    },
  },
  {
    country: "Canada",
    city: "New West",
    short: "New West",
    long: "New West",
    id: "new_west_west",
    id_city_name: "new_west_west",
    primary: "new_west_west",
    center: null,
    latitude: null,
    longitude: null,
    info: "http://hub.arcgis.com/datasets/newwestcity::trees-west",
    srs: null,
    download:
      "https://opendata.arcgis.com/datasets/eb043d306e4b4652a10b4b7b51f718ab_102.zip",
    format: "zip",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      scientific: "Scientific",
      common: "Common_Nam",
      variety: "Cultivar",
    },
  },
  {
    country: "Canada",
    city: "New West",
    short: "New West",
    long: "New West",
    id: "new_west_east",
    id_city_name: "new_west_east",
    primary: "new_west_west",
    center: null,
    latitude: null,
    longitude: null,
    info: "http://hub.arcgis.com/datasets/newwestcity::trees-east",
    srs: null,
    download:
      "https://opendata.arcgis.com/datasets/341e47f1d4cd4b4aa14a8804b992cc7e_101.zip",
    format: "zip",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      scientific: "Scientific",
      common: "Common_Nam",
      variety: "Cultivar",
    },
  },
  {
    country: "Canada",
    city: "Maple Ridge",
    short: "Maple Ridge",
    long: "Maple Ridge",
    id: "maple_ridge",
    id_city_name: "maple_ridge",
    primary: "maple_ridge",
    center: null,
    latitude: null,
    longitude: null,
    info: "http://hub.arcgis.com/datasets/mapleridge::street-tree",
    srs: null,
    download:
      "https://opendata.arcgis.com/datasets/290505c676d64cf09989eca1320aedd3_5.zip",
    format: "zip",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      species: "Species",
      common: "CommonName",
      variety: "Variety",
      genus: "Genus",
    },
  },
  {
    country: "Canada",
    city: "Barrie",
    short: "Barrie",
    long: "Barrie",
    id: "barrie",
    id_city_name: "barrie",
    primary: "barrie",
    center: null,
    latitude: null,
    longitude: null,
    info: "http://hub.arcgis.com/datasets/barrie::tree-location",
    srs: null,
    download:
      "https://opendata.arcgis.com/datasets/16123463ba3d48859a83f4883a414a45_7.zip",
    format: "zip",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: { ref: "ASSETID", location: "TREETYPE" },
  },
  {
    country: "Canada",
    city: "Victoriaville",
    short: "Victoriaville",
    long: "Victoriaville",
    id: "victoriaville",
    id_city_name: "victoriaville",
    primary: "victoriaville",
    center: null,
    latitude: null,
    longitude: null,
    info: "http://hub.arcgis.com/datasets/victoriaville::tree",
    srs: null,
    download:
      "https://opendata.arcgis.com/datasets/ae1c4b5613334d8a823359565fafb911_12.zip",
    format: "zip",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {},
  },
  {
    country: "Canada",
    city: "Lethbridge",
    short: "Lethbridge",
    long: "Lethbridge",
    id: "lethbridge_ca",
    id_city_name: "lethbridge_ca",
    primary: "lethbridge_ca",
    center: null,
    latitude: null,
    longitude: null,
    info: "http://opendata.lethbridge.ca/datasets/82841132047d47659508f60c52f6346a_0",
    srs: null,
    download:
      "https://opendata.arcgis.com/datasets/82841132047d47659508f60c52f6346a_0.zip",
    format: null,
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      common: "species",
      dbh: "diameter",
      height: "height",
      spread: "spread",
      trunks: "trunks",
      planted: "planted",
      ref: "AssetID",
    },
  },
  {
    country: "Canada",
    city: "Kitchener",
    short: "Kitchener",
    long: "Kitchener",
    id: "kitchener_ca",
    id_city_name: "kitchener_ca",
    primary: "kitchener_ca",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://open-kitchenergis.opendata.arcgis.com/datasets/e42a9601b87a4417b3d3d15a0f596f64_0",
    srs: null,
    download:
      "https://opendata.arcgis.com/datasets/e42a9601b87a4417b3d3d15a0f596f64_0.zip",
    format: null,
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      ref: "TREEID",
      common: "SPECIES_NA",
      scientific: "SPECIES_LA",
      planted: "YEAR_PLANT",
      updated: "UPDATE_DAT",
      dbh: "DBH",
      note: "NOTES",
    },
  },
  {
    country: "Canada",
    city: "Missisauga",
    short: "Missisauga",
    long: "Missisauga",
    id: "mississauga_ca",
    id_city_name: "mississauga_ca",
    primary: "mississauga_ca",
    center: null,
    latitude: null,
    longitude: null,
    info: "http://data.mississauga.ca/datasets/city-owned-tree-inventory",
    srs: null,
    download:
      "https://opendata.arcgis.com/datasets/b3f7ee3952094b87b4a1d82d5f19dc0e_0.zip?outSR=%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D",
    format: null,
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      dbh: "DIAM",
      planted: "INSTDATE",
      common: "CBOTDESC",
      updated: "MODDTTM",
    },
  },
  {
    country: "Canada",
    city: "St Catharines",
    short: "St Catharines",
    long: "St Catharines",
    id: "st_catharines_ca",
    id_city_name: "st_catharines_ca",
    primary: "st_catharines_ca",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://niagaraopendata.ca/dataset/st-catharines-trees",
    srs: null,
    download:
      "https://niagaraopendata.ca/dataset/06257b18-da24-424e-a609-48d6f3d4f018/resource/c549fce9-f032-48f9-9c0a-2adc9d1e0a40/download/trees.csv",
    format: null,
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      scientific: "BOTANICAL",
      common: "COMMON",
      dbh: "DBH",
      trunks: "STEMS",
    },
  },
  {
    country: "Canada",
    city: "York",
    short: "York",
    long: "York",
    id: "york_ca",
    id_city_name: "york_ca",
    primary: "york_ca",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://insights-york.opendata.arcgis.com/datasets/street-trees",
    srs: null,
    download:
      "https://opendata.arcgis.com/datasets/293d80c24bf54a4f8ab66bddaeaab184_0.zip",
    format: null,
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      ref: "TREEID",
      scientific: "SPECIES",
      common: "COMMONNAME",
      planted: "YEARPLANTE",
      dbh: "CURRENTDBH",
      height: "TREEHEIGHT",
      owner: "OWNERSHIP",
    },
  },
  {
    country: "Canada",
    city: "Repentigny",
    short: "Repentigny",
    long: "Repentigny",
    id: "repentigny_ca",
    id_city_name: "repentigny_ca",
    primary: "repentigny_ca",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://www.donneesquebec.ca/recherche/fr/dataset/vrep-arbres",
    srs: null,
    download:
      "https://www.donneesquebec.ca/recherche/dataset/d65f10dd-9948-4b52-bc4c-b40261e2c593/resource/850da247-cf55-45fd-82e7-bcc9693a7e9e/download/arbres.zip",
    format: null,
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      common: "ESSENCE_FR",
      scientific: "ESSENCE_LA",
      dbh: "DHP",
      health: "ETAT",
      owner: "PROPRIETE",
      planted: "DATE_PLANT",
      updated: "DATE_RELEV",
    },
  },
];
