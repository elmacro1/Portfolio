import {
  RENDER_ABOUT,
  RENDER_CONTACT,
  RENDER_HOME,
  RENDER_PROJECTS,
  RENDER_SKILLS,
  CHANGE_LENGUAGE,
} from "../actions/constantes";

let initialStore = {
  componentRender: "home",
  lenguage: "english",
};

export default function rootReducer(state = initialStore, action) {
  switch (action.type) {
    case RENDER_ABOUT:
      return {
        ...state,
        componentRender: "about",
      };
    case RENDER_HOME:
      return {
        ...state,
        componentRender: "home",
      };
    case RENDER_CONTACT:
      return {
        ...state,
        componentRender: "contact",
      };
    case RENDER_PROJECTS:
      return {
        ...state,
        componentRender: "projects",
      };
    case RENDER_SKILLS:
      return {
        ...state,
        componentRender: "skills",
      };
    case CHANGE_LENGUAGE:
      return {
        ...state,
        lenguage: action.payload,
      };

    default:
      return state;
  }
}
