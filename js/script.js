$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    rtl: false,
    loop: true,
    margin: 10,
    nav: true,
    lazyLoad: true,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  })
})

window.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop > 200) {
    document.getElementById('home-but').style.display = 'block'
  } else {
    document.getElementById('home-but').style.display = 'none'
  }
})

// =========================================================

var form = document.querySelector('#touch-form')

form &&
  form.addEventListener('input', function (e) {
    switch (e.target.id) {
      case 'name':
        NameValidation(e.target)
        break

      case 'email':
        emailValidation(e.target)
        break
    }
  })

function NameValidation(input) {
  var inputValue = input.value.trim()
  if (inputValue.length < 5)
    handleError(input, 'please enter at least 5 character')
  else handleError(input)
}

function showError(element, msg) {
  var errorElement = element.nextElementSibling
  errorElement.innerText = msg
}

function removeError(element) {
  var element = element.nextElementSibling
  element.innerText = ''
}

function handleError(element, msg = '') {
  var errorElement = element.nextElementSibling
  errorElement.innerText = msg
}

function emailValidation(input) {
  var regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  var inputValue = input.value
  console.log(regExp.test(inputValue)) //return boolean type

  regExp.test(inputValue) == false
    ? handleError(input, 'enter a valid email')
    : handleError(input)
}

form &&
  form.addEventListener('submit', function (e) {
    console.log(e)
  })
