// создать несколько переменных при использовании ключевого слова let с типом boolean.

let completed: boolean = false
let noCompleted: boolean = true
let copm: boolean = false

/*попытаться изменить значение переменной на любое другое значение.
Объяснить в комментариях к заданию, получилось ли у вас это сделать? если да, почему? если нет, почему?*/

/*Как я понял изменить певоночально заданное значение в TS, изменить нельзя.
  TypeScript  предлагает более строгий контроль типов этим он так же отличается от JS */

// создать несколько переменных при использовании ключевого слова let с типом number.

let oneNum: number = 30
let twoNum: number = 7.10
let threeNum: number = 0x00d

/*попытаться изменить значение переменной на любое другое значение.
Объяснить в комментариях к заданию, получилось ли у вас это сделать? если да, почему? если нет, почему?*/

/*Как я понял изменить певоночально заданное значение в TS, изменить нельзя.
  TypeScript  предлагает более строгий контроль типов этим он так же отличается от JS */

// создать несколько переменных при использовании ключевого слова let с типом string.

let string: string = "fron"
let oneString: string = 'tend'

/*попытаться изменить значение переменной на любое другое значение.
Объяснить в комментариях к заданию, получилось ли у вас это сделать? если да, почему? если нет, почему?*/

/*Как я понял изменить певоночально заданное значение в TS, изменить нельзя.
  TypeScript  предлагает более строгий контроль типов этим он так же отличается от JS */

// создать несколько переменных при использовании ключевого слова let с типом null и undefined.

const n: null = null
const u: undefined = undefined

/*попытаться изменить значение переменной на любое другое значение.
Объяснить в комментариях к заданию, получилось ли у вас это сделать? если да, почему? если нет, почему?*/

/*Как я понял изменить певоночально заданное значение в TS, изменить нельзя.
  TypeScript  предлагает более строгий контроль типов этим он так же отличается от JS */



  // Cоздать несколько функции которые возвращают результат выполнения функции с типом void.
  /*При использовании типа void невозможно применить функцию c возвращением*/



  /*
13. сначала используйте функцию без ключевого слова  return, проверьте будет ли ошибка.
    Если нет, добавьте перед возвращаемым значением ключевое слово return и проверьте будет ли ошибка?
    если да, попытайтесь в комментарии к заданию объяснить, почему возникает ошибка?
 */

    const meetUsers = (): void => {
      alert("Hello my friends!")
    }


    const met = (): void => {
      return 5
    }
/*Тип return не соответствует типу void поэтому нельзя вернуть число,строку и т.д */