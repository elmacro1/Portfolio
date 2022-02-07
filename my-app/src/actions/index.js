import {
  RENDER_ABOUT,
  RENDER_CONTACT,
  RENDER_HOME,
  RENDER_PROJECTS,
  RENDER_SKILLS,
} from "./constantes";

export function renderHome() {
  return {
    type: RENDER_HOME,
  };
}

export function renderAbout() {
  return {
    type: RENDER_ABOUT,
  };
}

export function renderContact() {
  return {
    type: RENDER_CONTACT,
  };
}

export function renderProjects() {
  return {
    type: RENDER_PROJECTS,
  };
}

export function renderSkills() {
  return {
    type: RENDER_SKILLS,
  };
}
