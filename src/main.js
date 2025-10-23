import axios from 'axios'
import 'bulma/css/bulma.min.css';
import './fonts/fonts.css';
import './styles/style.scss';

const root = document.querySelector('#houses');
const accordionTemplate = document.querySelector('#accordion-template').content;

let data = {};

axios.get('https://wizard-world-api.herokuapp.com/Houses')
     .then(res => { 
        console.log(res);
        console.log(root);
            res.data.forEach(house => {
            const accordionElement = accordionTemplate.querySelector('.column').cloneNode(true);
            accordionElement.querySelector('.house-name').textContent = house.name;
            accordionElement.querySelector('.house-founder').textContent = `Основатель - ${house.founder}`;
            accordionElement.querySelector('.house-ghost').textContent = `Призрак - ${house.ghost}`;
            accordionElement.querySelector('.house-animal').textContent = `Символ - ${house.animal}`;
            accordionElement.querySelector('.house-image').setAttribute('src', `/images/${house.name}.avif`)
            root.appendChild(accordionElement);
        })
     });

