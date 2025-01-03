const content = document.querySelector('.content'),
      list = content.querySelector('.places__list'),
      popup = document.querySelector('.popup_type_new-card'),
      openPopup = content.querySelector('.profile__add-button'),
      closePopup = popup.querySelector('.popup__close'),
      saveButton =  popup.querySelector('.popup__button'),
      template = document.querySelector('#card-template').content;


function renderCards(cards) {
  list.replaceChildren();

  for(let i = 0; i < cards.length; i++){
    let cardElement = template.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__image').src = cards[i].link;
    cardElement.querySelector('.card__title').textContent = cards[i].name;

    deleteCard(cardElement);
    list.append(cardElement);
  }
}

function deleteCard(card) {
  const deleteCardButton = card.querySelector('.card__delete-button');

  deleteCardButton.addEventListener('click', () => {
    card.remove();
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
