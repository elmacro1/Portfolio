import {
  RENDER_ABOUT,
  RENDER_CONTACT,
  RENDER_HOME,
  RENDER_PROJECTS,
  RENDER_SKILLS,
} from "../actions/constantes";

let initialStore = {
  componentRender: "home",
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

    default:
      return state;
  }
}
