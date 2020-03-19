import ApiService from "./ApiService.js";

const API_PREFIX = "/api/v1";
const DIRECTOR_SEARCH_PREFIX = `${API_PREFIX}/directors`;
const PERSON_SEARCH_URL = `${DIRECTOR_SEARCH_PREFIX}/search`;
const COPRPARTY_SEARCH_URL = `${DIRECTOR_SEARCH_PREFIX}/person`;
const CORPPARTY_OFFICE_URL = `${DIRECTOR_SEARCH_PREFIX}/person/officesheld`;

const CORPORATION_SEARCH_PREFIX = `${API_PREFIX}/businesses`;
const CORPORATION_SEARCH_URL = `${CORPORATION_SEARCH_PREFIX}/corporation/search/`;
const CORPORATION_DETAIL_SEARCH_URL = `${CORPORATION_SEARCH_PREFIX}/corporation`;

export function corpPartySearch(query) {
  return ApiService.get(`${PERSON_SEARCH_URL}/?${query}`);
}

export function corpPartySearchDetail(id) {
  return ApiService.get(`${COPRPARTY_SEARCH_URL}/${id}`);
}

export function corpPartyOfficeSearch(id) {
  return ApiService.get(`${CORPPARTY_OFFICE_URL}/${id}`);
}

export function corporationDetailSearch(id) {
  return ApiService.get(`${CORPORATION_DETAIL_SEARCH_URL}/${id}`);
}

export function corporationSearch(params) {
  return ApiService.get(`${CORPORATION_SEARCH_URL}`, {
    params
  });
}
