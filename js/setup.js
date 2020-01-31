'use strict';
var userDialog = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var WIZARDS_QUANTITY = 4;
var wizardParams = {
  NAME: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  SURNAME: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  COAT_COLOR: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES_COLOR: ['black', 'red', 'blue', 'yellow', 'green']
};

var getRandomArrElement = function (arr) {
  var arrElement = Math.floor(Math.random() * arr.length);
  return arr[arrElement];
};

var getCreature = function () {
  return {
    name: getRandomArrElement(wizardParams.NAME) + ' ' + getRandomArrElement(wizardParams.SURNAME),
    coatColor: getRandomArrElement(wizardParams.COAT_COLOR),
    eyesColor: getRandomArrElement(wizardParams.EYES_COLOR)
  };
};

var getCreatures = function (arrLength) {
  var creatures = [];
  for (var i = 0; i < arrLength; i++) {
    creatures.push(getCreature());
  }
  return creatures;
};

var getWizard = function (creatures) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = creatures.name;
  wizardElement.querySelector('.wizard-coat').style.fill = creatures.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = creatures.eyesColor;
  return wizardElement;
};

var getWizards = function (creatures) {
  var fragment = document.createDocumentFragment();
  creatures.forEach(function (item) {
    fragment.appendChild(getWizard(item));
  });
  return fragment;
};

var initApp = function () {
  userDialog.classList.remove('hidden');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
  similarListElement.appendChild(getWizards(getCreatures(WIZARDS_QUANTITY)));
};

initApp();
