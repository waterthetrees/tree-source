import path from "path";

// Paths -----------------------------------------------------------------------
const __dirname = path.dirname(import.meta.url.split(":")[1]);
export const ROOT_DIRECTORY = path.join(__dirname, "..");
export const SOURCES_DIRECTORY =
  process.env.SOURCES_DIRECTORY || path.join(ROOT_DIRECTORY, "sources");
export const DATA_DIRECTORY =
  process.env.DATA_DIRECTORY || path.join(ROOT_DIRECTORY, "data");
export const RAW_DIRECTORY =
  process.env.RAW_DIRECTORY || path.join(DATA_DIRECTORY, "raw");
export const GEOJSON_DIRECTORY =
  process.env.DATA_DIRECTORY || path.join(DATA_DIRECTORY, "geojson");
export const NORMALIZED_DIRECTORY =
  process.env.NORMALIZED_DIRECTORY || path.join(DATA_DIRECTORY, "normalized");

// Data ------------------------------------------------------------------------
export const DEFAULT_CRS = "EPSG:4326";

export const POSSIBLE_LONGITUDE_FIELDS = [
  "Longitude",
  "Lon",
  "Lng",
  "LONG",
  "X",
  "X_LONG",
  "long",
  "X_Koordina",
  "X-Koordinate",
  "coord long",
  "X_COORD",
  "COORDENADA X",
];

export const POSSIBLE_LONGITUDE_FIELDS_STRING =
  POSSIBLE_LONGITUDE_FIELDS.join(",");

export const POSSIBLE_LATITUDE_FIELDS = [
  "Latitude",
  "Lat",
  "LAT",
  "Y",
  "Y_LAT",
  "lat",
  "Y_Koordina",
  "Y-Koordinate",
  "coord lat",
  "Y_COORD",
  "COORDENADA Y",
];

export const POSSIBLE_LATITUDE_FIELDS_STRING =
  POSSIBLE_LATITUDE_FIELDS.join(",");

export const POSSIBLE_GEOMETRY_FIELDS = [
  "the_geom",
  "SHAPE",
  "wkb_geometry",
  "geo_shape",
  "GEOMETRIE",
  "geom",
];

export const POSSIBLE_GEOMETRY_FIELDS_STRING =
  POSSIBLE_GEOMETRY_FIELDS.join(",");
