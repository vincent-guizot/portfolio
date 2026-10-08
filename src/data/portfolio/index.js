/* ---------------------------------------------------------------------- *
 * Portfolio / Projects
 *
 * Each project lives in its own file: web projects under ./projects/,
 * backend APIs under ./apis/. To add a project:
 *   1. create ./projects/<slug>.js or ./apis/<slug>.js (copy an existing one)
 *   2. import it below and add it to the `projects` array.
 * The array order is the display order on the Portfolio page.
 * ---------------------------------------------------------------------- */

export { portfolioCategories } from "./categories";

import imgVentory from "./projects/img-ventory";
import vica from "./projects/vica";
import orangeKode from "./projects/orange-kode";
import orangeLms from "./projects/orange-lms";
import sadinoTechnology from "./projects/sadino-technology";
import cookiefy from "./projects/cookiefy";
import warnaloka from "./projects/warnaloka";
import dgrandeHotel from "./projects/dgrande-hotel";

/* Backend API Ecosystem — 12 bootcamp study-case APIs (no screenshots) */
import byteBurger from "./apis/byte-burger";
import kingsBrewApi from "./apis/kings-brew-api";
import castleKitchen from "./apis/castle-kitchen";
import quantumMart from "./apis/quantum-mart";
import tradeHub from "./apis/trade-hub";
import mPloyee from "./apis/m-ployee";
import leatherShelf from "./apis/leather-shelf";
import waretrackApi from "./apis/waretrack-api";
import codigram from "./apis/codigram";
import pineappleStack from "./apis/pineapple-stack";
import medievalAirbnb from "./apis/medieval-airbnb";
import nomad from "./apis/nomad";

export const projects = [
  imgVentory,
  vica,
  orangeKode,
  orangeLms,
  sadinoTechnology,
  cookiefy,
  warnaloka,
  dgrandeHotel,
  byteBurger,
  kingsBrewApi,
  castleKitchen,
  quantumMart,
  tradeHub,
  mPloyee,
  leatherShelf,
  waretrackApi,
  codigram,
  pineappleStack,
  medievalAirbnb,
  nomad,
];
