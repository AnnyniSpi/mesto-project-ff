const content = document.querySelector('.content'),
      list = content.querySelector('.places__list'),
      popup = document.querySelector('.popup_type_new-card'),
      openPopup = content.querySelector('.profile__add-button'),
      closePopup = popup.querySelector('.popup__close'),
      saveButton =  popup.querySelector('.popup__button'),
      template = document.querySelector('#card-template').content;

function createCard(card, deleteFunction) {
  const cardElement = template.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteCardButton = cardElement.querySelector('.card__delete-button');

  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardTitle.textContent = card.name;

  deleteCardButton.addEventListener('click', () => deleteFunction(cardElement));

  return cardElement;
}

function deleteCard(card) {
  card.remove();
}

function renderCards(cards) {
  list.replaceChildren();

  cards.forEach(item => {
    const card = createCard(item, deleteCard)
    list.append(card);
  });
}

function addCard(cardName, cardUrl) {
  initialCards.push({name:cardName , link:cardUrl});
  renderCards(initialCards);
  popup.classList.remove('popup_is-opened');
}

openPopup.addEventListener('click', () => {
  popup.classList.add('popup_is-opened');
});

closePopup.addEventListener('click', () => {
  popup.classList.remove('popup_is-opened');
});

saveButton.addEventListener('click', (e) => {
  e.preventDefault();

  const cardName = popup.querySelector('.popup__input_type_card-name').value;
  const cardUrl = popup.querySelector('.popup__input_type_url').value;

  addCard(cardName, cardUrl); 
});

renderCards(initialCards);

