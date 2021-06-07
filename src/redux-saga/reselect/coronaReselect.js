import { createSelector } from 'reselect';
import { helpers } from '../helpers/common';    

// viet ham lay state tu reducer 
const dataVirus = state => state.corona;

// lay state loading 
export const getDataLoading = createSelector(
  dataVirus,
  item => item.loading
)

// lay data global
export const getDataGlobalVirus = createSelector(
  dataVirus,
  item => {
    if (!helpers.isEmptyObject(item.virus)) {
      if (item.virus.hasOwnProperty('Global')) {
        return item.virus.Global;
      }
      return null;
    }
    return null;
  }  
)

// lay data country
export const getDataCountryVirus = createSelector(
  dataVirus,
  item => {
    if (!helpers.isEmptyObject(item.virus)) {
      if (item.virus.hasOwnProperty('Countries')) {
        return item.virus.Countries
      }
      return null;
    }
    return null;
  }
)