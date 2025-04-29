import { createApp } from 'vue'

import AboutContainer from './components/AboutContainer/AboutContainer.vue';
import AboutDescription from './components/AboutDescription/AboutDescription.vue';
import DefaultSection from './components/DefaultSection/DefaultSection.vue';
import EyeFollow from './components/EyeFollow/EyeFollow.vue';
import FooterEmbed from './components/FooterEmbed/FooterEmbed.vue';
import GameProjects from './components/GameProjects/GameProjects.vue';
import HeaderEmbed from './components/HeaderEmbed/HeaderEmbed.vue';
import HeaderNavbar from './components/HeaderNavbar/HeaderNavbar.vue';
import Logo from './components/Logo/Logo.vue';
import NamePart from './components/NamePart/NamePart.vue';
import ProjectsContainer from './components/ProjectsContainer/ProjectsContainer.vue';
import Television from './components/Television/Television.vue';
import UtilitiesProject from './components/UtilitiesProject/UtilitiesProject.vue';

const app = createApp({});

app.component('about-container', AboutContainer);
app.component('about-description', AboutDescription);
app.component('default-section', DefaultSection);
app.component('eye-follow', EyeFollow);
app.component('footer-embed', FooterEmbed);
app.component('game-projects', GameProjects);
app.component('header-embed', HeaderEmbed);
app.component('header-navbar', HeaderNavbar);
app.component('logo', Logo);
app.component('name-part', NamePart);
app.component('projects-container', ProjectsContainer);
app.component('television', Television);
app.component('utilities-project', UtilitiesProject);

app.mount('#app');
