
import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';


import fieldsDemo from 'store/reducers/base/fieldsDemo';
import fieldsAuthorization from 'store/reducers/base/fieldsAuthorization';
import fieldsRegistration from 'store/reducers/base/fieldsRegistration';

import fieldsAccount from 'store/reducers/base/fieldsAccount';
import fieldsCards from 'store/reducers/base/fieldsCards.js';
import fieldsNurseries from 'store/reducers/base/fieldsNurseries';
import fieldsAnnouncement from 'store/reducers/base/fieldsAnnouncement';
import fieldsCompany from 'store/reducers/base/fieldsCompany';
import fieldsServices from 'store/reducers/base/fieldsServices';


import fieldsChat from 'store/reducers/base/fieldsChat';
import fieldsReviews from 'store/reducers/base/fieldsReviews';
import fieldsPages from 'store/reducers/base/fieldsPages';


import fieldsFeedback from 'store/reducers/base/fieldsFeedback';
import russianCities from "store/reducers/base/russianCities";

import infoAccountReducer from "store/reducers/infoAccountReducer";

import popupReducer from "store/reducers/popupReducer";

import popupMapInfoReducer from "store/reducers/popupMapInfoReducer";


import listingSearchReducer from "store/reducers/listingSearchReducer";



const rootReducer = combineReducers({
  form: formReducer,
  fieldsDemo: fieldsDemo,
  fieldsAuthorization: fieldsAuthorization,
  fieldsRegistration: fieldsRegistration,
  fieldsAccount: fieldsAccount,
  fieldsCards: fieldsCards,
  fieldsNurseries: fieldsNurseries,
  fieldsAnnouncement: fieldsAnnouncement,
  fieldsCompany: fieldsCompany,
  fieldsServices: fieldsServices,
  fieldsFeedback: fieldsFeedback,
  fieldsChat: fieldsChat,
  fieldsReviews: fieldsReviews,
  fieldsPages: fieldsPages,
  russianCities: russianCities,
  accountInfo: infoAccountReducer,
  popupReducer: popupReducer,
  popupMapInfoReducer: popupMapInfoReducer,
  listingSearchReducer: listingSearchReducer,
});

export default rootReducer;
