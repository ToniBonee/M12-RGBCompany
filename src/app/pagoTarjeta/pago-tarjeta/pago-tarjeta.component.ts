import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pago-tarjeta',
  templateUrl: './pago-tarjeta.component.html',
  styleUrls: ['./pago-tarjeta.component.css']
})
export class PagoTarjetaComponent {
  
  constructor() {}

  handleCardNumberInput() {
    const cardNumberInput = document.querySelector('.card-number-input') as HTMLInputElement;
    const cardNumberBox = document.querySelector('.card-number-box');
  
    if (cardNumberBox instanceof HTMLElement) {
      const cardNumber = cardNumberInput.value.replace(/\s/g, ''); // elimina espacios
      const formattedCardNumber = cardNumber.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 '); // agrega espacios cadaa 4 digitosd
      cardNumberBox.innerText = formattedCardNumber;
      cardNumberInput.value = formattedCardNumber;
    }
  }
  
  

  handleCardHolderInput() {
    const cardHolderInput = document.querySelector('.card-holder-input') as HTMLInputElement;
    const cardHolderName = document.querySelector('.card-holder-name');

    if (cardHolderName instanceof HTMLElement) {
      cardHolderName.innerText = cardHolderInput.value;
    }
  }

  handleMonthInput() {
    const monthInput = document.querySelector('.month-input') as HTMLInputElement;
    const expMonth = document.querySelector('.exp-month');

    if (expMonth instanceof HTMLElement) {
      expMonth.innerText = monthInput.value;
    }
  }

  handleYearInput() {
    const yearInput = document.querySelector('.year-input') as HTMLInputElement;
    const expYear = document.querySelector('.exp-year');

    if (expYear instanceof HTMLElement) {
      expYear.innerText = yearInput.value;
    }
  }

  handleCvvMouseEnter() {
    const front = document.querySelector('.front') as HTMLElement;
    const back = document.querySelector('.back') as HTMLElement;

    if (front && back) {
      front.style.transform = 'perspective(1000px) rotateY(-180deg)';
      back.style.transform = 'perspective(1000px) rotateY(0deg)';
    }
  }

  handleCvvMouseLeave() {
    const front = document.querySelector('.front') as HTMLElement;
    const back = document.querySelector('.back') as HTMLElement;

    if (front && back) {
      front.style.transform = 'perspective(1000px) rotateY(0deg)';
      back.style.transform = 'perspective(1000px) rotateY(180deg)';
    }
  }

  handleCvvInput() {
    const cvvInput = document.querySelector('.cvv-input') as HTMLInputElement;
    const cvvBox = document.querySelector('.cvv-box') as HTMLElement;
  
    if (cvvInput && cvvBox) {
      const inputValue = cvvInput.value;
      if (inputValue.length > 3) {
        cvvInput.value = inputValue.slice(0, 3);// aqui esta limitado a los 3 digitos
      }
      cvvBox.innerText = cvvInput.value;
    }
  }
  
}