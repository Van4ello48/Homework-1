//ToDo - вам необходимо скопировать данный скрипт в свой проект, и сдавать ДЗ в рамках собственного репозитория


// 1) Какие виды областей видимости вы знаете? Написать ответ ниже
/*
1. Глобальная область видимости
2. Локальная область видимости
3. Блочная область видимости
4. Область видимости в try catch
5. Область видимости функции eval()
*/
// 2) Исправьте код так чтобы в консоль выводились числа от 0 до 10
    setTimeout(() => {
        for (var i = 0; i <= 10; i++) {
       console.log(i);
        }
    }, 0)
 
 
 // 3) Исправьте код так чтобы в консоль выводилось "John"
 var firstName = "Elena"
 const obj = {
    firstName: 'John',
    sayFirstName: function () {
       console.log(this.firstName)
    }
 }
 obj.sayFirstName();
 
 
 // 4) Исправьте код так чтобы в консоль не выводилась ошибка (нельзя исправлять тело функции getArrowFunction)
 const user = {
    age: 20
 }
 function getArrowFunction() {
    "use strict"
    return () => {
       console.log(this.age)
    }
 }
 
 const arrowFunction = getArrowFunction.bind(user);
 arrowFunction();